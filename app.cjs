const dotenv = require('dotenv');

const { HfInference } = require('@huggingface/inference');
dotenv.config();
const HF_TOKEN = process.env.HUGGING_FACE_HF_TOKEN 
const inference = new HfInference(HF_TOKEN)
const mistal = inference.endpoint(
    "https://api-inference.huggingface.co/models/microsoft/Phi-3-mini-4k-instruct"
   );
   

async function huggingface(){

    const inference = await new HfInference(HF_TOKEN)
    const out = await inference.chatCompletion({
        model: "mistralai/Mistral-7B-Instruct-v0.3",
        messages: [{ role: "user", content: "I am facing this Problem When I send message from my frontend to you Rate limit reached. Please log in or use a HF access" }],
        max_tokens: 200
    });
    const fullResponse = out.choices[0].message
    // let fullResponse = ''
    // for await (const chunk of inference.chatCompletionStream({
    //   model: "microsoft/Phi-3-mini-4k-instruct",
    //   messages: [
    //     {
    //       role: "user",
    //       content:
    //         "By default How much word you will be able to generate in each prompt",
    //     },
    //   ],
      
    // })) {
    //     if (
    //       chunk.choices &&
    //       chunk.choices[0].delta &&
    //       chunk.choices[0].delta.content
    //     ) {
    //       fullResponse += chunk.choices[0].delta.content;

    //      }       
    // }

    console.log(fullResponse);

}

huggingface()