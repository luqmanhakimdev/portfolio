import { error } from '@sveltejs/kit';
import { fetchDevToArticle } from '$lib/server/devto';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	setHeaders({
		'cache-control': 'public, max-age=0, s-maxage=60, must-revalidate'
	});

	try {
		const article = await fetchDevToArticle(params.slug);

		if (!article) {
			error(404, 'Post not found');
		}

		return { article };
	} catch (err) {
		if (err && typeof err === 'object' && 'status' in err) throw err;
		console.error('[articles] failed to load DEV.to article', err);
		error(502, 'Could not load this post from DEV.to');
	}
};
