# Health System (BioCheck AI)

BioCheck AI is an ASP.NET Core MVC web application that lets users upload lab report images, enter optional health details, and receive AI-assisted insights such as nutrition guidance, fitness suggestions, and risk summaries. It can also enrich results with related YouTube videos when enabled.

## Highlights

- **Image-based lab analysis** using OpenAI chat/completions with optional images.
- **Personalized health insights** based on user-entered context (age, activity level, symptoms, etc.).
- **Multiple analysis modes** (nutrition, fitness, cardiovascular risk, metabolic health, sleep, and more).
- **Optional video recommendations** via the YouTube Data API.
- **Dark mode** UI toggle and a polished landing experience.

## Tech Stack

- **.NET 8 / ASP.NET Core MVC**
- **Razor Views** for UI
- **Bootstrap 4** for layout and styling
- **OpenAI API** for analysis
- **YouTube Data API v3** for video recommendations (optional)

## Getting Started

### Prerequisites

- [.NET SDK 8](https://dotnet.microsoft.com/download)
- OpenAI API key (required for analysis)
- YouTube API key (optional; used only for video recommendations)

### Configuration

The application reads keys from configuration or environment variables:

| Purpose | Configuration Key | Environment Variable |
| --- | --- | --- |
| OpenAI API Key | `OpenAI:ApiKey` | `OPENAI_API_KEY` |
| YouTube API Key | `YouTube:ApiKey` | `YOUTUBE_API_KEY` |

**Recommended (local dev):** use environment variables.

**macOS/Linux (bash/zsh):**
```bash
export OPENAI_API_KEY="your-openai-key"
export YOUTUBE_API_KEY="your-youtube-key" # optional
```

**Windows (PowerShell):**
```powershell
$env:OPENAI_API_KEY = "your-openai-key"
$env:YOUTUBE_API_KEY = "your-youtube-key" # optional
```

> The OpenAI API call uses the `gpt-4o-mini` model and includes uploaded images. Ensure your account and model support vision inputs if you plan to send images.

### Run Locally

```bash
dotnet restore
dotnet run
```

The app will start on the URLs defined in `Properties/launchSettings.json` (typically `https://localhost:7194` or `http://localhost:5018`).

## How It Works

1. Users upload one or more lab report images.
2. Optional health context (age, weight, symptoms, etc.) is collected.
3. Users select one or more analysis options.
4. The server builds tailored prompts and calls OpenAI.
5. Results are displayed as styled HTML snippets in the report view.
6. If “Video Help” is selected and a YouTube API key is configured, related videos are embedded.

## Project Structure

```
Controllers/
  HomeController.cs        # Main entry point for analysis and API calls
Models/
  ErrorViewModel.cs
Views/
  Home/                    # Landing, upload form, report, and informational pages
  Shared/                  # Layout and validation scripts
wwwroot/
  css/ js/                 # Static assets and UI behavior
```

## Safety & Privacy Notes

- Uploaded lab report images and form data are **sent to the OpenAI API** for analysis. Do not upload sensitive or regulated data unless you have the appropriate approvals and agreements in place.
- Store API keys outside of source control (environment variables or user secrets). The project does not ship with any hard-coded keys.
- AI output is informational and should not replace professional medical advice.

## Troubleshooting

- **Blank analysis results**: Verify your OpenAI API key and network access.
- **No videos appear**: Ensure `YOUTUBE_API_KEY` is set and that the YouTube Data API is enabled for your project.

## License

MIT — see [LICENSE](LICENSE).
