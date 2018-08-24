import { translateDescription, translateGenres } from '../../../../../src/lib/anilist/requests/translations/translations';
import { doTesting } from '../../../../doTesting';

doTesting({ location: 'anilist/request/translations', toTest: translateGenres, name: 'translateGenres' });
doTesting({ location: 'anilist/request/translations', toTest: translateDescription, name: 'translateDescription' });
