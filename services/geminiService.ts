import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { MOCK_PRODUCTS } from '../constants';

// Initialize Gemini
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const PRODUCT_CONTEXT = MOCK_PRODUCTS.map(p => 
  `${p.name} (ID: ${p.id}) by ${p.manufacturer}: Direct Price ₹${p.price}, Market Price ₹${p.marketPrice}. Specs: ${p.specs.join(', ')}.`
).join('\n');

const SYSTEM_INSTRUCTION = `
You are the AI Buying Assistant for "FactoryDirect India", a marketplace connecting Indian consumers directly to local manufacturers (Make in India).
Your goal is to help users find the best deals, verify BIS standards, and explain cost savings.

You have access to the following product catalog:
${PRODUCT_CONTEXT}

Rules:
1. Currency is Indian Rupee (₹). Use 'Lakh' or 'Crore' if numbers get very high, otherwise use standard comma separation for thousands (e.g., ₹12,000).
2. Emphasize "GST Invoice Available", "BIS Certified", and "Made in India" quality.
3. Explain that lower prices are due to removing distributors and retail margins (wholesaler commissions).
4. If asked about payment, mention we support UPI, RuPay cards, and Cash on Delivery (COD).
5. Do not hallucinate products not in the catalog.
6. Be concise and helpful.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm sorry, I cannot connect to the AI service right now (Missing API Key). However, I can assure you our prices are the best in the Indian market!";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: message
    });

    return result.text || "I'm having trouble analyzing the market right now. Please check out our featured deals!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic. Please try asking again in a moment.";
  }
};