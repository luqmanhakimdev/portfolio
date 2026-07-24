<script lang="ts">
	import PageHeader from '$lib/components/ui/PageHeader.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<article class="articles">
	<PageHeader title="Articles" />

	{#if data.error}
		<p class="status" role="alert">{data.error}</p>
	{:else if data.articles.length === 0}
		<p class="status">No published articles yet.</p>
	{:else}
		<ul class="post-list">
			{#each data.articles as post (post.id)}
				<li class="post-item">
					<a href={`/articles/${post.slug}`}>
						{#if post.tag_list[0]}
							<span class="tag">{post.tag_list[0]}</span>
						{/if}
						<h3 class="title">{post.title}</h3>
						{#if post.description}
							<p class="excerpt">{post.description}</p>
						{/if}
						<time datetime={post.published_at}>{post.readable_publish_date}</time>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</article>

<style>
	.status {
		color: var(--text-light-gray);
		font-size: var(--fs-6);
	}

	.post-list {
		display: grid;
		gap: 8px;
	}

	.post-item a {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 18px 0;
		border-bottom: 1px solid var(--bg-border);
	}

	.post-item:last-child a {
		border-bottom: none;
	}

	.tag {
		color: var(--accent);
		font-size: var(--fs-8);
		font-weight: var(--fw-500);
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.title {
		color: var(--text-white);
		font-size: var(--fs-4);
		font-weight: var(--fw-600);
		line-height: 1.35;
		transition: color var(--transition-1);
	}

	.post-item a:hover .title {
		color: var(--accent);
	}

	.excerpt {
		color: var(--text-light-gray);
		font-size: var(--fs-6);
		font-weight: var(--fw-300);
		line-height: 1.55;
		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	time {
		color: var(--text-light-gray-70);
		font-size: var(--fs-7);
	}

	@media (min-width: 640px) {
		.title {
			font-size: var(--fs-2);
		}
	}
</style>
