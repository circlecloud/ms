import { constants, server } from '@ccms/api'
import { provideSingleton, postConstruct, Autowired, Container, ContainerInstance } from '@ccms/container'
import { CommandMap } from './internal/command'

@provideSingleton(server.Server)
export class SpringServer extends server.Server {
    @Autowired(ContainerInstance)
    private container: Container
    @Autowired()
    private commandMap: CommandMap

    private nettyPipeline = base.getInstance().getAutowireCapableBeanFactory()
    private rootLogger = Packages.org.slf4j.LoggerFactory.getLogger("root") || global.logger

    @postConstruct()
    initialize() {
        this.container.bind(constants.ServiceIdentifier.NettyPipeline).toConstantValue(this.nettyPipeline)
        this.container.bind(constants.ServiceIdentifier.RootLogger).toConstantValue(this.rootLogger)
    }

    getVersion(): string {
        return "SpringFramework"
    }
    getConsoleSender() {
        return {
            name: 'CONSOLE',
            sendMessage: (message: string) => console.console(message)
        }
    }
    dispatchCommand(sender: any, command: string): boolean {
        let cmd_args = command.split(" ")
        return this.commandMap.dispatch(sender, cmd_args.shift(), cmd_args || [])
    }
    dispatchConsoleCommand(command: string): boolean {
        return this.dispatchCommand(this.getConsoleSender(), command)
    }
    getNettyPipeline() {
        return this.nettyPipeline
    }
    getRootLogger() {
        return this.rootLogger
    }
}
