// tslint:disable: no-submodule-imports
import { userSessionLimit } from 'main';
import Stage from 'telegraf/stage';
import { locationScene } from './scene/location';
import { menuScene } from './scene/menu';
const { leave } = Stage;

export const userStage = new Stage([], { ttl: userSessionLimit });
userStage.command('cancel', leave());
userStage.register(menuScene);
userStage.register(locationScene);
