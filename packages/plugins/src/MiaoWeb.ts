import { constants, web } from "@ccms/api"
import { inject } from "@ccms/container"
import { plugin, interfaces } from "@ccms/plugin"
import { Controller, Get, Server, Body, Post, Cookie, Header, Param } from "@ccms/web"

@plugin({ name: 'MiaoWeb', version: '1.0.0', author: 'MiaoWoo', servers: [constants.ServerType.Spring], source: __filename })
export class MiaoWeb extends interfaces.Plugin {
    @inject(web.Server)
    private webServer: Server

    enable() {
        this.webServer.registryController(TestController)
    }

    disable() {
        this.webServer.unregistryController(TestController)
    }
}

@Controller()
export class TestController {
    @Get()
    public get() {
        return 'test'
    }
    @Post()
    public post(@Body() body: any,
        @Cookie('test') testCookie,
        @Header('Accept') testHeader,
        @Param("name") param) {
        return {
            body,
            testCookie,
            testHeader,
            param
        }
    }
}
 