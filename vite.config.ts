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

            if (id.includes('@octokit/openapi-types') || id.includes('@octokit/types')) {
              return 'octokit-types';
            }

            if (id.includes('@octokit/plugin-paginate-rest')) {
              return 'octokit-paginate';
            }

            if (id.includes('@octokit/plugin-rest-endpoint-methods')) {
              return 'octokit-endpoint-methods';
            }

            if (id.includes('@octokit/rest')) {
              return 'octokit-rest';
            }

            if (id.includes('@octokit/')) {
              return 'octokit';
            }

            if (id.includes('svelte-typewriter')) {
              return 'typewriter';
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
