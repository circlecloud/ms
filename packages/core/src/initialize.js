global.initialize = function () {
    var mspmc = 'https://ms.yumc.pw/api/plugin/download/name/'
    var artifact = 'https://ci.yumc.pw/job/Minecraft/job/MiaoScript/lastSuccessfulBuild/artifact'

    var fs = require('@ccms/common/dist/fs')
    var http = require('@ccms/common/dist/http').default

    function updateJar() {
        var DocumentBuilderFactory = Java.type('javax.xml.parsers.DocumentBuilderFactory')
        var URLDecoder = Java.type('java.net.URLDecoder')
        var pom = DocumentBuilderFactory.newInstance().newDocumentBuilder()
            .parse(artifact + "/pom.xml")
        var latestVersion = pom.getElementsByTagName("version").item(0).getTextContent()
        if (base.version != latestVersion) {
            var pluginFolder = fs.file(fs.concat(root, '..'))
            var updateFolder = fs.concat(pluginFolder, 'update')
            fs.mkdirs(updateFolder)
            var filePath = base.getInstance().class.classLoader.getURLs()[0]
            var pluginFile = fs.file(URLDecoder.decode(filePath.getFile(), "UTF-8"))
            var updateFile = fs.file(updateFolder, pluginFile.getName())
            http.download(artifact + "/target/MiaoScript.jar", updateFile.getAbsolutePath())
            console.info('MiaoScript found new version ' + latestVersion + ' will upgrade after reboot!')
        }
    }
    function upgradeModules(core) {
        if (base.version && global.ScriptEngineVersion != core['dist-tags']['latest']) {
            var Paths = Java.type('java.nio.file.Paths')
            base.save(Paths.get(root, "upgrade"), core['dist-tags']['latest'])
            console.info('@ccms/core found new version ' + core['dist-tags']['latest'] + ' will upgrade after reboot!')
        }
    }
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
    try {
        Java.type("org.bukkit.Bukkit")
        updateJar()
    } catch (error) {
        console.debug(error)
        if (global.debug) {
            console.ex(error)
        }
    }
    upgradeModules(http.get('https://registry.npmmirror.com/@ccms/core'))
    console.debug('initialize finish!')
}
global.initialize()
delete global.initialize
