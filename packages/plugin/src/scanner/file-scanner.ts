import { plugin } from "@ccms/api"
import * as fs from '@ccms/common/dist/fs'
import { provideSingletonNamed } from "@ccms/container"

@provideSingletonNamed(plugin.PluginScanner, 'file')
export class JSFileScanner implements plugin.PluginScanner {
    type: string = 'file'

    scan(target: any): plugin.PluginLoadMetadata[] {
        return this.scanFolder(fs.concat(root, target)).map((file) => this.read(file))
    }

    read(file: any): plugin.PluginLoadMetadata {
        return { file, type: this.type, scanner: this, loaded: false }
    }

    load(metadata: plugin.PluginLoadMetadata): plugin.PluginLoadMetadata {
        if (metadata.type !== this.type) { return }
        this.updatePlugin(metadata.file)
        //@ts-ignore
        metadata.instance = require(metadata.file.toString(), { cache: false })
        return metadata
    }

    private scanFolder(folder: any): string[] {
        var files = []
        console.i18n('ms.plugin.manager.scan', { folder })
        this.checkUpdateFolder(folder)
        // must check file is exist maybe is a illegal symbolic link file
        fs.list(folder).forEach((path: any) => {
            let file = path.toFile()
            if (file.exists() && file.getName().endsWith(".js")) {
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
