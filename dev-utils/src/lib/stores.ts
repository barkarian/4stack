import { writable, type Writable } from 'svelte/store';

// Initialize the store with a default value
export const auth0CallbackUrlToSet: Writable<string | undefined> = writable(undefined);
export const auth0SettingsUrl: Writable<string | undefined> = writable(undefined);