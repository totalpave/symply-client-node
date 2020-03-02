
import Sympy from '../src/Sympy';
import {
    simplificationTests,
    expansionTests,
    ITestCase
} from './support/sympyData';

describe('Sympy', () => {
    describe('Simplification', () => {
        for (let i: number = 0; i < simplificationTests.length; i++) {
            let simplification: ITestCase = simplificationTests[i];
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
            });
        }
    });

    describe('Expansion', () => {
        for (let i: number = 0; i < expansionTests.length; i++) {
            let expansionTest: ITestCase = expansionTests[i];
            it(`${expansionTest.test} = ${expansionTest.expectation}`, (done) => {
                Sympy.expand(expansionTest.test).then((result: string) => {
                    // eslint-disable-next-line no-console
                    console.log(expansionTest.expectation);
                    expect(result).toBe(expansionTest.expectation);
                    done();
                }).catch((error: Error) => {
                    fail(error.toString());
                    done();
                });
            });
        }
    });
});
