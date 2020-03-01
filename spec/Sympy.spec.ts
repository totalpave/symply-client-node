
import Sympy from '../src/Sympy';
import {simplificationTests, ISimplificationTest} from './support/simplification';

describe('Sympy', () => {
    describe('Simplification', () => {
        for (let i: number = 0; i < simplificationTests.length; i++) {
            let simplification: ISimplificationTest = simplificationTests[i];
            it(`${simplification.test} = ${simplification.expectation}`, (done) => {
                Sympy.simplify(simplification.test).then((result: string) => {
                    // eslint-disable-next-line no-console
                    console.log(simplification.expectation);
                    expect(result).toBe(simplification.expectation);
                    done();
                }).catch((error: Error) => {
                    fail(error.toString());
                    done();
                });
                // expectAsync(Sympy.simplify(simplification.test)).toBeResolvedTo(simplification.expectation);
            });
        }
    });
});
