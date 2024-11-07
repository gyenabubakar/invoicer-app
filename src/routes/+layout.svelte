<script lang="ts">
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from 'shadcn/sonner';

	let { children } = $props();

	// $: if (browser) {
	//   $mode;
	//   const isDark = document.documentElement.classList.contains('dark');
	//   const logo = isDark ? '/logo-light.svg' : '/logo-dark.svg';
	//   const linkElement = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
	//   if (linkElement) {
	//     linkElement.href = logo;
	//   }
	// }
</script>

<svelte:head>
	<title>Gyen's Invoicer</title>
</svelte:head>

<Toaster richColors closeButton toastOptions={{ duration: 5000 }} />

<ModeWatcher defaultMode="light" themeColors={{ dark: 'black', light: 'white' }} />

{@render children()}
