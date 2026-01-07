# Little Manman's Portfolio

A personal portfolio website showcasing my app projects with live web previews.

🔗 **Live Site**: [littlemanman.com](https://littlemanman.com)

## Projects Featured

| Project | Description | Link |
|---------|-------------|------|
| **AI Generate Resume** | Next.js resume generator: paste JSON or text, preview and export PDF | [i-resume.net](https://www.i-resume.net/) |
| **Daily RSS** | Daily RSS reading page powered by n8n and Supabase | [rsspage.vercel.app](https://rsspage.vercel.app/) |
| **Pumpbanana** | Photo prompts collection platform | [pumpbanana.com](https://www.pumpbanana.com) |

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui + Radix UI
- **Dark Mode**: next-themes

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Project Structure

```
├── content/projects.json   # Project data (edit to add/update projects)
├── src/
│   ├── app/                # Next.js pages
│   ├── components/         # React components
│   └── data/               # Data loaders
```

## Adding a New Project

Edit `content/projects.json`:

```json
{
  "title": "Your Project",
  "intro": "Short description",
  "web": "https://your-project.com",
  "image": "https://path/to/screenshot.png",
  "tags": ["React", "TypeScript"],
  "github": "https://github.com/you/project"
}
```
