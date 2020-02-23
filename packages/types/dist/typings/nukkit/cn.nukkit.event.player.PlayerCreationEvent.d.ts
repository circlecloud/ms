declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerCreationEvent extends cn.nukkit.event.Event {
                    // @ts-ignore
                    constructor(interfaz: cn.nukkit.network.SourceInterface, baseClass: java.lang.Class, playerClass: java.lang.Class, clientId: java.lang.Long, address: string, port: number)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getInterface(): cn.nukkit.network.SourceInterface;
                    // @ts-ignore
                    public getAddress(): string;
                    // @ts-ignore
                    public getPort(): number;
                    // @ts-ignore
                    public getClientId(): java.lang.Long;
                    // @ts-ignore
                    public getBaseClass(): java.lang.Class;
                    // @ts-ignore
                    public setBaseClass(baseClass: java.lang.Class): void;
                    // @ts-ignore
                    public getPlayerClass(): java.lang.Class;
                    // @ts-ignore
                    public setPlayerClass(playerClass: java.lang.Class): void;
                }
            }
        }
    }
}
