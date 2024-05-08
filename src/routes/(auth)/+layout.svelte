<!--suppress CssUnusedSymbol -->
<script lang="ts">
  import { Logo } from '#components';
</script>

<main class="w-screen h-screen flex items-center justify-center flex-col">
  <Logo />
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
