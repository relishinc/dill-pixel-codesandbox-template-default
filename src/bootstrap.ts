import { config, Data } from '@/dill-pixel.config';
import { MyApplication } from '@/MyApplication';
import { create } from 'dill-pixel';
import 'dill-pixel-globals'; // required for globals like the scenes list

/**
 * Bootstrap the application
 */
async function bootstrap() {
  await create<MyApplication, Data>(config, MyApplication); 
} 

void bootstrap();
