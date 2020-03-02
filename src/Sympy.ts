/* eslint-disable no-console */

import * as ChildProcess from 'child_process';
import * as Path from 'path';

const CLIENT_PATH: string = Path.resolve('./sympy-client');

export class Sympy {
    private static _exec(command: string, args: Array<string> = []): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            let path: string = process.env.PATH;
            path = `${Path.resolve(CLIENT_PATH, 'bin')}:${path}`;

            let p: ChildProcess.ChildProcess = ChildProcess.spawn('python', [
                'sympy_client.py',
                command,
                ...args
            ], {
                cwd: CLIENT_PATH,
                env: {
                    ...process.env,
                    PATH: path
                }
            });

            let buf: string = '';

            p.stdout.on('data', (chunk: Buffer) => {
                buf += chunk.toString();
            });

            p.stderr.on('data', (chunk: Buffer) => {
                buf += chunk.toString();
            });

            p.on('exit', (code: number) => {
                if (code === 0) {
                    resolve(buf);
                }
                else {
                    reject(buf);
                }
            });
        });
    }

    public static async simplify(expression: string): Promise<string> {
        let buffer: string = await Sympy._exec('simplify', [ expression ]);
        return buffer;
    }

    public static async expand(expression: string): Promise<string> {
        let buffer: string = await Sympy._exec('expand', [ expression ]);
        return buffer;
    }
}

export default Sympy;
