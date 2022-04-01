import { plugin } from "@ccms/api"
import http from '@ccms/common/dist/http'
import { provideSingletonNamed } from "@ccms/container"

import * as fs from '@ccms/common/dist/fs'

import * as CryptoJS from "crypto-js"

const SCANNER_TYPE_NAME = 'mjs'

@provideSingletonNamed(plugin.PluginScanner, SCANNER_TYPE_NAME)
export class SecretJSFileScanner implements plugin.PluginScanner {
    type: string = SCANNER_TYPE_NAME

    constructor() {
        global.setGlobal('MiaoScriptPackageCenterTokenCache', {})
        global.setGlobal('MiaoScriptPackageCenterQQCache', {})
    }

    scan(target: any): plugin.PluginLoadMetadata[] {
        return this.scanFolder(fs.concat(root, target)).map((file) => this.read(file))
    }

    read(file: any): plugin.PluginLoadMetadata {
        return { file, type: this.type, scanner: this, loaded: false }
    }

    load(metadata: plugin.PluginLoadMetadata): plugin.PluginLoadMetadata {
        if (metadata.type !== this.type) { return }
        this.updatePlugin(metadata.file)
        //@ts-ignore load plugin not use cache
        metadata.instance = require(metadata.file.toString(), {
            cache: false,
            hook: (origin) => {
                let info = JSON.parse(origin)
                if (!info || !info.encrypt) {
                    return this.exportErrorPlugin(
                        metadata.file,
                        `console.console('§4无效的加密插件: §c${metadata.file}')`
                    )
                }
                let qq = info.qq
                let encrypt = info.encrypt
                let token = this.decrypt(info.token, qq, info.timestamp)
                global.MiaoScriptPackageCenterQQCache[info.name] = qq
                global.MiaoScriptPackageCenterTokenCache[info.name] = token
                try {
                    let result = http.post('https://ms.yumc.pw/api/plugin/check', `{
                        "pid": ${info.pid},
                        "qq": ${qq},
                        "token": "${token}",
                        "source": true
                    }`)
                    if (result.code != 200) {
                        return this.exportErrorPlugin(
                            info.name,
                            `console.console('§6[§b圈云授权系统§6] §6插件: §b${info.name} §c授权效验失败: §4${result.msg}')`
                        )
                    }
                    if (!result.data) {
                        return this.exportErrorPlugin(
                            info.name,
                            `console.console('§6[§b圈云授权系统§6] §6插件: §b${info.name} §c服务器返回异常数据.')`
                        )
                    }
                    base.save(metadata.file, result.data.encrypt)
                    return result.data.source
                } catch (error) {
                }
                if (Date.now() / 1000 - info.timestamp > 7 * 24 * 60 * 60) {
                    return this.exportErrorPlugin(
                        info.name,
                        `console.console('§6[§b圈云授权系统§6] §6插件: §b${info.name} §c离线授权已过期.')`
                    )
                }
                return this.decrypt(encrypt, qq, token)
            }
        })
        return metadata
    }

    private decrypt(encrypt, key, iv) {
        return CryptoJS.AES.decrypt(encrypt,
            CryptoJS.enc.Utf8.parse(`${key}`.padEnd(16, "\0").substring(0, 16)), {
            iv: CryptoJS.enc.Utf8.parse(`${iv}`.padEnd(16, "\0").substring(0, 16))
        }).toString(CryptoJS.enc.Utf8)
    }

    private exportErrorPlugin(name, src) {
        return `module.exports = {
            description: {
                name: "${name}",
                version: "未授权",
                author: "未授权",
                type: "basic",
                source: __filename,
                target: this
            },
            load: function () { ${src} }
        }`
    }

    private scanFolder(folder: any): string[] {
        var files = []
        this.checkUpdateFolder(folder)
        // must check file is exist maybe is a illegal symbolic link file
        fs.list(folder).forEach((path: any) => {
            let file = path.toFile()
            if (file.exists() && (file.getName().endsWith(".mjs.json") || file.getName().endsWith(".mjs"))) {
                files.push(file)
            }
        })
        return files
    }

    private checkUpdateFolder(path: any) {
        var update = fs.file(path, "update")
        if (!update.exists()) {
            update.mkdirs()
        }
    }

    private updatePlugin(file: any) {
        var update = fs.file(fs.file(fs.file(file).parentFile, 'update'), file.name)
        if (update.exists()) {
            console.i18n("ms.plugin.manager.build.update", { name: file.name })
            fs.move(update, file, true)
        }
    }

}
