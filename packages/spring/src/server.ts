import { server } from '@ccms/api'
import { provideSingleton } from '@ccms/container';
import { NativePluginManager } from '@ccms/api/dist/interfaces/server/native_plugin';

@provideSingleton(server.Server)
export class SpringServer implements server.Server {
    constructor() {
    }
    getVersion(): string {
        return "SpringFramework"
    }
    getPlayer(name: string) {
        throw new Error("Method not implemented.");
    }
    getOnlinePlayers(): any[] {
        throw new Error("Method not implemented.");
    }
    getConsoleSender() {
        return undefined;
    }
    getService(service: string) {
        throw new Error("Method not implemented.");
    }
    dispatchCommand(sender: any, command: string): boolean {
        console.console('§4Spring暂不支持dispatchCommand!')
        return false;
    }
    dispatchConsoleCommand(command: string): boolean {
        console.console('§4Spring暂不支持dispatchConsoleCommand!')
        return false;
    }
    getPluginsFolder(): string {
        throw new Error("Method not implemented.");
    }
    getNativePluginManager(): NativePluginManager {
        throw new Error("Method not implemented.");
    }
    getNettyPipeline() {
        return base.getInstance().getAutowireCapableBeanFactory()
    }
    getRootLogger() {
        return global.logger
    }
    sendJson(sender: any, json: string | object): void {
        throw new Error("Method not implemented.");
    }
    tabComplete(sender: any, input: string, index?: number) {
        throw new Error("Method not implemented.");
    }
}
