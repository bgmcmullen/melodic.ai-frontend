# 🎶 melodic.ai – AI Powered Sight Singing Training Tool

Melodic.ai is a judgment-free, supportive AI-powered coach that helps music students improve their sight-singing skills by generating exercises at their level and providing insightful feedback.

## 🧩 Problem

Sight-singing is one of the most fundamental, and most challenging, skills for music students to develop. Existing training tools often reduce performance to a binary “correct” or “incorrect” judgment and frequently struggle with accuracy due to the complexity of the human voice and limitations of traditional DSP.

Melodic.ai uses AI tools to more accurately assess pitch and offer supportive, constructive feedback to help students grow their singing ability without judgment or frustration.

## 🎯 MVP Features

  ### 🎤 Sing-to-Notation
    The app plays a starting pitch
    The user sings a short melody
    The app:
      - Tracks pitch over time
      - Provides AI-generated feedback
      - Generates a new melody at an appropriate difficulty level based on the user’s performance

---


## 🛠 Core Technology

| Component             | Tool / Library |
|-----------------------|----------------|
| Pitch tracking        | `crepe`        |
| Audio input           |  Web Audio API |
| Notation rendering    |  `VexFlow`     |
| Web backend           |  FastAPI       |
| Frontend              |  React         |

---