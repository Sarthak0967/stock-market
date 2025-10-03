import { Inngest } from "inngest";

// lib/inngest/client.ts

// Fail fast if the Gemini API key is missing
if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is required');
}

export const inngest = new Inngest({
    id: 'stockinger',
    ai: { gemini: { apiKey: process.env.GEMINI_API_KEY } }
})