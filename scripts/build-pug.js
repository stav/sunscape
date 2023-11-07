import sh from 'shelljs'
import upath from 'upath'
import renderPug from './render-pug.js'
import { __filename } from './_shims.js'

const srcPath = upath.resolve(upath.dirname(__filename), '../src')

sh.find(srcPath).forEach(_processFile)

function _processFile(filePath) {
    if (
        filePath.match(/\.pug$/)
        && !filePath.match(/include/)
        && !filePath.match(/mixin/)
        && !filePath.match(/\/pug\/layouts\//)
    ) {
        renderPug(filePath);
    }
}
