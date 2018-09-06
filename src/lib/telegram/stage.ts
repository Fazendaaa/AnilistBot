// tslint:disable: no-submodule-imports
import Stage from 'telegraf/stage';
import { locationScene } from './scene/location';
const { leave } = Stage;

export const userStage = new Stage();
userStage.command('cancel', leave());
userStage.register(locationScene);
