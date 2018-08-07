import { sanitize } from '../../../src/lib/utils/parse';
import { doTesting } from '../../doTesting';

doTesting({ location: 'utils', toTest: sanitize });
