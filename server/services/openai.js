const OpenAI = require("openai");
require("dotenv").config();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function reviewResume(resumeText, role) {
  const response = await client.chat.completions.create({
    model: "gpt-5.5",
    messages: [
      {
        role: "user",
        content: `You are an expert resume reviewer for tech jobs in Australia.
        
Review this resume for a ${role} position and respond ONLY with a JSON object in this exact format:
{
  "overallScore": 74,
  "scores": {
    "keywords": 60,
    "impact": 45,
    "structure": 90
  },
  "suggestions": [
    { "priority": "high", "text": "Add numbers to achievements" },
    { "priority": "medium", "text": "Add a professional summary" },
    { "priority": "good", "text": "Clean formatting" }
  ],
  "missingKeywords": ["CI/CD", "Agile", "TypeScript"],
  "foundKeywords": ["React", "Node.js", "Python"]
}

Resume:
${resumeText}`,
      },
    ],
  });
  const raw = response.choices[0].message.content;
  return JSON.parse(raw.replace(/```json|```/g, "").trim());
}

// reviewResume(
//   `John Smith
// Software Engineer
// john.smith@email.com | linkedin.com/in/johnsmith | github.com/johnsmith

// EDUCATION
// Bachelor of Computer Science
// University of Sydney, 2023

// SKILLS
// JavaScript, React, Node.js, Express, MongoDB, Python, Git, HTML, CSS

// PROJECTS

// Pizza Delivery App
// - Built a react based pizza ordering app
// - Used redux for state management
// - Worked on the frontend components

// Weather App
// - Made a weather app using API
// - Used React hooks

// EXPERIENCE
// No professional experience yet. Currently seeking junior developer roles.`,
//   "junior dev",
// );

module.exports = { reviewResume };
