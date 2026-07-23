<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import '$lib/styles/tokens.css';
	import '$lib/styles/global.css';

	let { children } = $props();
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
		{@render children()}
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
