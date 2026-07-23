import { DEVTO_API_BASE, DEVTO_USERNAME } from '$lib/data/devto';

export type DevToArticleSummary = {
	id: number;
	title: string;
	description: string;
	slug: string;
	url: string;
	path: string;
	readable_publish_date: string;
	published_at: string;
	reading_time_minutes: number;
	tag_list: string[];
	cover_image: string | null;
	social_image: string;
};

export type DevToArticle = Omit<DevToArticleSummary, 'tag_list'> & {
	body_html: string;
	body_markdown: string;
	tags: string | string[];
	tag_list: string[] | string;
};

const DEVTO_HEADERS: HeadersInit = {
	Accept: 'application/vnd.forem.api-v1+json',
	'User-Agent': 'luqmanhakim.dev/1.0 (+https://luqmanhakim.dev; portfolio blog)'
};

function normalizeTags(tagList: string[] | string | undefined, tags?: string[] | string): string[] {
	if (Array.isArray(tagList) && tagList.length > 0) {
		return tagList.map(String);
	}

	if (typeof tagList === 'string' && tagList.trim()) {
		return tagList.split(',').map((tag) => tag.trim()).filter(Boolean);
	}

	if (Array.isArray(tags) && tags.length > 0) {
		return tags.map(String);
	}

	if (typeof tags === 'string' && tags.trim()) {
		return tags.split(',').map((tag) => tag.trim()).filter(Boolean);
	}

	return [];
}

async function devtoFetch(url: string): Promise<Response> {
	// Use the platform fetch (not SvelteKit's) for third-party APIs on Workers.
	return fetch(url, {
		headers: DEVTO_HEADERS,
		// Cloudflare Workers cache hint (ignored outside Workers)
		cf: {
			cacheTtl: 300,
			cacheEverything: true
		}
	} as RequestInit);
}

export async function fetchDevToArticles(): Promise<DevToArticleSummary[]> {
	const response = await devtoFetch(
		`${DEVTO_API_BASE}/articles?username=${encodeURIComponent(DEVTO_USERNAME)}&per_page=30`
	);

	if (!response.ok) {
		const body = await response.text().catch(() => '');
		throw new Error(`DEV.to list failed (${response.status}): ${body.slice(0, 200)}`);
	}

	const articles = (await response.json()) as DevToArticleSummary[];
	return articles.map((article) => ({
		...article,
		tag_list: normalizeTags(article.tag_list)
	}));
}

export async function fetchDevToArticle(
	slug: string
): Promise<(DevToArticleSummary & { body_html: string; url: string }) | null> {
	const response = await devtoFetch(
		`${DEVTO_API_BASE}/articles/${encodeURIComponent(DEVTO_USERNAME)}/${encodeURIComponent(slug)}`
	);

	if (response.status === 404) {
		return null;
	}

	if (!response.ok) {
		const body = await response.text().catch(() => '');
		throw new Error(`DEV.to article failed (${response.status}): ${body.slice(0, 200)}`);
	}

	const article = (await response.json()) as DevToArticle;

	return {
		id: article.id,
		title: article.title,
		description: article.description,
		slug: article.slug,
		url: article.url,
		path: article.path,
		readable_publish_date: article.readable_publish_date,
		published_at: article.published_at,
		reading_time_minutes: article.reading_time_minutes,
		cover_image: article.cover_image,
		social_image: article.social_image,
		body_html: article.body_html,
		tag_list: normalizeTags(article.tag_list, article.tags)
	};
}
