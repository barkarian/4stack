#!/bin/bash
npm --prefix ./strapi run start &
npm --prefix ./sveltekit run dev &
wait