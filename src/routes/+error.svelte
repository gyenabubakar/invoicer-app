<script lang="ts">
  import { page } from '$app/stores';
  import { Button } from 'shadcn/button';
</script>

<div class="w-screen h-screen flex justify-center items-center">
  <div class="text-center">
    {#if $page.status === 404}
      <enhanced:img src="#assets/undraw-404.svg" alt="404 Not Found" class="w-[150px] mx-auto" />
    {/if}

    <h1 class="mt-8 mb-2 text-3xl font-bold">
      {#if $page.status === 404}
        Oops 😬, that URL doesn't look right.
      {:else}
        An error occurred.
      {/if}
    </h1>

    <p class="text-gray-600 max-w-96 mx-auto">
      {#if $page.status === 404}
        It looks like you've followed a broken link or entered a URL that doesn't exist.
      {:else}
        Something went wrong. Please try again later.
      {/if}
    </p>

    <div class="text-center mt-8">
      <Button href="/app/">Go to the Dashboard</Button>
    </div>
  </div>
</div>
