<script lang="ts">
	import { page } from '$app/state';
	import { navItems } from '$lib/data/content';

	function isActive(href: string): boolean {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}
</script>

<nav class="navbar" aria-label="Primary">
	<ul class="navbar-list">
		{#each navItems as item (item.href)}
			<li>
				<a class="navbar-link" class:active={isActive(item.href)} href={item.href} data-sveltekit-preload-data="hover">
					{item.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.navbar {
		flex-shrink: 0;
		padding-top: 4px;
	}

	.navbar-list {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.navbar-link {
		display: block;
		padding: 6px 8px;
		font-size: var(--fs-7);
		font-weight: var(--fw-500);
		color: var(--text-light-gray);
		transition: color var(--transition-1);
	}

	.navbar-link:hover,
	.navbar-link.active {
		color: var(--accent);
	}

	@media (min-width: 580px) {
		.navbar-list {
			gap: 8px;
		}

		.navbar-link {
			font-size: var(--fs-6);
			padding: 6px 12px;
		}
	}

	@media (min-width: 1024px) {
		.navbar {
			padding-top: 10px;
		}

		.navbar-link {
			font-size: var(--fs-5);
		}
	}
</style>
