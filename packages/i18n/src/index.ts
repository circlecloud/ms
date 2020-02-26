import '@ms/ployfill'
import * as yaml from 'js-yaml'

import * as fs from '@ms/common/dist/fs'

let langMap = {};
let fallbackMap = {};

type TranslateParam = { [key: string]: any }

function translate(name: string, param?: TranslateParam) {
    let langText: string = langMap[name] || fallbackMap[name];
    if (!langText) { return '[WARN] @ms/i18n miss lang translate: ' + name }
    for (const key in param) {
        langText = langText.replace("{" + key + "}", param[key])
    }
    return langText;
}

function initialize(lang: string = 'zh_cn', fallback: string = 'zh_cn') {
    langMap = readYamlFile(root, lang) || readYamlFile(fs.concat(__dirname, '..'), lang)
    fallbackMap = readYamlFile(root, fallback) || readYamlFile(fs.concat(__dirname, '..'), fallback)
    console.i18n = function i18n(name: string, param?: TranslateParam) {
        console.log(translate(name, param))
    }
}

function readYamlFile(dir: string, name: string) {
    let langFile = fs.concat(dir, 'languages', name + '.yml');
    return fs.exists(langFile) && yaml.safeLoad(base.read(langFile))
}

declare global {
    interface Console {
        i18n(name: string, param?: TranslateParam);
    }
}

export default {
    initialize,
    translate
};
