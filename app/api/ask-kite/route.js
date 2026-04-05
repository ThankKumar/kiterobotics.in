import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not defined");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Use v1beta for better compatibility with newer features
    const model = genAI.getGenerativeModel(
      { model: "gemini-1.5-flash" },
      { apiVersion: "v1beta" }
    );

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            { text: "System Prompt: You are 'Ask Kite 🤖', a smart and friendly Robotics Assistant from Kite Robotics. You help students understand Arduino, IoT, sensors (Ultrasonic, DHT11, LDR), coding, and robotics projects. Explain in simple steps, be interactive, and suggest practical examples." },
            { text: message }
          ],
        },
      ],
    });
    
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate response. Please try again." },
      { status: 500 }
    );
  }
}
