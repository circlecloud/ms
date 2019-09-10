import { plugin, interfaces } from '@ms/plugin'

@plugin({ name: 'Test', version: '1.0.0', author: 'MiaoWoo' })
export class Test extends interfaces.Plugin {
    load() {
        this.logger.log('');
    }
    enable() {
        throw new Error("Method not implemented.");
    }
    disable() {
        throw new Error("Method not implemented.");
    }
}
