<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import { navItems } from '$lib/data/content';
	import '$lib/styles/tokens.css';
	import '$lib/styles/global.css';

	let { children } = $props();

	let direction = $state(1);

	function sectionIndex(pathname: string): number {
		const exact = navItems.findIndex((item) => item.href === pathname);
		if (exact >= 0) return exact;

		const nested = navItems.findIndex(
			(item) => item.href !== '/' && pathname.startsWith(item.href)
		);
		return nested >= 0 ? nested : 0;
	}

	beforeNavigate(({ from, to }) => {
		if (!from || !to) return;
		const fromIdx = sectionIndex(from.url.pathname);
		const toIdx = sectionIndex(to.url.pathname);
		if (fromIdx === toIdx) {
			// Deeper into a section (e.g. articles list → post) slides forward
			direction = to.url.pathname.length >= from.url.pathname.length ? 1 : -1;
			return;
		}
		direction = toIdx > fromIdx ? 1 : -1;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Luqman Hakim — SRE/DevOps</title>
</svelte:head>

<main class="main">
	<header class="site-header">
		<Sidebar />
		<Navbar />
	</header>

	<div class="main-content">
		{#key page.url.pathname}
			<div
				class="page-view"
				in:fly={{ x: direction * 56, duration: 280, opacity: 0 }}
				out:fly={{ x: direction * -56, duration: 280, opacity: 0 }}
			>
				{@render children()}
			</div>
		{/key}
	</div>
</main>

<style>
	.main {
		width: min(920px, calc(100% - 32px));
		margin: 24px auto 80px;
	}

	.site-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 16px;
		margin-bottom: 32px;
	}

	.main-content {
		display: grid;
		min-width: 0;
		overflow-x: clip;
	}

	.page-view {
		grid-area: 1 / 1;
		min-width: 0;
	}

	@media (min-width: 580px) {
		.main {
			width: min(920px, calc(100% - 48px));
			margin-top: 40px;
			margin-bottom: 100px;
		}

		.site-header {
			margin-bottom: 40px;
			gap: 24px;
		}
	}

	@media (min-width: 1024px) {
		.main {
			width: min(960px, calc(100% - 64px));
			margin-top: 56px;
		}

		.site-header {
			margin-bottom: 48px;
		}
	}
</style>
