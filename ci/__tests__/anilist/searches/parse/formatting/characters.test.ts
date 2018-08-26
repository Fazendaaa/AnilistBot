import { doTesting } from '../../../../../doTesting';
import { charactersImage, charactersAllNames } from '../../../../../../src/lib/anilist/searches/parse/formatting/characters';

doTesting({ location: 'anilist/searches/parse/formatting/characters', toTest: charactersImage, name: 'charactersImage' });
doTesting({ location: 'anilist/searches/parse/formatting/characters', toTest: charactersAllNames, name: 'charactersAllNames' });
