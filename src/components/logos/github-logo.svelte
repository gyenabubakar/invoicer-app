<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';

  let props: Omit<HTMLImgAttributes, 'src'> = $props();
</script>

<enhanced:img width="35" alt="GitHub logo" {...props} src="../../assets/github-logo.svg" />
