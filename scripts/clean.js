import sh from 'shelljs'
import upath from 'upath'
import { __filename } from './_shims.js'

const destPath = upath.resolve(upath.dirname(__filename), '../dist')

sh.rm('-rf', `${destPath}/*`)
