import { createInterface } from 'readline'
import { createClient } from 'minecraft-protocol'

import { $ } from './color'
import { attachForge } from './forge'

let client = createClient({
    version: '1.12.2',
    host: '192.168.2.5',
    port: 25577,
    username: process.argv[2] || 'Mr_jtb',
    skipValidation: true
})

attachForge(client)

client.on('chat', (packet) => {
    // Listen for chat messages and echo them back.
    var jsonMsg = JSON.parse(packet.message);
    console.log($(jsonMsg))
})

client.on('state', (newState, oldState) => {
    console.log('Client Change State', oldState, 'to', newState)
    let targetServer = process.argv[3]
    if (newState == "play" && targetServer) {
        setTimeout(() => {
            client.write('chat', {
                message: '/server ' + targetServer
            })
        }, 3000)
    }
})

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

rl.on('line', function(line) {
    if (line === '') {
        return
    } else if (line === '/quit') {
        console.info('Disconnected')
        client.end("")
        return
    } else if (line === '/end') {
        console.info('Forcibly ended client')
        process.exit(0)
    }
    client.write('chat', { message: line })
})
