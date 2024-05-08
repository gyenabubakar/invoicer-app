<!--suppress CssUnusedSymbol -->
<main class="w-screen h-screen flex items-center justify-center flex-col">
  <img src="/logo-dark.svg" alt="Gyen's Invoicer logo" class="w-10 h-10 mx-auto mb-4" />
  <slot />
</main>

<style lang="postcss">
  :global(form) {
    @apply w-[400px];

    :global(.header) {
      @apply mb-8 text-center;
    }

    :global(.form-group:not(.no-mb)) {
      @apply mb-3;
    }
  }
</style>
