<script lang="ts">
	import type { PetProject } from '$lib/types';

	type Props = {
		projects: PetProject[];
	};

	let { projects }: Props = $props();
</script>

<section class="pet-projects">
	<h3 class="section-title">Pet projects</h3>

	<ul class="project-list">
		{#each projects as project (project.id)}
			<li class="project-item">
				<a href={project.url} target="_blank" rel="noopener noreferrer">
					<h4 class="name">{project.name}</h4>
					<p class="description">{project.description}</p>
					<span class="url">{project.url.replace(/^https?:\/\//, '')}</span>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.section-title {
		color: var(--text-white);
		margin-bottom: 20px;
		font-size: var(--fs-2);
		font-weight: var(--fw-600);
		text-transform: capitalize;
	}

	.project-list {
		display: grid;
		gap: 16px;
	}

	.project-item a {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 18px 0;
		min-width: 0;
	}

	.name {
		color: var(--text-white);
		font-size: var(--fs-4);
		font-weight: var(--fw-600);
		line-height: 1.3;
		transition: color var(--transition-1);
	}

	.project-item a:hover .name {
		color: var(--accent);
	}

	.description {
		color: var(--text-light-gray);
		font-size: var(--fs-6);
		font-weight: var(--fw-300);
		line-height: 1.55;
	}

	.url {
		color: var(--text-light-gray-70);
		font-size: var(--fs-7);
	}

	@media (min-width: 640px) {
		.name {
			font-size: var(--fs-2);
		}
	}
</style>
