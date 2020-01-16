var SPLIT_LINE = '\\M\\W\\S|T|S|S/L/T/'
let serverKey = 'MiaoScript:server'
let codeStorageKey = "MiaoScript:code:"
var main = avalon.define({
    $id: 'main',
    server: window.localStorage.getItem(serverKey) || location.host,
    type: 'unknow',
    logs: '',
    codes: ["default", "bukkit", "sponge", "bungee", "common", "test", "dev", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    code: 'default',
    classes: {
        total: 0,
        loaded: 0,
    },
    precent: () => {
        return classes.total
    },
    log: (info) => {
        info.split("\n").forEach((line) => { term.writeln(mcColor2ANSI(line + '§r')) })
    },
    send: (type, content) => {
        if (!ws || ws.readyState != 1) { term.writeln('Please Connect to Server first!'); return; }
        ws.send(`${type}${SPLIT_LINE}${content}`);
    },
    connect: (event = { key: 'Enter' }) => {
        if (event.key !== "Enter") {
            return;
        }
        connectWebSocket()
    },
    init: () => {
        if (main.server) {
            main.connect()
        }
    },
    load: (editor) => {
        editor.setValue(window.localStorage.getItem(codeStorageKey + main.code) || '')
    },
    save: (editor) => {
        window.localStorage.setItem(codeStorageKey + main.code, editor.getValue())
        showMessenger('代码页 ' + main.code + ' 保存成功!')
    },
    switch: (editor) => {
        let index = main.codes.indexOf(main.code) + 1
        main.code = main.codes[index == main.codes.length ? 0 : index]
    }
});

main.$watch('code', (now, old, name) => {
    window.localStorage.setItem(codeStorageKey + old, editor.getValue())
    showMessenger('代码页 ' + old + ' 保存成功!')
    editor.setValue(window.localStorage.getItem(codeStorageKey + now) || '// empty code page ' + now)
})

main.init()
