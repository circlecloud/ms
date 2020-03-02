import { createInterface } from 'readline'
import { createClient } from 'minecraft-protocol'

import { attachForge } from './forge'
import { attachEvents } from './event'

let username = process.argv[2] || 'Mr_jtb'
let client = createConnection('192.168.2.5', 25577, username)

function createConnection(host: string, port: number, username: string) {
    let client = createClient({
        version: '1.12.2',
        host,
        port,
        username,
        skipValidation: true
    })

    attachForge(client)
    attachEvents(client)
    return client;
}

client.on('error', (error) => {
    console.log("Client Error", error)
})

client.on('end', (resone) => {
    console.log("Client End Resone:", resone)
    client = createConnection('192.168.2.5', 25577, username)
})

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
            break;
        case "eval":
            break;
        case "write":
            break;
        case "/respawn":
            client.write('client_command', { payload: 0 })
            break;
        case "//reco":
            client.end("")
            client = createConnection('192.168.2.5', 25577, username)
            break;
        case "//quit":
            console.info('Disconnected')
            client.end("")
            break;
        case "//end":
            console.info('Forcibly ended client')
            process.exit(0)
        default:
            client.write('chat', { message: line })
    }
    rl.prompt()
})
