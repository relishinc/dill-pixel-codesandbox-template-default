import BaseScene from '@/scenes/BaseScene';
import { FONT_KUMBH_SANS } from '@/utils/Constants';
import { FlexContainer } from 'dill-pixel';

export const id = 'game';

export const debug = {
  label:"Game"
}

export default class Game extends BaseScene {

  private _layout: FlexContainer;

  initialize() {
    // a temporary layout container
    this._layout = this.add.flexContainer({
      flexDirection: 'column',
      gap: 25,
      alignItems: 'center',
      justifyContent: 'center',
    });

    // some title text
    this._layout.add.text({
      text: 'Game',
      resolution: 2,
      style: { fontFamily: FONT_KUMBH_SANS, fontWeight: 'bold', fill: 0xffffff },
    });

    // from src/assets.json
    this._layout.add.sprite({ asset: 'jar.png', scale: 0.25 });

    this._layout.add.text({
      text: 'Your game goes here',
      resolution: 2,
      style: { fontFamily: FONT_KUMBH_SANS, fontWeight: 'bold', fill: 0xffffff, fontSize: 16},
    });
  }

  start() { }
}
