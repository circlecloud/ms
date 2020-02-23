declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace particle {
                // @ts-ignore
                 class GenericParticle extends cn.nukkit.level.particle.Particle {
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, id: number)
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, id: number, data: number)
                    // @ts-ignore
                    protected id: number;
                    // @ts-ignore
                    protected data: number;
                    // @ts-ignore
                    public encode(): cn.nukkit.network.protocol.DataPacket[];
                }
            }
        }
    }
}
