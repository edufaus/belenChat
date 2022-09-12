import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['devalue']
	}
};

export default config;
