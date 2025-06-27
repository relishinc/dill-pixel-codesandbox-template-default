import Base from '@/scenes/Base';

export const id = 'game';
export const debug = {
  label: 'Game',
};

export default class Game extends Base {
  initialize() {
    // some title text
    this.add.text({
      text: 'My Game',
      style: { fontFamily: 'KumbhSans', fontSize: 48, fill: 0xffffff },
    });
  }

  destroy() {
    super.destroy();
    // clean up the scene when it gets removed
  }

  start() {
    // start the scene's jobs here
  }

  resize() {
    // any layout changes on resize go here
  }

  update() {
    // the game loop
  }
}
