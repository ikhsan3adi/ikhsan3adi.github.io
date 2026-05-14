export interface Tool {
  name: string;
  icon: string;
}

export interface ToolCategory {
  category: string;
  tools: Tool[];
}

export const toolCategories: ToolCategory[] = [
  {
    category: 'Front-end web',
    tools: [
      { name: 'Svelte', icon: 'simple-icons:svelte' },
      { name: 'Vue', icon: 'simple-icons:vuedotjs' },
      { name: 'shadcn/ui', icon: 'simple-icons:shadcnui' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
      { name: 'Bootstrap', icon: 'simple-icons:bootstrap' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' }
    ]
  },
  {
    category: 'Back-end',
    tools: [
      { name: 'Python', icon: 'simple-icons:python' },
      { name: 'PHP', icon: 'simple-icons:php' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'Bun', icon: 'simple-icons:bun' },
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: 'CodeIgniter', icon: 'simple-icons:codeigniter' },
      { name: 'Laravel', icon: 'simple-icons:laravel' },
      { name: 'NestJS', icon: 'simple-icons:nestjs' },
      { name: 'FastAPI', icon: 'simple-icons:fastapi' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
      { name: 'MySQL', icon: 'simple-icons:mysql' },
      { name: 'MariaDB', icon: 'simple-icons:mariadb' },
      { name: 'MongoDB', icon: 'simple-icons:mongodb' },
      { name: 'Redis', icon: 'simple-icons:redis' },
      { name: 'OpenCV', icon: 'simple-icons:opencv' }
    ]
  },
  {
    category: 'Mobile apps',
    tools: [
      { name: 'Dart', icon: 'simple-icons:dart' },
      { name: 'Flutter', icon: 'simple-icons:flutter' },
      { name: 'Android Studio', icon: 'simple-icons:androidstudio' }
    ]
  },
  {
    category: 'DevOps',
    tools: [
      { name: 'Git', icon: 'simple-icons:git' },
      { name: 'GitHub', icon: 'simple-icons:github' },
      { name: 'GitHub Actions', icon: 'simple-icons:githubactions' },
      { name: 'GitLab', icon: 'simple-icons:gitlab' },
      { name: 'Docker', icon: 'simple-icons:docker' },
      { name: 'Shell', icon: 'simple-icons:gnubash' },
      { name: 'Nginx', icon: 'simple-icons:nginx' }
    ]
  },
  {
    category: 'Docs & Diagram',
    tools: [
      { name: 'Markdown', icon: 'simple-icons:markdown' },
      { name: 'mkdocs', icon: 'simple-icons:materialformkdocs' },
      { name: 'draw.io', icon: 'simple-icons:diagramsdotnet' },
      { name: 'LaTeX', icon: 'simple-icons:latex' },
      { name: 'Mermaid', icon: 'simple-icons:mermaid' },
      { name: 'PlantUML', icon: 'simple-icons:uml' }
    ]
  },
  {
    category: 'Others',
    tools: [
      { name: 'Arch Linux', icon: 'simple-icons:archlinux' },
      { name: 'Bruno', icon: 'simple-icons:bruno' },
      { name: 'Zed', icon: 'simple-icons:zedindustries' },
      { name: 'Antigravity', icon: 'simple-icons:googlegemini' },
      { name: 'OpenCode', icon: 'lucide:code-2' },
      { name: 'Windsurf', icon: 'simple-icons:windsurf' },
      { name: 'Cursor', icon: 'simple-icons:cursor' }
    ]
  },
  {
    category: 'CP',
    tools: [
      { name: 'C++', icon: 'simple-icons:cplusplus' },
      { name: 'Python', icon: 'simple-icons:python' }
    ]
  },
  {
    category: 'Design & Editing',
    tools: [
      { name: 'Kdenlive', icon: 'simple-icons:kdenlive' },
      { name: 'Adobe Photoshop', icon: 'simple-icons:adobephotoshop' },
      { name: 'Adobe Illustrator', icon: 'simple-icons:adobeillustrator' },
      { name: 'Figma', icon: 'simple-icons:figma' },
      { name: 'Photopea', icon: 'simple-icons:photopea' }
    ]
  }
];
