declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace particle {
                // @ts-ignore
                 class DestroyBlockParticle extends cn.nukkit.level.particle.Particle {
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block)
                    // @ts-ignore
                    protected data: number;
                    // @ts-ignore
                    public encode(): cn.nukkit.network.protocol.DataPacket[];
                }
            }
        }
    }
}
