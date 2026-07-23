<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import type { TimelineItem } from '$lib/types';

	type Props = {
		title: string;
		icon: 'book' | 'briefcase';
		items: TimelineItem[];
	};

	let { title, icon, items }: Props = $props();
</script>

<section class="timeline">
	<div class="title-wrapper">
		<div class="icon-box">
			<Icon name={icon} size={20} />
		</div>
		<h3 class="section-title">{title}</h3>
	</div>

	<ol class="timeline-list">
		{#each items as item (item.id)}
			<li class="timeline-item">
				<h4 class="timeline-item-title">{item.title}</h4>
				{#if item.company}
					<p class="company">{item.company}</p>
				{/if}
				<span class="period">{item.period}</span>
				{#if item.highlights?.length}
					<ul class="highlights">
						{#each item.highlights as point}
							<li>{point}</li>
						{/each}
					</ul>
				{:else if item.description}
					<p class="timeline-text">{item.description}</p>
				{/if}
			</li>
		{/each}
	</ol>
</section>

<style>
	.timeline {
		margin-bottom: 30px;
	}

	.title-wrapper {
		display: flex;
		align-items: center;
		gap: 15px;
		margin-bottom: 25px;
	}

	.icon-box {
		display: grid;
		place-items: center;
		color: var(--accent);
		flex-shrink: 0;
	}

	.section-title {
		color: var(--text-white);
		font-size: var(--fs-2);
		font-weight: var(--fw-600);
		text-transform: capitalize;
	}

	.timeline-list {
		margin-left: 45px;
		font-size: var(--fs-6);
	}

	.timeline-item {
		position: relative;
		margin-bottom: 28px;
	}

	.timeline-item:not(:last-child)::before {
		content: '';
		position: absolute;
		top: -25px;
		left: -32px;
		width: 1px;
		height: calc(100% + 50px);
		background: var(--bg-border);
	}

	.timeline-item::after {
		content: '';
		position: absolute;
		top: 5px;
		left: -36px;
		height: 8px;
		width: 8px;
		background: var(--accent);
		border-radius: 50%;
		box-shadow: 0 0 0 4px var(--accent-soft);
	}

	.timeline-item-title {
		font-size: var(--fs-5);
		font-weight: var(--fw-500);
		line-height: 1.3;
		margin-bottom: 4px;
		color: var(--text-white);
	}

	.company {
		color: var(--accent);
		font-size: var(--fs-6);
		font-weight: var(--fw-400);
		margin-bottom: 4px;
	}

	.period {
		color: var(--text-light-gray-70);
		font-weight: var(--fw-400);
		line-height: 1.6;
	}

	.timeline-text {
		color: var(--text-light-gray);
		font-weight: var(--fw-300);
		line-height: 1.6;
		margin-top: 8px;
	}

	.highlights {
		margin-top: 12px;
		display: grid;
		gap: 8px;
		padding-left: 1.1em;
		list-style: disc;
	}

	.highlights li {
		color: var(--text-light-gray);
		font-weight: var(--fw-300);
		line-height: 1.55;
		padding-left: 2px;
	}

	@media (min-width: 580px) {
		.timeline-list {
			margin-left: 65px;
		}

		.timeline-item:not(:last-child)::before {
			left: -42px;
		}

		.timeline-item::after {
			height: 8px;
			width: 8px;
			left: -46px;
		}
	}
</style>
