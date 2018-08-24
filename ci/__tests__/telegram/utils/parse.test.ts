import { sanitize } from '../../../../src/lib/telegram/utils/parse';
import { doTesting } from '../../../doTesting';

doTesting({ location: 'telegram/utils', toTest: sanitize, name: 'sanitize' });
