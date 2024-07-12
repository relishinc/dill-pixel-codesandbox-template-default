import { Application, Scene } from 'dill-pixel';

import { COLOR_SLATE } from '@/utils/Constants';

export class BaseScene extends Scene<Application> {
  constructor() {
    super();
    this.addColoredBackground(COLOR_SLATE);
  }
}
