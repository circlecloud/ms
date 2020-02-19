export function attachForge(client) {
    client.on('custom_payload', function(packet) {
        if (packet.channel === 'FML|HS') {
            client.write('custom_payload', {
                channel: 'FML|HS',
                data: Buffer.of(0x01, 0x02)
            });
            client.write('custom_payload', {
                channel: 'FML|HS',
                data: Buffer.of(0x02, 0x00)
            });
        }
    });
}