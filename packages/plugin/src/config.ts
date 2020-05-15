import * as yaml from 'js-yaml'

export interface PluginConfigLoader {
    load(content: string): any;
    dump(variable: any): string;
}

export class YamlPluginConfig implements PluginConfigLoader {
    load(content: string) {
        return yaml.safeLoad(content);
    }
    dump(variable: any): string {
        return yaml.safeDump(variable, { skipInvalid: true });
    }
}

export class JsonPluginConfig implements PluginConfigLoader {
    load(content: string) {
        return JSON.parse(content);
    }
    dump(variable: any): string {
        return JSON.stringify(variable);
    }
}

const configLoaderMap = new Map<string, PluginConfigLoader>();

export function getConfigLoader(format: string) {
    if (!configLoaderMap.has(format)) { throw new Error(`Unsupport config format ${format} !`) }
    return configLoaderMap.get(format);
}

function init() {
    configLoaderMap.set("json", new JsonPluginConfig())
    let yaml = new YamlPluginConfig()
    configLoaderMap.set("yml", yaml)
    configLoaderMap.set("yaml", yaml)
}

init()
