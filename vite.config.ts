import svg from '@poppanator/sveltekit-svg';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    svg({
      includePaths: ['./src/lib/graphics/'],
      svgoOptions: {
        multipass: true,
        plugins: ['preset-default']
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('highlight.js') || id.includes('marked')) {
              return 'markdown';
            }

            if (id.includes('@iconify/svelte')) {
              return 'iconify';
            }

            if (id.includes('svelte-fa') || id.includes('@fortawesome/free-solid-svg-icons')) {
              return 'fa-icons';
            }

            if (id.includes('saos')) {
              return 'animations';
            }

            if (id.includes('@octokit/rest')) {
              return 'octokit';
            }

            return 'vendor';
          }
        }
      }
    }
  },
  ssr: {
    noExternal: ['@iconify/svelte']
  }
});
