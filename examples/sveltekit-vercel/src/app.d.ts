import type { CsrfLocals } from '@yocodingjosh-edge-csrf/sveltekit';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals extends CsrfLocals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
