import { createInterface } from 'readline'
import { createClient } from 'minecraft-protocol'

import { attachForge } from './forge'
import { attachEvents } from './event'

let username = process.argv[2] || 'Mr_jtb'
let password = process.argv[3] || ''
let version = process.argv[4] || '1.12.2'
let readAddress = process.argv[5] || '192.168.2.5:25577'
let realAddress = readAddress.split(":")
let address = realAddress[0]
let port = parseInt(realAddress[1] || "25565")
let client = commandLineCreateClient()

function commandLineCreateClient() {
    return createConnection(address, port, username, password)
}

function createConnection(host: string, port: number, username: string, password: string) {
    let client = createClient({
        version,
        host,
        port,
        username,
        password,
        clientToken: 'd02c7f39-2376-45da-a5a5-50e24fa8b185',
        //@ts-ignore
        authServer: 'https://mcsso.yumc.pw/api/yggdrasil/authserver',
        sessionServer: 'https://mcsso.yumc.pw/api/yggdrasil/sessionserver'
    })

    attachCommon(client)
    attachForge(client)
    attachEvents(client)
    return client
}

function attachCommon(client) {
    client.on('error', (error) => {
        console.log("Client Error", error)
    })
    client.on('end', (resone) => {
        console.log("Client End Resone:", resone)
        if (`${resone}` != "SocketClosed") {
            setTimeout(() => {
                client = commandLineCreateClient()
            }, 500)
        } else {
            process.exit(0)
        }
    })
}

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    completer: (line, func) => {
        let args = line.split(' ')
        let comp = args[args.length - 1]
        client.once('tab_complete', (msg) => {
            let mcts = msg.matches.filter(s => s)
            func(null, [mcts, comp])
        })
        client.write('tab_complete', {
            text: line
        })
    },
    terminal: true,
    prompt: ''
})

rl.on('line', function (line) {
    switch (line) {
        case "":
            break
        case "eval":
            break
        case "write":
            break
        case "/respawn":
            client.write('client_command', { payload: 0 })
            break
        case "//reco":
            client.end("")
            client = commandLineCreateClient()
            break
        case "//quit":
            console.info('Disconnected')
            client.end("")
            break
        case "//end":
            console.info('Forcibly ended client')
            process.exit(0)
        default:
            client.write('chat', { message: line })
    }
    rl.prompt()
})
