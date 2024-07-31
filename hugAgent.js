import { HfAgent, LLMFromHub } from "@huggingface/agents";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const agent = new HfAgent(process.env.HUGGING_FACE_HF_TOKEN);

try {
    const code = await agent.generateCode("Draw a picture of a cat, wearing a top hat.");
    console.log(code); // always good to check the generated code before running it
    const outputs = await agent.evaluateCode(code);
    console.log(outputs);
} catch (error) {
    console.error("An error occurred:", error.message);
}
