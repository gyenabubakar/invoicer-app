<script lang="ts">
import { page } from '$app/state';

import { Button } from 'shadcn/button';
</script>

<div class="flex h-screen w-screen items-center justify-center">
  <div class="text-center">
    {#if page.status === 404}
      <enhanced:img src="#assets/undraw-404.svg" alt="404 Not Found" class="mx-auto w-[150px]" />
    {/if}

    <h1 class="mb-2 mt-8 text-3xl font-bold">
      {#if page.status === 404}
        Oops 😬, that URL doesn't look right.
      {:else}
        An error occurred.
      {/if}
    </h1>

    <p class="mx-auto max-w-96 text-gray-600">
      {#if page.status === 404}
        It looks like you've followed a broken link or entered a URL that doesn't exist.
      {:else}
        Something went wrong. Please try again later.
      {/if}
    </p>

    <div class="mt-8 text-center">
      <Button href="/app/">Go to the Dashboard</Button>
    </div>
  </div>
</div>
