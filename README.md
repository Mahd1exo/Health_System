# Health System

An ASP.NET Core MVC app that analyzes uploaded lab report images and optional profile inputs to produce tailored health insights (nutrition, fitness, risk, and more), with optional YouTube recommendations.

## Features
- Upload one or more lab report images for analysis.
- Add optional profile inputs (age, weight, allergies, medical conditions, etc.).
- Choose from multiple analysis reports (nutrition, cardio risk, metabolic health, and more).
- Optional video recommendations via YouTube search.
- Results rendered as HTML snippets for a clean report view.

## Tech Stack
- **.NET 8 / ASP.NET Core MVC**
- **HttpClientFactory** for outbound API calls
- **OpenAI API** (chat/completions)
- **YouTube Data API** (video search)

## Project Structure
```
Controllers/         MVC controllers (request handling, API orchestration)
Models/              View models (if/when added)
Views/               Razor views (UI)
wwwroot/             Static assets
Program.cs           App bootstrap/configuration
appsettings*.json    Configuration (API keys, logging)
```

## Getting Started

### Prerequisites
- .NET SDK 8.0+
- API keys for:
  - OpenAI
  - YouTube Data API

### Configuration
Set API keys in `appsettings.json` / `appsettings.Development.json`, or via environment variables.

**appsettings.json**
```json
"ApiKeys": {
  "OpenAI": "YOUR_OPENAI_API_KEY",
  "YouTube": "YOUR_YOUTUBE_API_KEY",
  "GoogleMaps": "YOUR_GOOGLE_MAPS_API_KEY"
}
```

**Environment variables (recommended for production)**
```
ApiKeys__OpenAI=YOUR_OPENAI_API_KEY
ApiKeys__YouTube=YOUR_YOUTUBE_API_KEY
ApiKeys__GoogleMaps=YOUR_GOOGLE_MAPS_API_KEY
```

### Run the App
```
dotnet restore
dotnet run
```

Open the app at `https://localhost:5001` or `http://localhost:5000` (the exact port will appear in the console).

## Usage
1. Open the landing page.
2. Navigate to the report upload flow.
3. Upload one or more lab report images.
4. Fill in any optional health details.
5. Select report types and submit.
6. Review the generated report.

## Security & Data Handling Notes
- **Never commit API keys** to source control. Use environment variables or a secret manager.
- Uploaded files are processed in-memory for Base64 conversion; consider adding size limits and validation for production.
- The AI-generated output is rendered as HTML snippets; keep prompt and output handling strict to reduce risk.

## Troubleshooting
- **No results**: verify that your API keys are set correctly.
- **YouTube videos missing**: ensure the YouTube Data API is enabled for your key.

## License
See [LICENSE](LICENSE).
