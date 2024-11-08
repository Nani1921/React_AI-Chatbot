import { GoogleGenerativeAI } from '@google/generative-ai';

// Retrieve the API key using import.meta.env (compatible with Vite)
const API_KEY = import.meta.env.VITE_API_KEY || ''; // Replace VITE_API_KEY with REACT_APP_API_KEY if configured as such

if (!API_KEY) {
  console.error("API key is missing! Make sure to define VITE_API_KEY in your .env file.");
}

// Initialize Google Generative AI client only if API_KEY is available
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

export const generateResponse = async (prompt) => {
  if (!genAI) {
    console.error("Google Generative AI client is not initialized due to missing API key.");
    throw new Error("AI service initialization failed.");
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    console.log("API Response:", response);
    return response.text();
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw error;
  }
};
