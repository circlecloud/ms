function exit() {
    var http = require('@ccms/common/dist/http').default
    function upgradeModules(core) {
        if (base.version && global.ScriptEngineVersion != core['dist-tags']['latest']) {
            var Paths = Java.type('java.nio.file.Paths')
            base.save(Paths.get(root, "upgrade"), core['dist-tags']['latest'])
            console.info('@ccms/core found new version ' + core['dist-tags']['latest'] + ' will upgrade after reboot!')
        }
    }
    upgradeModules(http.get('https://registry.npmmirror.com/@ccms/core'))
    console.debug('exit finish!')
}
exit()
