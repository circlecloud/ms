declare namespace cn {
    namespace nukkit {
        namespace math {
            // @ts-ignore
             class Vector3f extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(x: number)
                // @ts-ignore
                constructor(x: number, y: number)
                // @ts-ignore
                constructor(x: number, y: number, z: number)
                // @ts-ignore
                public static SIDE_DOWN: number;
                // @ts-ignore
                public static SIDE_UP: number;
                // @ts-ignore
                public static SIDE_NORTH: number;
                // @ts-ignore
                public static SIDE_SOUTH: number;
                // @ts-ignore
                public static SIDE_WEST: number;
                // @ts-ignore
                public static SIDE_EAST: number;
                // @ts-ignore
                public x: number;
                // @ts-ignore
                public y: number;
                // @ts-ignore
                public z: number;
                // @ts-ignore
                public getX(): number;
                // @ts-ignore
                public getY(): number;
                // @ts-ignore
                public getZ(): number;
                // @ts-ignore
                public getFloorX(): number;
                // @ts-ignore
                public getFloorY(): number;
                // @ts-ignore
                public getFloorZ(): number;
                // @ts-ignore
                public getRight(): number;
                // @ts-ignore
                public getUp(): number;
                // @ts-ignore
                public getForward(): number;
                // @ts-ignore
                public getSouth(): number;
                // @ts-ignore
                public getWest(): number;
                // @ts-ignore
                public add(x: number): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public add(x: number, y: number): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public add(x: number, y: number, z: number): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public add(x: cn.nukkit.math.Vector3f): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public subtract(): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public subtract(x: number): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public subtract(x: number, y: number): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public subtract(x: number, y: number, z: number): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public subtract(x: cn.nukkit.math.Vector3f): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public multiply(number: number): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public divide(number: number): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public ceil(): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public floor(): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public round(): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public abs(): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public getSide(side: number): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public getSide(side: number, step: number): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public static getOppositeSide(side: number): number;
                // @ts-ignore
                public distance(pos: cn.nukkit.math.Vector3f): number;
                // @ts-ignore
                public distanceSquared(pos: cn.nukkit.math.Vector3f): number;
                // @ts-ignore
                public maxPlainDistance(): number;
                // @ts-ignore
                public maxPlainDistance(x: number): number;
                // @ts-ignore
                public maxPlainDistance(x: number, z: number): number;
                // @ts-ignore
                public maxPlainDistance(vector: cn.nukkit.math.Vector2f): number;
                // @ts-ignore
                public maxPlainDistance(x: cn.nukkit.math.Vector3f): number;
                // @ts-ignore
                public length(): number;
                // @ts-ignore
                public lengthSquared(): number;
                // @ts-ignore
                public normalize(): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public dot(v: cn.nukkit.math.Vector3f): number;
                // @ts-ignore
                public cross(v: cn.nukkit.math.Vector3f): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public getIntermediateWithXValue(v: cn.nukkit.math.Vector3f, x: number): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public getIntermediateWithYValue(v: cn.nukkit.math.Vector3f, y: number): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public getIntermediateWithZValue(v: cn.nukkit.math.Vector3f, z: number): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public setComponents(x: number, y: number, z: number): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                // @ts-ignore
                public rawHashCode(): number;
                // @ts-ignore
                public clone(): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public asVector3(): cn.nukkit.math.Vector3;
                // @ts-ignore
                public asBlockVector3(): cn.nukkit.math.BlockVector3;
            }
        }
    }
}
