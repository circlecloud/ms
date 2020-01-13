var ws;
function connectWebSocket() {
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
}
