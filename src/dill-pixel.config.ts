import { defineActions, defineButtons, defineConfig, defineContexts, defineControls } from 'dill-pixel';

/** Default template */
// TODO: Add custom contexts here if desired
// by default, we use the default contexts
export const contexts = defineContexts(); // e.g.

// TODO: Add actions here
// examples below
export const actions = defineActions(contexts, {
  //pause: { context: '*' },
  //close: { context: ['menu', 'popup'] },
  //back: { context: ['menu'] },
  //next: { context: ['menu'] },
  //select: { context: ['menu', 'default'] },
  //show_popup: { context: '*' },
});

/** Don't touch */
export type Contexts = (typeof contexts)[number];
export type ActionTypes = keyof typeof actions;
/** Don't touch */

// TODO: Add buttons here
const buttons = defineButtons();

// TODO: Add controls here
export const controls = defineControls(actions, buttons);
/** End of Default Template */

/** User config */
export type Data = {
  dill: string;
  pixel: number;
};

export const config = defineConfig<Data>({
  id: '__APPLICATION_NAME__',
  defaultSceneLoadMethod: 'immediate',
  defaultScene: 'start',
  useSpine: true,
  showStats: true,
  showSceneDebugMenu: true,
  useHash: true,
  useVoiceover: false,
  data: {
    initial: {
      dill: 'pixel',
      pixel: 0,
    },
    backupKeys: [],
    backupAll: false,
  },
  actions,
  input: {
    controls,
  },
  assets: {
    manifest: './assets.json',
    preload: {
      bundles: ['required'],
    },
    background: {
      bundles: ['audio'],
    },
  },
  plugins: [],
  storageAdapters: [],
  resizer: {
    minWidth: 500,
    minHeight: 768,
  },
});
/** End of User config */
