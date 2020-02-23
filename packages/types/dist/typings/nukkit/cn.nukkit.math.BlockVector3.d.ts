declare namespace cn {
    namespace nukkit {
        namespace math {
            // @ts-ignore
             class BlockVector3 extends java.lang.Object {
                // @ts-ignore
                constructor(x: number, y: number, z: number)
                // @ts-ignore
                constructor()
                // @ts-ignore
                public x: number;
                // @ts-ignore
                public y: number;
                // @ts-ignore
                public z: number;
                // @ts-ignore
                public setComponents(x: number, y: number, z: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public getX(): number;
                // @ts-ignore
                public getY(): number;
                // @ts-ignore
                public getZ(): number;
                // @ts-ignore
                public add(x: number): cn.nukkit.math.Vector3;
                // @ts-ignore
                public add(x: number, y: number): cn.nukkit.math.Vector3;
                // @ts-ignore
                public add(x: number, y: number, z: number): cn.nukkit.math.Vector3;
                // @ts-ignore
                public add(x: cn.nukkit.math.Vector3): cn.nukkit.math.Vector3;
                // @ts-ignore
                public subtract(x: number): cn.nukkit.math.Vector3;
                // @ts-ignore
                public subtract(x: number, y: number): cn.nukkit.math.Vector3;
                // @ts-ignore
                public subtract(x: number, y: number, z: number): cn.nukkit.math.Vector3;
                // @ts-ignore
                public subtract(x: cn.nukkit.math.Vector3): cn.nukkit.math.Vector3;
                // @ts-ignore
                public add(x: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public add(x: number, y: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public add(x: number, y: number, z: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public add(x: cn.nukkit.math.BlockVector3): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public subtract(): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public subtract(x: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public subtract(x: number, y: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public subtract(x: number, y: number, z: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public subtract(x: cn.nukkit.math.BlockVector3): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public multiply(number: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public divide(number: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public getSide(face: cn.nukkit.math.BlockFace): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public getSide(face: cn.nukkit.math.BlockFace, step: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public up(): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public up(step: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public down(): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public down(step: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public north(): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public north(step: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public south(): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public south(step: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public east(): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public east(step: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public west(): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public west(step: number): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public distance(pos: cn.nukkit.math.Vector3): number;
                // @ts-ignore
                public distance(pos: cn.nukkit.math.BlockVector3): number;
                // @ts-ignore
                public distanceSquared(pos: cn.nukkit.math.Vector3): number;
                // @ts-ignore
                public distanceSquared(pos: cn.nukkit.math.BlockVector3): number;
                // @ts-ignore
                public distanceSquared(x: number, y: number, z: number): number;
                // @ts-ignore
                public equals(o: java.lang.Object): boolean;
                // @ts-ignore
                public hashCode(): number;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public asVector3(): cn.nukkit.math.Vector3;
                // @ts-ignore
                public asVector3f(): cn.nukkit.math.Vector3f;
            }
        }
    }
}
