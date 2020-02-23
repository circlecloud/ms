declare namespace cn {
    namespace nukkit {
        namespace level {
            // @ts-ignore
             class MovingObjectPosition extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public typeOfHit: number;
                // @ts-ignore
                public blockX: number;
                // @ts-ignore
                public blockY: number;
                // @ts-ignore
                public blockZ: number;
                // @ts-ignore
                public sideHit: number;
                // @ts-ignore
                public hitVector: cn.nukkit.math.Vector3;
                // @ts-ignore
                public entityHit: cn.nukkit.entity.Entity;
                // @ts-ignore
                public static fromBlock(x: number, y: number, z: number, side: number, hitVector: cn.nukkit.math.Vector3): cn.nukkit.level.MovingObjectPosition;
                // @ts-ignore
                public static fromEntity(entity: cn.nukkit.entity.Entity): cn.nukkit.level.MovingObjectPosition;
            }
        }
    }
}
