import { plugin } from "@ccms/api"
import http from '@ccms/common/dist/http'
import { provideSingletonNamed } from "@ccms/container"

import * as fs from '@ccms/common/dist/fs'

import * as Utf8 from "crypto-js/enc-utf8"
import * as AES from "crypto-js/aes"

const SCANNER_TYPE_NAME = 'ms'

@provideSingletonNamed(plugin.PluginScanner, SCANNER_TYPE_NAME)
export class SecretJSFileScanner implements plugin.PluginScanner {
    type: string = SCANNER_TYPE_NAME

    constructor() {
        global.setGlobal('MiaoScriptPackageCenterQQCache', {})
        global.setGlobal('MiaoScriptPackageCenterInfoCache', {})
        global.setGlobal('MiaoScriptPackageCenterTokenCache', {})
        global.setGlobal('MiaoScriptPackageCenterResultCache', {})
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
        let encryptPlugin: any
        // @ts-ignore load plugin not use cache
        metadata.instance = require(metadata.file.toString(), {
            cache: false,
            beforeCompile: (source: string) => {
                try {
                    encryptPlugin = JSON.parse(source)
                } catch (error) {
                    encryptPlugin = require(metadata.file.toString())
                }
                if (!encryptPlugin || !encryptPlugin.encrypt) {
                    let filename = metadata.file.toString()
                    filename = filename.startsWith(root) ? filename.split(root)[1] : filename
                    throw new Error(`无效的加密插件: ${filename}.`)
                }
                let qq = encryptPlugin.qq
                let token = this.decrypt(encryptPlugin.token, qq, encryptPlugin.timestamp)
                global.MiaoScriptPackageCenterQQCache[encryptPlugin.name] = qq
                global.MiaoScriptPackageCenterInfoCache[encryptPlugin.name] = encryptPlugin
                global.MiaoScriptPackageCenterTokenCache[encryptPlugin.name] = token
                let encrypt = encryptPlugin.encrypt
                try {
                    let needUpdate = Date.now() / 1000 - encryptPlugin.timestamp > 3 * 24 * 60 * 60
                    console.console(`§6[§b圈云授权系统§6] §6加密插件: §b${encryptPlugin.name} §e授权效验中...`)
                    let result = http.post('https://ms.yumc.pw/api/plugin/check', {
                        "pid": encryptPlugin.pid,
                        "qq": qq,
                        "token": token,
                        "source": needUpdate
                    })
                    if (!result) { throw new Error(`授权服务器请求失败.`) }
                    global.MiaoScriptPackageCenterResultCache[encryptPlugin.name] = result
                    if (result.code != 200) {
                        throw new Error(`授权效验失败: ${result.msg}.`)
                    }
                    console.console(`§6[§b圈云授权系统§6] §6加密插件: §b${encryptPlugin.name} §a授权效验通过 正在构建插件...`)
                    if (needUpdate) {
                        if (!result.data) {
                            throw new Error(`授权效验失败: 服务器返回异常数据.`)
                        }
                        base.save(metadata.file, result.data.encrypt)
                        return result.data.source
                    }
                    return this.decrypt(encrypt, qq, token)
                } catch (error) {
                    console.console(`§6[§b圈云授权系统§6] §6加密插件: §b${encryptPlugin.name} §c授权效验失败: §4${error}.`)
                }
                if (Date.now() / 1000 - encryptPlugin.timestamp > 7 * 24 * 60 * 60) {
                    throw new Error(`授权效验失败: 离线授权已过期.`)
                }
                console.console(`§6[§b圈云授权系统§6] §6加密插件: §b${encryptPlugin.name} §e离线授权效验通过 正在解密插件...`)
                let decrypt = this.decrypt(encrypt, qq, token)
                console.console(`§6[§b圈云授权系统§6] §6加密插件: §b${encryptPlugin.name} §a离线解密成功 正在构建插件...`)
                return decrypt
            },
            afterCompile: () => {
                delete global.MiaoScriptPackageCenterResultCache[encryptPlugin.name].data
                global.MiaoScriptPackageCenterResultCache[encryptPlugin.name].timestamp = Date.now()
            }
        })
        return metadata
    }

    private decrypt(encrypt: string, key: string, iv: string) {
        return AES.decrypt(encrypt,
            Utf8.parse(`${key}`.padEnd(16, "\0").substring(0, 16)), {
            iv: Utf8.parse(`${iv}`.padEnd(16, "\0").substring(0, 16))
        }).toString(Utf8)
    }

    private scanFolder(folder: any): string[] {
        var files = []
        this.checkUpdateFolder(folder)
        // must check file is exist maybe is a illegal symbolic link file
        fs.list(folder).forEach((path: any) => {
            let file = path.toFile()
            if (file.exists() && file.getName().endsWith(".ms")) {
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
