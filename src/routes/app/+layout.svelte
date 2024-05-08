<script lang="ts">
  // import { UnverifiedEmailNotice } from '#components';
</script>

<!-- TODO: Show this notice only if the user is not verified -->
<!--{#if !user.emailVerified}-->
<!--  <UnverifiedEmailNotice />-->
<!--{:else}-->
<!--  <slot />-->
<!--{/if}-->

<slot />
