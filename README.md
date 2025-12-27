# Health_System (BioCheck AI)

BioCheck AI is an ASP.NET Core MVC web app that analyzes lab report images with AI and produces a multi-section health report. Users can optionally include lifestyle inputs (age, weight, habits, etc.) and receive targeted guidance across categories like nutrition, fitness, metabolic health, and more.

## Features

- **Lab report analysis** using OpenAI’s chat/completions API (image-aware prompts).
- **Multi-tab report** that groups insights by category (nutrition, fitness, risks, etc.).
- **Optional YouTube recommendations** when the “videoHelp” analysis option is selected.
- **Safety guardrails**: basic file validation, file size limits, and HTML sanitization before rendering AI output.

## Tech Stack

- **ASP.NET Core MVC** (.NET 8)
- **Razor Views** for server-rendered UI
- **Bootstrap 4** for styling
- **OpenAI API** for analysis generation
- **YouTube Data API** for optional video suggestions

## Getting Started

### Prerequisites

- [.NET SDK 8.0](https://dotnet.microsoft.com/en-us/download)

### Installation

```bash
dotnet restore
```

### Configure API Keys

Set API keys in `appsettings.json` or using environment variables (recommended for production):

```json
{
  "OpenAi": {
    "ApiKey": "YOUR_OPENAI_API_KEY"
  },
  "YouTube": {
    "ApiKey": "YOUR_YOUTUBE_API_KEY"
  }
}
```

Environment variable equivalents:

- `OpenAi__ApiKey`
- `YouTube__ApiKey`

### Run the App

```bash
dotnet run
```

The app will start on the configured port (see `Properties/launchSettings.json`).

## Usage

1. Open the app in your browser.
2. Upload one or more lab report images.
3. Fill optional health details.
4. Select analysis categories.
5. Submit to view the generated report.

## Safety & Validation Notes

- **File validation:** uploads are limited to JPEG/PNG/WebP images and 5 MB per file.
- **HTML sanitization:** AI-generated HTML is sanitized before it is rendered.
- **API keys:** keys are never hardcoded; they are read from configuration.

If you want to expand allowed file types or change size limits, adjust these values in `Controllers/HomeController.cs`.

## Project Structure

- `Controllers/` — MVC controllers (main logic lives in `HomeController.cs`)
- `Models/` — view models
- `Views/` — Razor views for pages and report
- `wwwroot/` — static assets (CSS, JS, images)

## Development Notes

- The OpenAI request is built in `HomeController.CallOpenAiApiAsync`.
- Report rendering is driven by the dictionary model in `Views/Home/Report.cshtml`.

## License

See [LICENSE](LICENSE).
