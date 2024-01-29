// See https://kit.svelte.dev/docs/types#app

import type { StrapiEntity } from "$lib/types/strapi/StrapiTypes";

// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			authenticatedUserInfo: StrapiEntity<"plugin::users-permissions.user"> | undefined
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };
