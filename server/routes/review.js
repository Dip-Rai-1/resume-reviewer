const express = require("express");
const router = express.Router();
const { reviewResume } = require("../services/openai");

router.post("/review", async (req, res) => {
  try {
    const { resumeText, role } = req.body;
    if (!resumeText || resumeText.trim().length < 50) {
      return res.status(400).json({ error: "Please provide a valid resume" });
    }
    const result = await reviewResume(resumeText, role);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
