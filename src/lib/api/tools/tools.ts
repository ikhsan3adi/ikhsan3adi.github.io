export interface Tool {
  name: string;
  icon: string;
}

export interface ToolCategory {
  category: string;
  class: string;
  tools: Tool[];
}

export const toolCategories: ToolCategory[] = [
  {
    category: 'Front-end web',
    class: 'bg-sky-300 dark:bg-sky-400',
    tools: [
      { name: 'Svelte', icon: 'simple-icons:svelte' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
      { name: 'Bootstrap', icon: 'simple-icons:bootstrap' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' }
    ]
  },
  {
    category: 'Back-end',
    class: 'bg-red-200 dark:bg-red-400',
    tools: [
      { name: 'PHP', icon: 'simple-icons:php' },
      { name: 'CodeIgniter', icon: 'simple-icons:codeigniter' },
      { name: 'Laravel', icon: 'simple-icons:laravel' },
      { name: 'NestJS', icon: 'simple-icons:nestjs' },
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
      { name: 'MySQL', icon: 'simple-icons:mysql' }
    ]
  },
  {
    category: 'Mobile apps',
    class: 'bg-purple-300 dark:bg-purple-400',
    tools: [
      { name: 'Dart', icon: 'simple-icons:dart' },
      { name: 'Flutter', icon: 'simple-icons:flutter' },
      { name: 'Android Studio', icon: 'simple-icons:androidstudio' }
    ]
  },
  {
    category: 'DevOps',
    class: 'bg-slate-300 dark:bg-slate-400',
    tools: [
      { name: 'Git', icon: 'simple-icons:git' },
      { name: 'GitHub', icon: 'simple-icons:github' },
      { name: 'GitHub Actions', icon: 'simple-icons:githubactions' }
    ]
  },
  {
    category: 'Design',
    class: 'bg-pink-300 dark:bg-pink-400',
    tools: [
      { name: 'Adobe Illustrator', icon: 'simple-icons:adobeillustrator' },
      { name: 'Adobe Photoshop', icon: 'simple-icons:adobephotoshop' }
    ]
  },
  {
    category: 'Others',
    class: 'bg-gray-300 dark:bg-gray-400',
    tools: [
      { name: 'VS Code', icon: 'simple-icons:visualstudiocode' },
      { name: 'Sublime Text', icon: 'simple-icons:sublimetext' },
      { name: 'Postman', icon: 'simple-icons:postman' },
      { name: 'Ubuntu', icon: 'simple-icons:ubuntu' }
    ]
  }
];
