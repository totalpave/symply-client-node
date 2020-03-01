
import * as api from '../src/api';
import {Sympy} from '../src/Sympy';

describe('Public API', () => {
    it('Sympy', () => {
        expect(api.Sympy).toBe(Sympy);
        expect(api.default).toBe(Sympy);
    });
});
