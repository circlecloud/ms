declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace particle {
                // @ts-ignore
                 class SpellParticle extends cn.nukkit.level.particle.Particle {
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3)
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, data: number)
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, blockColor: cn.nukkit.utils.BlockColor)
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, r: number, g: number, b: number)
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, r: number, g: number, b: number, a: number)
                    // @ts-ignore
                    protected data: number;
                    // @ts-ignore
                    public encode(): cn.nukkit.network.protocol.DataPacket[];
                }
            }
        }
    }
}
