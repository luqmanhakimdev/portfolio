<script lang="ts">
	import ServiceCard from '$lib/components/about/ServiceCard.svelte';
	import PetProjects from '$lib/components/about/PetProjects.svelte';
	import Icon from '$lib/components/ui/Icon.svelte';
	import PageHeader from '$lib/components/ui/PageHeader.svelte';
	import { petProjects, profile, services } from '$lib/data/content';
</script>

<article class="about">
	<PageHeader title="About me" />

	<section class="about-text">
		{#each profile.about as paragraph}
			<p>{paragraph}</p>
		{/each}

		<ul class="about-links">
			{#each profile.links as link (link.href)}
				<li>
					<a href={link.href} target="_blank" rel="noopener noreferrer">
						<Icon name={link.icon} size={18} />
						<span>{link.label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>

	<section class="service">
		<h3 class="section-title">What I do</h3>
		<ul class="service-list">
			{#each services as service (service.id)}
				<ServiceCard {service} />
			{/each}
		</ul>
	</section>

	<PetProjects projects={petProjects} />
</article>

<style>
	.about-text {
		color: var(--text-light-gray);
		font-size: var(--fs-6);
		font-weight: var(--fw-300);
		line-height: 1.6;
		margin-bottom: 40px;
	}

	.about-text p:not(:last-child) {
		margin-bottom: 15px;
	}

	.about-links {
		display: flex;
		flex-wrap: wrap;
		gap: 12px 20px;
		margin-top: 20px;
	}

	.about-links a {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: var(--text-light-gray);
		font-size: var(--fs-6);
		font-weight: var(--fw-400);
		transition: color var(--transition-1);
	}

	.about-links a:hover {
		color: var(--accent);
	}

	.section-title {
		color: var(--text-white);
		margin-bottom: 20px;
		font-size: var(--fs-2);
		font-weight: var(--fw-600);
		text-transform: capitalize;
	}

	.service {
		margin-bottom: 35px;
	}

	.service-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 24px;
	}

	@media (min-width: 580px) {
		.service-list {
			grid-template-columns: 1fr 1fr;
			gap: 28px 40px;
		}
	}

	@media (min-width: 1024px) {
		.about-text {
			margin-bottom: 48px;
			font-size: var(--fs-5);
		}

		.service {
			margin-bottom: 48px;
		}

		.service-list {
			grid-template-columns: 1fr 1fr;
			gap: 32px 48px;
		}
	}
</style>
