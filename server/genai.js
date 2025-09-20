// server/genai.js
import express from "express";
import cors from "cors";
import { PredictionServiceClient } from "@google-cloud/aiplatform";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Initialize Google GenAI client
const client = new PredictionServiceClient({
  keyFilename: "./service-account.json",
});

app.post("/api/genai", async (req, res) => {
  const { message } = req.body;

  try {
    const request = {
      endpoint: `projects/teak-bebop-472711-e5/locations/us-central1/publishers/google/models/text-bison@001`,
      instances: [{ content: message }],
    };

    const [response] = await client.predict(request);
    const reply = response.predictions[0].content;

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Error calling Google GenAI API." });
  }
});

app.listen(PORT, () => console.log(`Google GenAI backend running on port ${PORT}`));
