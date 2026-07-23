<script lang="ts">
	type Props = {
		title: string;
	};

	let { title }: Props = $props();
</script>

<header class="page-header">
	<h2 class="page-title">{title}</h2>
</header>

<style>
	.page-header {
		margin-bottom: var(--space-7);
	}

	.page-title {
		position: relative;
		padding-bottom: 10px;
		font-size: var(--fs-1);
		font-weight: var(--fw-600);
		color: var(--text-white);
		text-transform: capitalize;
	}

	.page-title::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 40px;
		height: 4px;
		border-radius: 3px;
		background: var(--accent);
	}
</style>
