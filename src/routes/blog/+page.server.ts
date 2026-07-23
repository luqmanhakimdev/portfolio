import { fetchDevToArticles } from '$lib/server/devto';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		const articles = await fetchDevToArticles(fetch);
		return { articles, error: null };
	} catch (error) {
		console.error(error);
		return {
			articles: [],
			error: 'Could not load posts from DEV.to right now.'
		};
	}
};
