var ws
var SPLIT_LINE = '\\M\\W\\S|T|S|S/L/T/'
let serverKey = 'MiaoScript:server'
var main = avalon.define({
    $id: 'main',
    server: window.localStorage.getItem(serverKey) || location.host,
    type: 'unknow',
    logs: '',
    classes: {
        total: 1,
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
        if (ws && ws.readyState == 1) {
            ws.close()
        }
        window.localStorage.setItem(serverKey, main.server)
        ws = new WebSocket(`${location.protocol == 'http:' ? 'ws' : 'wss'}://${main.server}/ws`)
        ws.onmessage = (event) => {
            const [type, obj] = event.data.split(SPLIT_LINE)
            switch (type) {
                case "log":
                    main.log(obj)
                    break;
                case "type":
                    main.type = obj;
                    break;
            }
        }
        ws.onopen = () => {
            main.send("execDetect", "type");
        }
        ws.onclose = (ev) => {
            main.log(`Remote Server Close Connection... ${ev.code}`)
            if (ev.code == 1006) {
                setTimeout(() => {
                    main.connect()
                }, 1000)
            }
        }
    },
    init: () => {
        if (main.server) {
            main.connect()
        }
    }
});

main.init()
