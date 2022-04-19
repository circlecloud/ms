import { provideSingletonNamed } from '@ccms/container'

import { PluginConfigLoader } from '../interfaces'

const LOADER_TYPE_NAME = 'json'

@provideSingletonNamed(PluginConfigLoader, LOADER_TYPE_NAME)
export class JsonPluginConfig implements PluginConfigLoader {
    type: string = LOADER_TYPE_NAME

    load(content: string) {
        return JSON.parse(content)
    }

    dump(variable: any): string {
        return JSON.stringify(variable, undefined, 4)
    }
}
