<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  	import AppSidebar from "$lib/components/AppSidebar.svelte";
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="container-wrapper flex flex-1 flex-col px-2">
	<Sidebar.Provider class="text-xl">
	<AppSidebar />
	<main class="p-4 pt-2 w-full h-full">
		<Sidebar.Trigger class="-ms-1" />
		{@render children?.()}
	</main>
	</Sidebar.Provider>
</div>