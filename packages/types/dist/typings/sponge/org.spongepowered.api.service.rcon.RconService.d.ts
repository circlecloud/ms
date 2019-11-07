// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace rcon {
                    // @ts-ignore
                    interface RconService {
                        /**
                         * Tests whether Rcon is enabled for this service.
                         * <p>Rcon allows commands to be remotely run on the server, after Rcon
                         * client have authenticated with a password.</p>
                         */
                        // @ts-ignore
                         isRconEnabled(): boolean;
                        /**
                         * Gets the Rcon password for this service.
                         * <p>This password is used by Rcon clients to authenticate.</p>
                         */
                        // @ts-ignore
                         getRconPassword(): string;
                    }
                }
            }
        }
    }
}
