<script lang="ts">
  import { toast } from 'svelte-sonner';
  import { Button } from 'shadcn-ui/button';
  import { enhance } from '$app/forms';
  import type { SubmitFunction } from '@sveltejs/kit';

  let resending = false;
  let count: number | undefined; //
  let interval: number | undefined;

  $: canResend = !resending && !count;

  const resend: SubmitFunction = ({ cancel }) => {
    if (!canResend) return cancel();
    resending = true;

    return async ({ update, result }) => {
      await update();
      resending = false;

      if (result.type === 'success') {
        toast.success('Verification email sent successfully', {
          position: 'top-right',
          duration: 5000,
        });

        count = 60;
        interval = setInterval(() => {
          count = count ? count - 1 : 59;
          if (count === 0) {
            clearInterval(interval);
            count = undefined;
          }
        }, 1000);
        return;
      }

      toast.error('Failed to send verification email', {
        position: 'top-right',
        duration: 5000,
      });
    };
  };
</script>

<div id="unverified-email-notice" class="">
  <div class="flex items-center justify-center h-full px-4">
    <form method="post" action="?/resendVerificationEmail" class="text-center" use:enhance={resend}>
      <img
        src="/email_campaign.svg"
        alt="Email campaign illustration"
        class="w-[150px] mx-auto mb-8"
      />

      <h1 class="text-2xl font-bold">Please verify your email address</h1>

      <p class="mt-4 max-w-[450px] mx-auto text-gray-700">
        We've sent you an email with a link to verify your email address. Please click the link in
        the email to continue. <br />
        <strong class="text-black font-medium">
          If your account is not verified after 24 hours, it will be deleted.
        </strong>
      </p>

      <br />

      <Button
        type="submit"
        loading={resending}
        disabled={!canResend}
        aria-label={resending ? 'Resending email...' : 'Resend verification email'}
      >
        Resend verification email
      </Button>

      {#if count}
        <p class="text-sm mt-4 text-gray-500">
          Resend email in {count} seconds
        </p>
      {/if}
    </form>
  </div>
</div>

<style lang="postcss">
  #unverified-email-notice {
    @apply fixed left-0 right-0 top-0 z-50 h-screen w-screen bg-white;
  }
</style>
