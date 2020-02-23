declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace particle {
                // @ts-ignore
                 class MobSpawnParticle extends cn.nukkit.level.particle.Particle {
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, width: number, height: number)
                    // @ts-ignore
                    protected width: number;
                    // @ts-ignore
                    protected height: number;
                    // @ts-ignore
                    public encode(): cn.nukkit.network.protocol.DataPacket[];
                }
            }
        }
    }
}
