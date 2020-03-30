/// <reference types="@ms/nashorn" />
import * as yaml from 'js-yaml'

const File = Java.type("java.io.File");
const separatorChar = File.separatorChar;
type TranslateParam = { [key: string]: any }

declare global {
    interface Console {
        i18n(name: string, param?: TranslateParam);
    }
}

type TranslateContent = {
    langMap: TranslateParam,
    fallbackMap?: TranslateParam
}

export class Translate {
    private root = '';
    private langMap = {};
    private fallbackMap = {};

    constructor(root: string | TranslateContent) {
        if (typeof root == 'string') {
            this.root = root;
        } else {
            this.langMap = root.langMap;
            this.fallbackMap = root.fallbackMap || {};
        }
    }

    translate(name: string, param?: TranslateParam) {
        let langText: string = this.langMap[name] || this.fallbackMap[name];
        if (!langText) { return '[WARN] @ms/i18n miss lang translate: ' + name }
        for (const key in param) {
            langText = langText.replace("{" + key + "}", param[key])
        }
        return langText;
    }

    initialize(lang: string = 'zh_cn', fallback: string = 'zh_cn') {
        this.langMap = this.readYamlFile(this.root, lang) || this.readYamlFile(this.concat(__dirname, '..'), lang)
        this.fallbackMap = this.readYamlFile(this.root, fallback) || this.readYamlFile(this.concat(__dirname, '..'), fallback)
        console.i18n = (name: string, param?: TranslateParam) => {
            console.log(this.translate(name, param))
        }
    }

    readYamlFile(dir: string, name: string) {
        let langFile = this.concat(dir, 'languages', name + '.yml');
        return this.exists(langFile) && yaml.safeLoad(base.read(langFile))
    }

    concat(...args: string[]) {
        return args.join(separatorChar)
    }

    exists(path: string) {
        return new File(path).exists()
    }
}

let systemTranslate = new Translate(root)

export default {
    initialize: systemTranslate.initialize.bind(systemTranslate),
    translate: systemTranslate.translate.bind(systemTranslate)
}
