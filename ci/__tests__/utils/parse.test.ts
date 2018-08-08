import { sanitize } from '../../../src/lib/telegram/utils/parse';
import { doTesting } from '../../doTesting';

doTesting({ location: 'utils', toTest: sanitize });
