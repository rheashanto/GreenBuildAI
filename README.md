# 🌱 GreenBuild AI – Sustainable Construction Advisor

## 📌 Overview

GreenBuild AI is an intelligent web application that helps engineers, architects, and developers make **sustainable construction decisions**.
It analyzes building inputs and provides **carbon estimation, material recommendations, and AI-generated sustainability reports**.

---

## 🎯 Problem Statement

In modern construction, professionals often struggle to:

* Identify eco-friendly materials
* Estimate carbon footprint
* Compare sustainable alternatives
* Understand cost vs sustainability trade-offs

👉 GreenBuild AI solves this using **AI + data-driven insights**.

---

## 🚀 Features

### 🔹 1. Carbon Footprint Calculator

* Calculates CO₂ emissions based on material usage
* Uses datasets like ICE / EC3
* Formula:

  ```
  Carbon = Volume × Emission Factor
  ```

---

### 🔹 2. Material Recommendation AI

* Suggests eco-friendly alternatives based on:

  * Building type
  * Soil type
  * Climate
  * Cost
* Uses trained ML model

---

### 🔹 3. Sustainability Report Generator

* AI-generated detailed report including:

  * Sustainability assessment
  * Environmental weaknesses
  * Material alternatives
  * Carbon reduction strategies

---

### 🔹 4. AI Chatbot Assistant

* Interactive assistant for:

  * Sustainable construction queries
  * Material suggestions
  * Design improvements
* Powered by LLM (Groq / LLaMA)

---

## 🧠 AI & Technologies Used

* Machine Learning (PyTorch model)
* LLM Integration (Groq API)
* Data Processing (Pandas, NumPy)
* Frontend: Streamlit
* Backend: FastAPI (optional integration)

---

## 🏗️ System Architecture

```
User Input → Streamlit UI → ML Model → Prediction
                                ↓
                        LLM Report Generator
                                ↓
                         Final Output
```

---

## 📊 Input Parameters

* Building Type
* Soil Type
* Climate
* Material Usage
* Cost Constraints

---

## 📈 Output

* Predicted Carbon Emission
* Sustainability Score (out of 100)
* AI-generated Report
* Recommended Materials & Technologies

---

## ⚙️ Installation

### 1. Clone Repository

```
git clone https://github.com/your-username/greenbuild-ai.git
cd greenbuild-ai
```

### 2. Create Virtual Environment

```
python3 -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows
```

### 3. Install Requirements

```
pip install -r requirements.txt
```

### 4. Run App

```
streamlit run app.py
```

---

## 📂 Project Structure

```
greenbuild-ai/
│
├── app.py                # Streamlit frontend
├── model/
│   ├── greenbuild_model.pth
│   ├── scaler.pkl
│   ├── encoders.pkl
│   └── feature_columns.pkl
│
├── pages/               # Multi-page UI (optional)
├── data/                # Datasets (ICE, EC3)
├── requirements.txt
└── README.md
```

---

## 💡 Key Innovations

* Combines **ML + LLM** in construction domain
* Real-time sustainability scoring
* AI-powered report generation
* Interactive chatbot for decision support

---

## 🌍 Industry Impact

* Helps reduce carbon emissions in construction
* Promotes sustainable material usage
* Assists engineers in eco-friendly decision making
* Supports green building initiatives

---

## 🔮 Future Scope

* Integration with real-time construction databases
* BIM (Building Information Modeling) support
* Cost optimization module
* Mobile app version
* Live carbon tracking dashboard

---

## 👩‍💻 Contributors

* GowriSankar
* Rhea Shanto
* Vineeth
* Pranav

---

## 📜 License

This project is for academic and research purposes.

---
