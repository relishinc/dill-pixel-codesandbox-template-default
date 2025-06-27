// This file is auto-generated. Do not edit.
import type { ResolvedAsset, Texture, Spritesheet } from 'pixi.js';

/**
 * Available bundle names in the asset manifest
 * @example
 * const bundle: AssetBundles = 'game';
 */
export type AssetBundles = 
  | 'audio'
  | 'default'
  | 'required'
  | 'spine';

/**
 * Available texture names in the asset manifest
 * @example
 * const texture: AssetTextures = 'game/wordmark';
 */
export type AssetTextures = 
  | 'jar'
  | 'jar.png'
  | 'required/jar'
  | 'required/jar.png'
  | 'required/wordmark'
  | 'required/wordmark.svg'
  | 'wordmark'
  | 'wordmark.svg';

/**
 * Available spritesheet names in the asset manifest
 * @example
 * const spritesheet: AssetSpritesheets = 'game/sheet';
 */
export type AssetSpritesheets = 
  | 'required/ui'
  | 'ui';

/**
 * Available TPS frame names from spritesheets
 * @example
 * const frame: AssetTPSFrames = 'btn/blue';
 */
export type AssetTPSFrames = 
  | 'btn/blue'
  | 'btn/green'
  | 'btn/grey'
  | 'btn/orange'
  | 'btn/purple'
  | 'btn/red'
  | 'btn/yellow'
  | 'btn_a/down'
  | 'btn_a/over'
  | 'btn_a/up'
  | 'btn_b/down'
  | 'btn_b/over'
  | 'btn_b/up'
  | 'joystick/base'
  | 'joystick/handle';

/**
 * Available font names in the asset manifest
 * @example
 * const font: AssetFonts = 'KumbhSans-Regular';
 */
export type AssetFonts = 
  | 'KumbhSans-Bold'
  | 'KumbhSans-Bold.ttf'
  | 'KumbhSans-Medium'
  | 'KumbhSans-Medium.ttf'
  | 'KumbhSans-Regular'
  | 'KumbhSans-Regular.ttf'
  | 'KumbhSans-SemiBold'
  | 'KumbhSans-SemiBold.ttf'
  | 'required/fonts/KumbhSans-Bold'
  | 'required/fonts/KumbhSans-Bold.ttf'
  | 'required/fonts/KumbhSans-Medium'
  | 'required/fonts/KumbhSans-Medium.ttf'
  | 'required/fonts/KumbhSans-Regular'
  | 'required/fonts/KumbhSans-Regular.ttf'
  | 'required/fonts/KumbhSans-SemiBold'
  | 'required/fonts/KumbhSans-SemiBold.ttf';

/**
 * Available font names in the asset manifest
 * @example
 * const font: AssetFonts = 'KumbhSans-Regular';
 */
export type AssetBitmapFonts = never;

/**
 * Available audio names in the asset manifest
 * @example
 * const audio: AssetAudio = 'click';
 */
export type AssetAudio = 
  | 'Cheerful Annoyance'
  | 'Cheerful Annoyance.ogg'
  | 'Drumming Sticks'
  | 'Drumming Sticks.ogg'
  | 'Game Over'
  | 'Game Over.ogg'
  | 'Mishief Stroll'
  | 'Mishief Stroll.ogg'
  | 'Night at the Beach'
  | 'Night at the Beach.ogg'
  | 'audio/music/Cheerful Annoyance'
  | 'audio/music/Cheerful Annoyance.ogg'
  | 'audio/music/Drumming Sticks'
  | 'audio/music/Drumming Sticks.ogg'
  | 'audio/music/Game Over'
  | 'audio/music/Game Over.ogg'
  | 'audio/music/Mishief Stroll'
  | 'audio/music/Mishief Stroll.ogg'
  | 'audio/music/Night at the Beach'
  | 'audio/music/Night at the Beach.ogg'
  | 'audio/sfx/click'
  | 'audio/sfx/click.ogg'
  | 'audio/sfx/hover'
  | 'audio/sfx/hover.ogg'
  | 'click'
  | 'click.ogg'
  | 'hover'
  | 'hover.ogg';

