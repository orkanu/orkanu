import copy from 'rollup-plugin-copy'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import React from 'react'
import reactDom from 'react-dom'

const isProd = process.env.NODE_ENV === 'production'
const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx']
const environment = JSON.stringify(isProd ? 'production' : 'development')
export default {
    input: {
        'scripts/index': 'src/index.tsx',
    },
    output: {
        dir: 'dist/',
        format: 'iife',
        sourcemap: true,
    },
    external: [
        'react',
        'react-dom',
        'emotion',
        ' @emotion/core',
        '@emotion/styled',
    ],
    plugins: [
        clean({ targets: ['dist/'] }),
        copy({
            targets: [
                { src: 'public/index.html', dest: 'dist' },
                {
                    src: 'public/scripts/vendor/**/*',
                    dest: 'dist/scripts/vendor',
                },
            ],
        }),
        replace({ 'process.env.NODE_ENV': environment }),
        babel({
            extensions,
            exclude: 'node_modules/**',
            babelrc: false,
            runtimeHelpers: true,
            sourceMaps: true,
            presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
            ],
            plugins: [
                'emotion',
                'react-require',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                [
                    '@babel/plugin-proposal-object-rest-spread',
                    { useBuiltIns: true },
                ],
            ],
        }),
        resolve({
            extensions,
            mainFields: ['browser', 'jsnext', 'module', 'main'],
        }),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                react: Object.keys(React),
                'react-dom': Object.keys(reactDom),
            },
        }),
        isProd && terser(),
        replaceText({
            files: 'dist/index.html',
            from: /__BASE_PATH__/g,
            to: isProd ? '/orkanu' : '',
        }),
    ],
}
// **********************************************************
// INTERNAL PLUGINS. WILL MOVE THEM TO A CONFIG FOLDER
// **********************************************************

// Plugin to clean destinatio path
import fs from 'fs-extra'

// interface CleanOptions {
//     targets: Array<string>
// }
function clean(options = { targets: [] }) {
    const { targets } = options
    let isFirstRun = true
    return {
        name: 'clean-targets',
        buildStart: async function() {
            if (!isFirstRun) {
                return
            }
            isFirstRun = false
            const items = Array.isArray(targets) ? targets : [targets]
            const deletions = items.map(async target => {
                await fs.emptyDir(target)
            })
            await Promise.all(deletions)
        },
    }
}

// interface ReplaceTextOptions {
//     files: string | string[]
//     ignore?: string | string[]
//     from: string | RegExp | string[] | RegExp[] | FromCallback
//     to: string | string[] | ToCallback
// }

import replaceInFile from 'replace-in-file'

function replaceText(options) {
    const { files, ignore, from, to } = options
    return {
        name: 'replace-text',
        generateBundle: async function() {
            const items = Array.isArray(files) ? files : [files]
            const deletions = items.map(async file => {
                const results = await replaceInFile({
                    files: file,
                    ignore,
                    from,
                    to,
                })
                console.log('Replacement results:', results)
            })
            await Promise.all(deletions)
        },
    }
}
