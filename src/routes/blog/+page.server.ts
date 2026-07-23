import { fetchDevToArticles } from '$lib/server/devto';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const articles = await fetchDevToArticles();
		return { articles, error: null as string | null };
	} catch (error) {
		console.error('[blog] failed to load DEV.to articles', error);
		return {
			articles: [],
			error: 'Could not load posts from DEV.to right now. Please try again later.'
		};
	}
};
