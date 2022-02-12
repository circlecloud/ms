function initialize() {
    var mspmc = 'http://ms.yumc.pw/api/plugin/download/name/'

    var http = require('@ccms/common/dist/http').default
    var fs = require('@ccms/common/dist/fs')

    var pluginFolder = fs.concat(root, 'plugins')
    var updateFolder = fs.concat(pluginFolder, 'update')
    var pluginFile = fs.concat(pluginFolder, 'MiaoScriptPackageManager.js')
    if (!fs.exists(pluginFile)) {
        fs.mkdirs(pluginFile)
        base.save(fs.concat(updateFolder, 'MiaoScriptPackageManager.auto.install'), '.')
    }
    fs.list(updateFolder).forEach(function (path) {
        var file = path.toFile()
        if (file.exists()) {
            var filename = file.getName()
            if (filename.endsWith(".auto.install")) {
                var pluginName = filename.replace('.auto.install', '')
                var pluginFile = fs.concat(pluginFolder, pluginName + '.js')
                if (!fs.exists(pluginFile)) {
                    var pluginTemp = pluginFile + '.tmp'
                    http.download(mspmc + pluginName, pluginTemp)
                    fs.move(pluginTemp, pluginFile, true)
                }
                base.delete(file)
            }
        }
    })
    var core = http.get('https://registry.npmmirror.com/@ccms/core')
    if (base.VERSION && global.ScriptEngineVersion != core['dist-tags']['latest']) {
        var Paths = Java.type('java.nio.file.Paths')
        base.save(Paths.get(root, "upgrade"), core['dist-tags']['latest'])
        console.info('@ccms/core found new version ' + core['dist-tags']['latest'] + ' will upgrade after reboot!')
    }
    console.debug('initialize finish!')
}
initialize()
