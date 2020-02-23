declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace query {
                // @ts-ignore
                 class QueryHandler extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static HANDSHAKE: number;
                    // @ts-ignore
                    public static STATISTICS: number;
                    // @ts-ignore
                    public regenerateInfo(): void;
                    // @ts-ignore
                    public regenerateToken(): void;
                    // @ts-ignore
                    public static getTokenString(token: number, salt: string): string;
                    // @ts-ignore
                    public static getTokenString(token: string, salt: string): string;
                    // @ts-ignore
                    public handle(address: string, port: number, packet: number): void;
                }
            }
        }
    }
}
