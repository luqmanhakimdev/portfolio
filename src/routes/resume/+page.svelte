<script lang="ts">
	import Skills from '$lib/components/resume/Skills.svelte';
	import Timeline from '$lib/components/resume/Timeline.svelte';
	import PageHeader from '$lib/components/ui/PageHeader.svelte';
	import { experience } from '$lib/data/content';
</script>

<article class="resume">
	<PageHeader title="Resume" />
	<Timeline title="Experience" icon="briefcase" items={experience} />
	<Skills />
</article>
