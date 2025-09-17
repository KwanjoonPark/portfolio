import type { FileSystem } from '../types/terminal.types'

export const fileSystem: FileSystem = {
  '/home/kwanjoon-park': {
    type: 'directory',
    contents: ['about.json', 'projects/', 'skills.py', 'contact.txt', 'README.md']
  },
  '/home/kwanjoon-park/about.json': {
    type: 'file',
    content: `{
  "name": "Kwanjoon Park (박관준)",
  "role": "Full Stack Developer",
  "location": "South Korea",
  "experience": "1+ years",
  "education": "Chonnam National University Software Engineering",
  "languages": ["Korean", "English"],
  "interests": ["Web Development", "AI/ML", "Open Source"],
  "motto": "Code with passion, learn continuously"
}`
  },
  '/home/kwanjoon-park/projects': {
    type: 'directory',
    contents: [
      'StudyWith/', '해병대_위험성평가체계/', '비행안전진단체계/',
      'DAWN/', 'MirrorScope/', 'BreadVenture/', 'LocQuest/', '소난투/', 'Mentree/'
    ]
  },
  '/home/kwanjoon-park/projects/StudyWith': {
    type: 'directory',
    contents: ['README.md', 'demo.txt', 'tech-stack.json']
  },
  '/home/kwanjoon-park/projects/해병대_위험성평가체계': {
    type: 'directory',
    contents: ['README.md', 'demo.txt', 'tech-stack.json']
  },
  '/home/kwanjoon-park/projects/비행안전진단체계': {
    type: 'directory',
    contents: ['README.md', 'demo.txt', 'tech-stack.json']
  },
  '/home/kwanjoon-park/projects/DAWN': {
    type: 'directory',
    contents: ['README.md', 'demo.txt', 'tech-stack.json']
  },
  '/home/kwanjoon-park/projects/MirrorScope': {
    type: 'directory',
    contents: ['README.md', 'demo.txt', 'tech-stack.json']
  },
  '/home/kwanjoon-park/projects/LocQuest': {
    type: 'directory',
    contents: ['README.md', 'demo.txt', 'tech-stack.json']
  },
  '/home/kwanjoon-park/projects/소난투': {
    type: 'directory',
    contents: ['README.md', 'demo.txt', 'tech-stack.json']
  },
  '/home/kwanjoon-park/projects/Mentree': {
    type: 'directory',
    contents: ['README.md', 'demo.txt', 'tech-stack.json']
  },
  '/home/kwanjoon-park/skills.py': {
    type: 'file',
    content: `#!/usr/bin/env python3
# Skills Assessment

def get_technical_skills():
    return {
        "Frontend": {
            "React": 90,
            "TypeScript": 85,
            "Next.js": 80,
            "Vue.js": 75,
            "CSS/SCSS": 85
        },
        "Backend": {
            "Node.js": 85,
            "Python": 80,
            "Java": 75,
            "Express": 85,
            "FastAPI": 70
        },
        "Database": {
            "MySQL": 80,
            "MongoDB": 75,
            "PostgreSQL": 70,
            "Redis": 65
        },
        "DevOps": {
            "Docker": 75,
            "AWS": 70,
            "Git": 90,
            "Linux": 80
        }
    }

if __name__ == "__main__":
    skills = get_technical_skills()
    print("=== Technical Skills Assessment ===")
    for category, techs in skills.items():
        print(f"\\n{category}:")
        for tech, level in techs.items():
            print(f"  {tech}: {'█' * (level//10)}{'░' * (10-level//10)} {level}%")`
  },
  '/home/kwanjoon-park/contact.txt': {
    type: 'file',
    content: `Contact Information
==================

Name: Kwanjoon Park (박관준)
Role: Full Stack Developer

📧 Email: parkkwanjoon@naver.com
🐙 GitHub: https://github.com/KwanjoonPark
💼 LinkedIn: https://linkedin.com/in/yourprofile
🌍 Location: Gwang-ju, South Korea

Preferred Contact: Email
Response Time: Within 24 hours
Available for: Full-time positions, Freelance projects, Collaboration

Feel free to reach out for any opportunities or just to say hello! 👋`
  },
  '/home/kwanjoon-park/README.md': {
    type: 'file',
    content: `# Welcome to Kwanjoon Park's Portfolio! 👋

Hi there! I'm Kwanjoon, a passionate Full Stack Developer from South Korea.

## Quick Navigation
- \`cat about.json\` - Learn more about me
- \`ls projects/\` - Check out my projects
- \`python3 skills.py\` - View my technical skills
- \`cat contact.txt\` - Get in touch

## Available Commands
- \`ls\` - List directory contents
- \`cd <directory>\` - Change directory
- \`cat <file>\` - Display file contents
- \`pwd\` - Show current directory
- \`clear\` - Clear terminal
- \`whoami\` - Display current user
- \`help\` - Show available commands

Happy exploring! 🚀`
  }
}