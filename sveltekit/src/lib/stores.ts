import { writable, type Writable } from 'svelte/store';
import type { StrapiEntity } from './types/strapi/StrapiTypes';

// Initialize the store with a default value
export const userInfo: Writable<UserStoreData | undefined> = writable(undefined);

export type UserStoreData = StrapiEntity<"plugin::users-permissions.user">