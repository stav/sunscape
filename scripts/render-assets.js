import sh from 'shelljs'
import upath from 'upath'
import { __filename } from './_shims.js'

export default function renderAssets() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/assets');
    const destPath = upath.resolve(upath.dirname(__filename), '../dist/.');

    sh.cp('-R', sourcePath, destPath)
}
