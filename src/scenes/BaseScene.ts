import { COLOR_SLATE } from '@/utils/Constants';
import { Application, Scene } from 'dill-pixel';

export class BaseScene extends Scene<Application> {
  constructor() {
    super();
    this.addColoredBackground(COLOR_SLATE);
  }
}
