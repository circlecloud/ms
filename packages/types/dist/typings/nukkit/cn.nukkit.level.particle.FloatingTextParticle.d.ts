declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace particle {
                // @ts-ignore
                 class FloatingTextParticle extends cn.nukkit.level.particle.Particle {
                    // @ts-ignore
                    constructor(location: cn.nukkit.level.Location, title: string)
                    // @ts-ignore
                    constructor(location: cn.nukkit.level.Location, title: string, text: string)
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, title: string)
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, title: string, text: string)
                    // @ts-ignore
                    protected uuid: java.util.UUID;
                    // @ts-ignore
                    protected level: cn.nukkit.level.Level;
                    // @ts-ignore
                    protected entityId: number;
                    // @ts-ignore
                    protected invisible: boolean;
                    // @ts-ignore
                    protected metadata: cn.nukkit.entity.data.EntityMetadata;
                    // @ts-ignore
                    public getText(): string;
                    // @ts-ignore
                    public setText(text: string): void;
                    // @ts-ignore
                    public getTitle(): string;
                    // @ts-ignore
                    public setTitle(title: string): void;
                    // @ts-ignore
                    public isInvisible(): boolean;
                    // @ts-ignore
                    public setInvisible(invisible: boolean): void;
                    // @ts-ignore
                    public setInvisible(): void;
                    // @ts-ignore
                    public getEntityId(): number;
                    // @ts-ignore
                    public encode(): cn.nukkit.network.protocol.DataPacket[];
                }
            }
        }
    }
}
