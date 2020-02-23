declare namespace cn {
    namespace nukkit {
        namespace math {
            // @ts-ignore
             class Vector2 extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(x: number)
                // @ts-ignore
                constructor(x: number, y: number)
                // @ts-ignore
                public x: number;
                // @ts-ignore
                public y: number;
                // @ts-ignore
                public getX(): number;
                // @ts-ignore
                public getY(): number;
                // @ts-ignore
                public getFloorX(): number;
                // @ts-ignore
                public getFloorY(): number;
                // @ts-ignore
                public add(x: number): cn.nukkit.math.Vector2;
                // @ts-ignore
                public add(x: number, y: number): cn.nukkit.math.Vector2;
                // @ts-ignore
                public add(x: cn.nukkit.math.Vector2): cn.nukkit.math.Vector2;
                // @ts-ignore
                public subtract(x: number): cn.nukkit.math.Vector2;
                // @ts-ignore
                public subtract(x: number, y: number): cn.nukkit.math.Vector2;
                // @ts-ignore
                public subtract(x: cn.nukkit.math.Vector2): cn.nukkit.math.Vector2;
                // @ts-ignore
                public ceil(): cn.nukkit.math.Vector2;
                // @ts-ignore
                public floor(): cn.nukkit.math.Vector2;
                // @ts-ignore
                public round(): cn.nukkit.math.Vector2;
                // @ts-ignore
                public abs(): cn.nukkit.math.Vector2;
                // @ts-ignore
                public multiply(number: number): cn.nukkit.math.Vector2;
                // @ts-ignore
                public divide(number: number): cn.nukkit.math.Vector2;
                // @ts-ignore
                public distance(x: number): number;
                // @ts-ignore
                public distance(x: number, y: number): number;
                // @ts-ignore
                public distance(vector: cn.nukkit.math.Vector2): number;
                // @ts-ignore
                public distanceSquared(x: number): number;
                // @ts-ignore
                public distanceSquared(x: number, y: number): number;
                // @ts-ignore
                public distanceSquared(vector: cn.nukkit.math.Vector2): number;
                // @ts-ignore
                public length(): number;
                // @ts-ignore
                public lengthSquared(): number;
                // @ts-ignore
                public normalize(): cn.nukkit.math.Vector2;
                // @ts-ignore
                public dot(v: cn.nukkit.math.Vector2): number;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
