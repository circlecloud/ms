declare namespace cn {
    namespace nukkit {
        namespace network {
            // @ts-ignore
            interface AdvancedSourceInterface extends cn.nukkit.network.SourceInterface {
                // @ts-ignore
                 blockAddress(address: string): void;
                // @ts-ignore
                 blockAddress(address: string, timeout: number): void;
                // @ts-ignore
                 unblockAddress(address: string): void;
                // @ts-ignore
                 setNetwork(network: cn.nukkit.network.Network): void;
                // @ts-ignore
                 sendRawPacket(address: string, port: number, payload: number): void;
            }
        }
    }
}
