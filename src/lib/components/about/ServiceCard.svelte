<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import type { Service } from '$lib/types';

	type Props = {
		service: Service;
	};

	let { service }: Props = $props();
</script>

<li class="service-item">
	<div class="icon-box">
		<Icon name={service.icon} size={28} />
	</div>
	<div class="content">
		<h4 class="title">{service.title}</h4>
		<p class="text">{service.description}</p>
	</div>
</li>

<style>
	.service-item {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 16px;
	}

	.icon-box {
		color: var(--accent);
		flex-shrink: 0;
		margin-top: 2px;
	}

	.title {
		color: var(--text-white);
		font-size: var(--fs-5);
		font-weight: var(--fw-600);
		text-transform: none;
		margin-bottom: 7px;
	}

	.text {
		color: var(--text-light-gray);
		font-size: var(--fs-6);
		font-weight: var(--fw-300);
		line-height: 1.6;
	}

	@media (min-width: 580px) {
		.service-item {
			gap: 18px;
		}
	}
</style>
