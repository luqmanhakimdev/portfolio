<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const article = $derived(data.article);
</script>

<article class="post">
	<a class="back" href="/articles">← Articles</a>

	<header class="header">
		<div class="meta">
			{#each article.tag_list as tag}
				<span class="tag">{tag}</span>
			{/each}
			<span class="dot" aria-hidden="true"></span>
			<time datetime={article.published_at}>{article.readable_publish_date}</time>
			<span class="dot" aria-hidden="true"></span>
			<span>{article.reading_time_minutes} min read</span>
		</div>
		<h1 class="title">{article.title}</h1>
		{#if article.description}
			<p class="description">{article.description}</p>
		{/if}
	</header>

	{#if article.cover_image}
		<img class="cover" src={article.cover_image} alt="" />
	{/if}

	<div class="body">
		{@html article.body_html}
	</div>

	<p class="source">
		Originally published on
		<a href={article.url} target="_blank" rel="noopener noreferrer">DEV.to</a>
	</p>
</article>

<style>
	.back {
		display: inline-block;
		margin-bottom: 24px;
		color: var(--text-light-gray);
		font-size: var(--fs-6);
		transition: color var(--transition-1);
	}

	.back:hover {
		color: var(--accent);
	}

	.header {
		margin-bottom: 24px;
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
		color: var(--text-light-gray-70);
		font-size: var(--fs-7);
	}

	.tag {
		color: var(--accent);
	}

	.dot {
		width: 3px;
		height: 3px;
		border-radius: 50%;
		background: var(--text-light-gray-70);
	}

	.title {
		color: var(--text-white);
		font-size: 28px;
		font-weight: var(--fw-600);
		line-height: 1.25;
		margin-bottom: 12px;
	}

	.description {
		color: var(--text-light-gray);
		font-size: var(--fs-5);
		line-height: 1.6;
	}

	.cover {
		width: 100%;
		aspect-ratio: 16 / 7;
		object-fit: cover;
		border-radius: 8px;
		margin-bottom: 28px;
	}

	.body {
		color: var(--text-light-gray);
		font-size: var(--fs-5);
		line-height: 1.75;
		font-weight: var(--fw-300);
	}

	.body :global(h2),
	.body :global(h3),
	.body :global(h4) {
		color: var(--text-white);
		font-weight: var(--fw-600);
		margin: 1.6em 0 0.6em;
		line-height: 1.3;
	}

	.body :global(p),
	.body :global(ul),
	.body :global(ol) {
		margin-bottom: 1.1em;
	}

	.body :global(ul),
	.body :global(ol) {
		padding-left: 1.25em;
	}

	.body :global(li) {
		margin-bottom: 0.4em;
	}

	.body :global(a) {
		color: var(--accent);
	}

	.body :global(a:hover) {
		text-decoration: underline;
	}

	.body :global(pre),
	.body :global(code) {
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.92em;
	}

	.body :global(pre) {
		overflow-x: auto;
		padding: 14px 16px;
		margin: 1.2em 0;
		border-radius: 8px;
		background: var(--bg-elevated);
		border: 1px solid var(--bg-border);
	}

	.body :global(:not(pre) > code) {
		padding: 0.15em 0.4em;
		border-radius: 4px;
		background: var(--bg-elevated);
	}

	.body :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
		margin: 1.2em 0;
	}

	.body :global(blockquote) {
		margin: 1.2em 0;
		padding-left: 1em;
		border-left: 3px solid var(--accent);
		color: var(--text-light-gray-70);
	}

	.source {
		margin-top: 40px;
		padding-top: 20px;
		border-top: 1px solid var(--bg-border);
		color: var(--text-light-gray-70);
		font-size: var(--fs-7);
	}

	.source a {
		color: var(--accent);
	}

	@media (min-width: 768px) {
		.title {
			font-size: 36px;
		}
	}
</style>
