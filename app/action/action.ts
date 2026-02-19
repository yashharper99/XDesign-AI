"use server";
import { openRouter } from "@/lib/openrouter";
import { generateText } from "ai";

export async function generateProjectName(prompt: string) {
    try {
        const { text } = await generateText({
            model: openRouter.chat("google/gemini-2.5-flash-lite"),
            system: `
            Your are an AI assistant that generates very very short project names based on
            the user's prompt.
            - Keep it under 5 words.
            - Capitalize words apportiately.
            - Do not include any special characters.
            `,
            prompt: prompt,
        });
        return text?.trim() || "Untitled Project";
    } catch (error) {
        console.log(error);
        return "Untitled Project";
    }
}