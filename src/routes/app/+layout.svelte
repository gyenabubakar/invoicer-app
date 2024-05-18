<script lang="ts">
  import { Navbar } from '#components/navbar';
  import { Container } from '#components';
</script>

<!-- TODO: Show this notice only if the user is not verified -->
<!-- <UnverifiedEmailNotice /> -->

<Navbar />

<main>
  <Container id="orgs-projects-nav-wrapper" size="lg">
    <slot />
  </Container>
</main>

<style lang="postcss">
  :global(body) {
    @apply bg-slate-50;
  }

  main {
    @apply pb-28 pt-10;

    :global(h1) {
      @apply text-4xl font-semibold;
    }
  }
</style>
