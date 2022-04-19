import * as yaml from 'js-yaml'
import { provideSingletonNamed } from '@ccms/container'

import { PluginConfigLoader } from '../interfaces'

const LOADER_TYPE_NAME = 'yml'

@provideSingletonNamed(PluginConfigLoader, LOADER_TYPE_NAME)
export class YamlPluginConfig implements PluginConfigLoader {
    type: string = LOADER_TYPE_NAME

    load(content: string) {
        return yaml.load(content)
    }

    dump(variable: any): string {
        return yaml.dump(variable, { skipInvalid: true, lineWidth: 120 })
    }
}
