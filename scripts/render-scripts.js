import fs from 'fs'
import sh from 'shelljs'
import upath from 'upath'
import packageJSON from '../package.json' assert {type: 'json'}
import { __filename } from './_shims.js'

export default function renderScripts() {

    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/js/*');
    const destPath = upath.resolve(upath.dirname(__filename), '../dist/assets/');

    sh.cp('-R', sourcePath, destPath)

    const sourcePathScriptsJS = upath.resolve(upath.dirname(__filename), '../src/js/scripts.js');
    const destPathScriptsJS = upath.resolve(upath.dirname(__filename), '../dist/assets/scripts.js');

    const copyright = `/*!
* Start Bootstrap - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
* Copyright 2013-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/StartBootstrap/${packageJSON.name}/blob/master/LICENSE)
*/
`
    const scriptsJS = fs.readFileSync(sourcePathScriptsJS);

    fs.writeFileSync(destPathScriptsJS, copyright + scriptsJS);
}
