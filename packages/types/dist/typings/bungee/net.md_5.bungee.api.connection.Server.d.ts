declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace connection {
                    // @ts-ignore
                    interface Server extends net.md_5.bungee.api.connection.Connection {
                        /**
                         * Returns the basic information about this server.
                         */
                        // @ts-ignore
                         getInfo(): net.md_5.bungee.api.config.ServerInfo;
                        /**
                         * Send data by any available means to this server.
                         * In recent Minecraft versions channel names must contain a colon separator
                         * and consist of [a-z0-9/._-]. This will be enforced in a future version.
                         * The "BungeeCord" channel is an exception and may only take this form.
                         */
                        // @ts-ignore
                         sendData(channel: string, data: number): void;
                    }
                }
            }
        }
    }
}
