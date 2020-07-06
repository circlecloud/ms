import { constants } from "@ccms/api"
import { plugin, interfaces } from "@ccms/plugin"
import { Controllers, Controller, Get, Body, Post, Cookie, Header, Param } from "@ccms/web"

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

@plugin({ author: 'MiaoWoo', servers: [constants.ServerType.Spring], source: __filename })
export class MiaoWeb extends interfaces.Plugin {
    @Controllers(TestController)
    enable() {

    }
}
