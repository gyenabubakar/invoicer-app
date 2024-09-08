<!--suppress CssUnusedSymbol -->
<script lang="ts">
  import { AppLogo } from '#components/logos';
</script>

<main class="w-screen h-screen flex items-center justify-center flex-col">
  <AppLogo class="mx-auto mb-4 w-10" href={undefined} />
  <slot />
</main>

<style lang="postcss">
  :global(form) {
    @apply mx-auto w-full md:w-[400px];

    :global(.header) {
      @apply mb-8 text-center;
    }
  }
</style>
