import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { phosphorSvelteOptimize } from 'phosphor-svelte/preprocessor';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [phosphorSvelteOptimize(), vitePreprocess()],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    alias: {
      '#lib': 'src/lib',
      '#assets': 'src/assets',
      '#components': 'src/components',
      '#shadcn': 'src/_shadcn',
      'shadcn-ui': 'src/_shadcn/ui',
    },
    csrf: {
      checkOrigin: process.env.ENV !== 'development',
    },
  },
};

export default config;
