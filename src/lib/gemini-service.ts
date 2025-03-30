import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

// Ensure API key is available
// if (!process.env.GEMINI_API_KEY) {
//   throw new Error("Missing GEMINI_API_KEY in environment variables.");
// }

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI("AIzaSyA9WYJQTJTzsFmQoW7Gf8JZhTUssaHjx-k");

export interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string[];
}

export async function generateDrinkRecipes(ingredients: string): Promise<Recipe[]> {
  try {
    // Initialize the model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });

    // Send the prompt to Gemini API
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: createPrompt(ingredients) }] }]
    });

    // Extract text response
    const response = result.response.text();

    // Parse the JSON response safely
    return parseRecipes(response);
  } catch (error) {
    console.error("Error generating recipes:", error);
    return [];
  }
}

// Function to generate prompt
function createPrompt(userInput: string | undefined): string {

  if (!userInput || typeof userInput !== "string") {
    throw new Error("Invalid input: Please provide a comma-separated list of ingredients and/or a mood.");
  }

  const inputs: string[] = userInput
    .split(",")
    .map((i: string) => i.trim())
    .filter((i: string) => i.length > 0);

  const ingredients: string[] = [];
  let mood: string | null = null;

  // Define a set of known moods for detection
  const moodKeywords: Set<string> = new Set([
    "happy", "relaxed", "energetic", "romantic", "cozy", "adventurous",
    "party", "chill", "moody", "excited", "calm", "bold", "intimate"
  ]);

  // Classify inputs as either ingredients or moods
  for (const input of inputs) {
    if (moodKeywords.has(input.toLowerCase())) {
      mood = input; // Assign detected mood
    } else {
      ingredients.push(input); // Otherwise, treat it as an ingredient
    }
  }

  // Start building the prompt
  let prompt: string = "You are an expert bartender and mixologist with deep knowledge of flavors and cocktail pairings.";

  if (ingredients.length > 0) {
    prompt += `\n\n**Ingredients Provided:**\n- ${ingredients.join(", ")}`;
  } else {
    prompt += `\n\nThe user did not specify ingredients, so you can be creative in selecting suitable ones.`;
  }

  if (mood) {
    prompt += `\n\n**User's Mood/Vibe:**\n- "${mood}"\n\nYour task is to craft cocktails that match this feeling.`;
  } else {
    prompt += `\n\nThe user did not specify a mood, so focus purely on making great drinks based on ingredients.`;
  }

  prompt += `\n\n### **Instructions:**  
  - Ensure each drink prominently features the provided ingredients (if any).  
  - Tailor the drink’s flavor, presentation, and name to match the user’s mood (if given).  
  - Be creative with unique names and explain why each drink fits the vibe.  
  - If no mood is given, create drinks with interesting, enjoyable flavors.  

  ### **Response Format:**  
  Provide a **strict JSON array** of objects following this format:  

  \`\`\`json
  [
    {
      "name": "Moonlit Serenity",
      "moodFit": "Perfect for a calm and relaxing evening",
      "ingredients": ["2 oz gin", "1 oz lavender syrup", "4 oz tonic water", "Ice"],
      "instructions": [
        "Fill a glass with ice",
        "Pour gin and lavender syrup over ice",
        "Top with tonic water and gently stir",
        "Garnish with a lemon twist and lavender sprig"
      ]
    }
  ]
  \`\`\`

  **Important:**  
  - **Keep responses strictly in valid JSON format** for easy parsing.  
  - Avoid unnecessary text outside the JSON response.  
  - Make sure drink names and descriptions reflect the mood and/or ingredients.  

  Now, generate 3-4 **amazing cocktails** based on the inputs provided.`;

  return prompt;
}

// Function to safely parse the AI response
function parseRecipes(response: string): Recipe[] {
  try {
    const cleanedResponse = response.replace(/```json|```/g, "").trim();
    return JSON.parse(cleanedResponse) as Recipe[];
  } catch (error) {
    console.error("Failed to parse recipe JSON:", error, "Raw response:", response);
    return [];
  }
}
