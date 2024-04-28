const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
require('dotenv').config()
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.gemini_api);

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

async function run(path) {
  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt = "Initial knowledge to have:Optimized means in sense of time complexity or space complexity don't change the code to produce different result,change only if it minimizes time complexity or space complexity. Promt:Give the snippet code sametosame given in image in a format of object of key-value of keys language,code_snippet,optimized_code,changes_made bool every key must be in lower-case";

  const imageParts = [
    fileToGenerativePart(path, "image/png"),
  ];
  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  const str= response.candidates[0].content.parts[0].text;
  const jsontobe=str.slice(9,str.length-3);
  const json= JSON.parse(jsontobe);
  return json;
}

//run().then(function(result){
//	 console.log(result)
//	});

module.exports ={run}


