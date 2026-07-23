import { error } from '@sveltejs/kit';
import { fetchDevToArticle } from '$lib/server/devto';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	try {
		const article = await fetchDevToArticle(params.slug, fetch);

		if (!article) {
			error(404, 'Post not found');
		}

		return { article };
	} catch (err) {
		if (err && typeof err === 'object' && 'status' in err) throw err;
		console.error(err);
		error(502, 'Could not load this post from DEV.to');
	}
};
