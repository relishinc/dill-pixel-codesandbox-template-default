import { Application, LocalStorageAdapter, create, isDev } from 'dill-pixel';

// import { Splash } from '@/Splash';
import { controls } from '@/controls';
import manifest from './assets.json';

async function boot() {
  await create(
    {
      id: 'myDillPixelApp',
      // splash: {
      //   view: Splash,
      //   hideWhen: 'firstSceneEnter',
      // },
      showStats: isDev,
      showSceneDebugMenu: isDev,
      useHash: isDev,
      useSpine: false,
      useVoiceover: false,
      defaultSceneLoadMethod: 'immediate',
      input: {
        controls,
      },
      assets: {
        manifest,
        preload: {
          bundles: ['required'],
        },
        background: {
          bundles: [],
        },
      },
      plugins: [],
      storageAdapters: [{ id: 'local', module: LocalStorageAdapter, options: { namespace: 'myDillPixelApp' } }],
      scenes: [
        {
          id: 'start',
          debugLabel: 'Start',
          namedExport: 'StartScene',
          module: () => import('@/scenes/StartScene'),
        }, {
          id: 'game',
          debugLabel: 'Game',
          namedExport: 'Game',
          module: () => import('@/scenes/Game'),
        },
      ],
    },
    // DillPixelApplication,
  );
}

void boot();
