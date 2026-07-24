<script lang="ts">
	type IconName =
		| 'mail'
		| 'phone'
		| 'calendar'
		| 'location'
		| 'github'
		| 'linkedin'
		| 'twitter'
		| 'cloud'
		| 'container'
		| 'automation'
		| 'observability'
		| 'security'
		| 'recovery'
		| 'book'
		| 'briefcase'
		| 'eye'
		| 'chevron'
		| 'quote'
		| 'paper-plane'
		| 'close'
		| 'external';

	type Props = {
		name: IconName;
		size?: number;
		class?: string;
	};

	let { name, size = 18, class: className = '' }: Props = $props();
</script>

<svg
	class={className}
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
	focusable="false"
>
	{#if name === 'mail'}
		<path
			d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
			stroke="currentColor"
			stroke-width="1.6"
		/>
		<path d="m4 8 8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
	{:else if name === 'phone'}
		<path
			d="M7.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 3.5 5.7 2 2 0 0 1 5.5 3.5Z"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linejoin="round"
		/>
	{:else if name === 'calendar'}
		<rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" stroke-width="1.6" />
		<path d="M8 3.5v3M16 3.5v3M3.5 9.5h17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
	{:else if name === 'location'}
		<path
			d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
			stroke="currentColor"
			stroke-width="1.6"
		/>
		<circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.6" />
	{:else if name === 'github'}
		<path
			d="M12 3a9 9 0 0 0-2.8 17.5c.4.1.6-.2.6-.4v-1.4c-2.5.5-3-1.2-3-1.2-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.7 1.3 2 1 2.5.7.1-.5.3-.9.5-1.1-1.9-.2-3.9-1-3.9-4.3 0-1 .3-1.8.9-2.4-.1-.2-.4-1.1.1-2.3 0 0 .8-.2 2.5.9a8.6 8.6 0 0 1 4.5 0c1.7-1.1 2.5-.9 2.5-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.4 0 3.3-2 4.1-3.9 4.3.3.3.6.8.6 1.6v2.4c0 .2.2.5.6.4A9 9 0 0 0 12 3Z"
			fill="currentColor"
		/>
	{:else if name === 'linkedin'}
		<path
			d="M6.5 9.5H3.8V20h2.7V9.5ZM5.1 4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM20.2 20h-2.7v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20H11V9.5h2.6v1.4h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.4V20Z"
			fill="currentColor"
		/>
	{:else if name === 'twitter'}
		<path
			d="M4 5.5 10.4 13l-6.2 7h2.2l5-5.7 4.1 5.7H20L13.4 12.7 19.2 5.5h-2.2l-4.6 5.2L8.6 5.5H4Z"
			fill="currentColor"
		/>
	{:else if name === 'cloud'}
		<path
			d="M7.5 17.5h9.2a3.8 3.8 0 0 0 .4-7.6 5.2 5.2 0 0 0-10-1.4A3.5 3.5 0 0 0 7.5 17.5Z"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linejoin="round"
		/>
	{:else if name === 'container'}
		<path
			d="M4 8.5 12 4.5l8 4v7l-8 4-8-4v-7Z"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linejoin="round"
		/>
		<path d="M12 12.5v7M4 8.5l8 4 8-4" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
	{:else if name === 'automation'}
		<path
			d="M12 4.5v2.2M12 17.3v2.2M4.5 12H6.7M17.3 12h2.2M6.4 6.4l1.6 1.6M16 16l1.6 1.6M17.6 6.4 16 8M8 16l-1.6 1.6"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linecap="round"
		/>
		<circle cx="12" cy="12" r="3.2" stroke="currentColor" stroke-width="1.6" />
	{:else if name === 'observability'}
		<path
			d="M4 16.5 8.5 10l3.5 4 3-6.5L20 16.5"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path d="M4 19.5h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
	{:else if name === 'security'}
		<path
			d="M12 3.5 19 6.5v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9v-5l7-3Z"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linejoin="round"
		/>
		<path d="m9.5 12 1.8 1.8 3.7-3.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
	{:else if name === 'recovery'}
		<path
			d="M19.5 12A7.5 7.5 0 1 1 12 4.5"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linecap="round"
		/>
		<path d="M19.5 4.5v5h-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
	{:else if name === 'book'}
		<path
			d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5V5.5Z"
			stroke="currentColor"
			stroke-width="1.6"
		/>
		<path d="M5 18.5h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
	{:else if name === 'briefcase'}
		<rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.6" />
		<path
			d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linecap="round"
		/>
	{:else if name === 'eye'}
		<path
			d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z"
			stroke="currentColor"
			stroke-width="1.6"
		/>
		<circle cx="12" cy="12" r="2.8" stroke="currentColor" stroke-width="1.6" />
	{:else if name === 'chevron'}
		<path d="m8 10 4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
	{:else if name === 'quote'}
		<path
			d="M9.5 8H6.2C5 8 4 9.1 4 10.4v2.2C4 13.9 5 15 6.2 15H8c.9 0 1.5.7 1.5 1.5V18H6.5M20 8h-3.3C15.5 8 14.5 9.1 14.5 10.4v2.2c0 1.3 1 2.4 2.2 2.4H18c.9 0 1.5.7 1.5 1.5V18H17"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linecap="round"
		/>
	{:else if name === 'paper-plane'}
		<path
			d="m4 11 16-7-7 16-2.5-6.5L4 11Z"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linejoin="round"
		/>
	{:else if name === 'close'}
		<path d="M7 7l10 10M17 7 7 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
	{:else if name === 'external'}
		<path
			d="M10 5h9v9M19 5l-9.5 9.5M14 19H6.5A1.5 1.5 0 0 1 5 17.5v-7.5"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	{/if}
</svg>
