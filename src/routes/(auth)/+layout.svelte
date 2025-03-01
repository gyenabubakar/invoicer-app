<script lang="ts">
import { AppLogo } from '#components/logos';

let { children } = $props();
</script>

<main class="flex h-screen w-screen flex-col items-center justify-center">
  <AppLogo class="mx-auto mb-4 w-10" href={undefined} />

  {@render children?.()}
</main>

<style lang="postcss">
:global(form) {
  @apply mx-auto w-full md:w-[400px];

  :global(.header) {
    @apply mb-8 text-center;
  }
}
</style>
