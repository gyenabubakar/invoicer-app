<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';

  let props: Omit<HTMLImgAttributes, 'src'> = $props();
</script>

<enhanced:img width="35" alt="GitLab logo" {...props} src="../../assets/gitlab-logo.svg" />
