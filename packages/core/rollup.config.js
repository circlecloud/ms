import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { obfuscator } from 'rollup-obfuscator'

import pkg from './package.json'

const external = ['path', 'fs', 'typescript', 'tslib']
/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    input: 'src/index.ts',
    plugins: [
        peerDepsExternal(),
        typescript(),
        obfuscator({
            compact: true,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 1,
            identifierNamesGenerator: 'mangled-shuffled',
            numbersToExpressions: true,
            simplify: true,
            stringArray: true,
            stringArrayThreshold: 1,
            stringArrayEncoding: ['rc4'],
            stringArrayCallsTransform: true,
            stringArrayCallsTransformThreshold: 1,
            stringArrayWrappersChainedCalls: true,
            stringArrayWrappersParametersMaxCount: 3,
            sourceMap: true,
            sourceMapSourcesMode: 'sources',
            inputFileName: `${pkg.name}.ts`,
            transformObjectKeys: true,
            unicodeEscapeSequence: true,
            target: 'browser-no-eval'
        }),
    ],
    external,
    treeshake: false,
    output: [
        {
            format: 'cjs',
            interop: "auto",
            exports: "named",
            sourcemap: true,
            file: pkg.main || `dist/${pkg.name}.js`
        }
    ]
}
