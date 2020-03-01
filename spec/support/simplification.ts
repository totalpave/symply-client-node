
export interface ISimplificationTest {
    test: string;
    expectation: string;
}

export const simplificationTests: Array<ISimplificationTest> = [
    {
        test: '0.5*(x-0)',
        expectation: '0.5*x'
    },
    {
        test: '0.5*(x-0)+0.0167*(x-0)*(x-4)-0.0057*(x-0)*(x-4)*(x-10)+0.0018*(x-0)*(x-4)*(x-10)*(x-12)',
        expectation: 'x*(0.0018*x**3 - 0.0525*x**2 + 0.4709*x - 0.6588)'
    },
    {
        test: 'a+b-c',
        expectation: 'a + b - c'
    }
];
