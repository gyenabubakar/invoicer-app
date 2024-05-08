// noinspection JSUnusedGlobalSymbols

import { delay } from '#lib';

export const actions = {
  async resendVerificationEmail() {
    await delay(2_000);
    console.log('resendVerificationEmail');
    return true;
  },
};
