import { $ } from './color'

export function attachEvents(client) {
    client.on('chat', (packet) => {
        // Listen for chat messages and echo them back.
        var jsonMsg = JSON.parse(packet.message)
        console.log($(jsonMsg))
    })
    client.on('state', (newState, oldState) => {
        console.log('Client Change State', oldState, 'to', newState)
        let targetServer = process.argv[6]
        if (newState == "play" && targetServer) {
            setTimeout(() => {
                client.write('chat', {
                    message: '/server ' + targetServer
                })
            }, 3000)
        }
    })
    client.on('update_health', (packet) => {
        if (packet.health <= 0) {
            console.log("Player Dead Auto Respawn...")
            client.write('client_command', { payload: 0 })
        } else if (packet.health > 0) {
        }
    })
    client.on('kick_disconnect', (packet) => {
        console.log($(packet.reason))
    })
    client.on('disconnect', (packet) => {
        console.log($(packet.reason))
    })
}
