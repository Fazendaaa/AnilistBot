// tslint:disable: no-submodule-imports
import Stage from 'telegraf/stage';
import { anilistScene } from './anilist';
import { locationScene } from './location';
const { leave } = Stage;

export const locationStage = new Stage();
locationStage.command('cancel', leave());
locationStage.register(locationScene);

export const anilistStage = new Stage();
anilistStage.command('cancel', leave());
anilistStage.register(anilistScene);
