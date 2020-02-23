declare namespace cn {
    namespace nukkit {
        namespace level {
            // @ts-ignore
             class Location extends cn.nukkit.level.Position {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(x: number)
                // @ts-ignore
                constructor(x: number, y: number)
                // @ts-ignore
                constructor(x: number, y: number, z: number, level: cn.nukkit.level.Level)
                // @ts-ignore
                constructor(x: number, y: number, z: number)
                // @ts-ignore
                constructor(x: number, y: number, z: number, yaw: number)
                // @ts-ignore
                constructor(x: number, y: number, z: number, yaw: number, pitch: number)
                // @ts-ignore
                constructor(x: number, y: number, z: number, yaw: number, pitch: number, level: cn.nukkit.level.Level)
                // @ts-ignore
                public yaw: number;
                // @ts-ignore
                public pitch: number;
                // @ts-ignore
                public static fromObject(pos: cn.nukkit.math.Vector3): cn.nukkit.level.Location;
                // @ts-ignore
                public static fromObject(pos: cn.nukkit.math.Vector3, level: cn.nukkit.level.Level): cn.nukkit.level.Location;
                // @ts-ignore
                public static fromObject(pos: cn.nukkit.math.Vector3, level: cn.nukkit.level.Level, yaw: number): cn.nukkit.level.Location;
                // @ts-ignore
                public static fromObject(pos: cn.nukkit.math.Vector3, level: cn.nukkit.level.Level, yaw: number, pitch: number): cn.nukkit.level.Location;
                // @ts-ignore
                public getYaw(): number;
                // @ts-ignore
                public getPitch(): number;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public getLocation(): cn.nukkit.level.Location;
                // @ts-ignore
                public add(x: number): cn.nukkit.level.Location;
                // @ts-ignore
                public add(x: number, y: number): cn.nukkit.level.Location;
                // @ts-ignore
                public add(x: number, y: number, z: number): cn.nukkit.level.Location;
                // @ts-ignore
                public add(x: cn.nukkit.math.Vector3): cn.nukkit.level.Location;
                // @ts-ignore
                public subtract(): cn.nukkit.level.Location;
                // @ts-ignore
                public subtract(x: number): cn.nukkit.level.Location;
                // @ts-ignore
                public subtract(x: number, y: number): cn.nukkit.level.Location;
                // @ts-ignore
                public subtract(x: number, y: number, z: number): cn.nukkit.level.Location;
                // @ts-ignore
                public subtract(x: cn.nukkit.math.Vector3): cn.nukkit.level.Location;
                // @ts-ignore
                public multiply(number: number): cn.nukkit.level.Location;
                // @ts-ignore
                public divide(number: number): cn.nukkit.level.Location;
                // @ts-ignore
                public ceil(): cn.nukkit.level.Location;
                // @ts-ignore
                public floor(): cn.nukkit.level.Location;
                // @ts-ignore
                public round(): cn.nukkit.level.Location;
                // @ts-ignore
                public abs(): cn.nukkit.level.Location;
                // @ts-ignore
                public getDirectionVector(): cn.nukkit.math.Vector3;
                // @ts-ignore
                public clone(): cn.nukkit.level.Location;
            }
        }
    }
}
