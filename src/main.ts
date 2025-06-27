// delete this file if you don't need it
// otherwise, the runtime will boostrap your app with your dill-pixel.config.ts
// and pass it to "main" below

import { MyApplication } from '@/MyApplication';

export default async function main(app: MyApplication) {
  console.log(app);
}
