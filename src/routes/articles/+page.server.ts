import { fetchDevToArticles } from '$lib/server/devto';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
	setHeaders({
		'cache-control': 'public, max-age=0, s-maxage=60, must-revalidate'
	});

	try {
		const articles = await fetchDevToArticles();
		return { articles, error: null as string | null };
	} catch (error) {
		console.error('[articles] failed to load DEV.to articles', error);
		return {
			articles: [],
			error: 'Could not load posts from DEV.to right now. Please try again later.'
		};
	}
};
