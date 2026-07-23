<script lang="ts">
	import { skills } from '$lib/data/content';
</script>

<section class="skill">
	<h3 class="section-title">My skills</h3>

	<ul class="skills-list">
		{#each skills as skill (skill.id)}
			<li class="skills-item">{skill.name}</li>
		{/each}
	</ul>
</section>

<style>
	.section-title {
		color: var(--text-white);
		font-size: var(--fs-2);
		font-weight: var(--fw-600);
		text-transform: capitalize;
		margin-bottom: 20px;
	}

	.skills-list {
		display: flex;
		flex-wrap: wrap;
		gap: 10px 18px;
	}

	.skills-item {
		color: var(--text-light-gray);
		font-size: var(--fs-6);
		font-weight: var(--fw-400);
	}

	.skills-item:not(:last-child)::after {
		content: '·';
		margin-left: 18px;
		color: var(--text-gray-2);
	}
</style>
