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
      { name: 'HTML', icon: 'simple-icons:html5' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'Svelte', icon: 'simple-icons:svelte' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' }
    ]
  },
  {
    category: 'Back-end',
    tools: [
      // js
      { name: 'Bun', icon: 'simple-icons:bun' },
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      // php
      { name: 'PHP', icon: 'simple-icons:php' },
      // py
      { name: 'Python', icon: 'simple-icons:python' },
      // db
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
      { name: 'MySQL', icon: 'simple-icons:mysql' },
      { name: 'MongoDB', icon: 'simple-icons:mongodb' },
      { name: 'Redis', icon: 'simple-icons:redis' },
      // other
      { name: 'Go', icon: 'simple-icons:go' },
      { name: 'Rust', icon: 'simple-icons:rust' }
    ]
  },
  {
    category: 'Mobile apps',
    tools: [
      { name: 'Flutter', icon: 'simple-icons:flutter' },
      { name: 'Android', icon: 'simple-icons:android' }
    ]
  },
  {
    category: 'DevOps',
    tools: [
      { name: 'Git', icon: 'simple-icons:git' },
      { name: 'GitHub Actions', icon: 'simple-icons:githubactions' },
      { name: 'GitLab', icon: 'simple-icons:gitlab' },
      { name: 'Cloudflare', icon: 'simple-icons:cloudflare' },
      { name: 'Docker', icon: 'simple-icons:docker' },
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
      { name: 'PlantUML', icon: 'simple-icons:uml' },
      { name: 'Swagger', icon: 'simple-icons:swagger' }
    ]
  },
  {
    category: 'AI Tools',
    tools: [
      { name: 'Opencode', icon: 'simple-icons:opencode' },
      { name: 'Antigravity', icon: 'simple-icons:googlegemini' },
      { name: '9Router', icon: 'lucide:graph-star' },
      { name: 'MCP', icon: 'simple-icons:modelcontextprotocol' },
      { name: 'n8n', icon: 'simple-icons:n8n' }
    ]
  },
  {
    category: 'Content Creation',
    tools: [
      { name: 'Kdenlive', icon: 'simple-icons:kdenlive' },
      { name: 'Photoshop', icon: 'simple-icons:adobephotoshop' },
      { name: 'Illustrator', icon: 'simple-icons:adobeillustrator' },
      { name: 'Figma', icon: 'simple-icons:figma' },
      { name: 'Photopea', icon: 'simple-icons:photopea' }
    ]
  },
  {
    category: 'Others',
    tools: [
      { name: 'Arch Linux', icon: 'simple-icons:archlinux' },
      { name: 'Bruno', icon: 'simple-icons:bruno' },
      { name: 'Thorium', icon: 'simple-icons:googlechrome' },
      { name: 'Zen Browser', icon: 'simple-icons:zenbrowser' },
      { name: 'VSCodium', icon: 'simple-icons:vscodium' },
      { name: 'Zed', icon: 'simple-icons:zedindustries' },
      { name: 'Fish', icon: 'simple-icons:fishshell' },
      { name: 'Herdr', icon: 'simple-icons:fishshell' }
    ]
  }
];