/**
 * Available JSON file names in the asset manifest
 * @example
 * const json: AssetJson = 'locales/en';
 */
export type AssetJson = never;

/**
 * Available Spine animation names in the asset manifest
 * @example
 * const spine: AssetSpine = 'spine/hero';
 */
export type AssetSpine = 
  | 'spine/spineboy-pro.atlas'
  | 'spine/spineboy-pro.skel'
  | 'spineboy-pro.atlas'
  | 'spineboy-pro.skel';

/**
 * Available Rive animation names in the asset manifest
 * @example
 * const rive: AssetRive = 'static/marty';
 */
export type AssetRive = never;

/**
 * Available font family names
 * @example
 * const fontFamily: AssetFontFamilies = 'KumbhSans';
 */
export type AssetFontFamilies = 
  | 'KumbhSans';

/**
 * Available font family names
 * @example
 * const fontFamily: AssetFontFamilies = 'KumbhSans';
 */
export type AssetBitmapFontFamilies = never;

/**
 * Union type of all asset names
 * @example
 * const asset: AssetAlias = 'game/wordmark';
 */
export type AssetAlias = 
  | AssetTextures 
  | AssetSpritesheets 
  | AssetTPSFrames
  | AssetFonts 
  | AssetBitmapFonts
  | AssetAudio 
  | AssetJson
  | AssetSpine
  | AssetRive;

/**
 * Type-safe manifest structure
 */
export interface AssetManifest {
  bundles: {
    [K in AssetBundles]: {
      name: K;
      assets: ResolvedAsset[];
    }
  };
}

/**
 * Type-safe asset types after loading
 */
export interface AssetTypes {
  textures: Record<AssetTextures, Texture>;
  spritesheets: Record<AssetSpritesheets, Spritesheet>;
  tpsFrames: Record<AssetTPSFrames, Texture>;
  fonts: Record<AssetFonts, any>;
  audio: Record<AssetAudio, HTMLAudioElement>;
  json: Record<AssetJson, any>;
  spine: Record<AssetSpine, any>;
  rive: Record<AssetRive, any>;
  fontFamilies: Record<AssetFontFamilies, any>;
  bitmapFonts: Record<AssetBitmapFonts, any>;
  bitmapFontFamilies: Record<AssetBitmapFontFamilies, any>;
}

/**
 * Helper type to get the asset type for a given alias
 * @example
 * type MyTextureType = AssetTypeOf<'game/wordmark'>; // Texture
 */
export type AssetTypeOf<T extends AssetAlias> = 
  T extends AssetTextures ? Texture :
  T extends AssetSpritesheets ? Spritesheet :
  T extends AssetTPSFrames ? Texture :
  T extends AssetFonts ? any :
  T extends AssetBitmapFonts ? any :
  T extends AssetAudio ? HTMLAudioElement :
  T extends AssetJson ? any :
  T extends AssetSpine ? any :
  T extends AssetRive ? any :
  T extends AssetFontFamilies ? any :
  T extends AssetBitmapFontFamilies ? any :
  never;
  

/**
 * Get the bundle name for a given asset
 * @example
 * type MyBundle = AssetBundleOf<'game/wordmark'>; // 'game'
 */
export type AssetBundleOf<T extends AssetAlias> = Extract<AssetBundles, T extends `${infer B}/${string}` ? B : never>;

/**
 * Add type overrides to the framework
 */
declare module 'dill-pixel' {
  interface AssetTypeOverrides {
    Texture: AssetTextures;
    TPSFrames: AssetTPSFrames; 
    SpriteSheet: AssetSpritesheets;
    SpineData: AssetSpine;
    Audio: AssetAudio;
    FontFamily: AssetFontFamilies;
    BitmapFontFamily: AssetBitmapFontFamilies;
    Bundles: AssetBundles;
  }
}
