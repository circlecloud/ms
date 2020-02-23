declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class Utils extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static writeFile(fileName: string, content: string): void;
                // @ts-ignore
                public static writeFile(fileName: string, content: java.io.InputStream): void;
                // @ts-ignore
                public static writeFile(file: java.io.File, content: string): void;
                // @ts-ignore
                public static writeFile(file: java.io.File, content: java.io.InputStream): void;
                // @ts-ignore
                public static readFile(file: java.io.File): string;
                // @ts-ignore
                public static readFile(filename: string): string;
                // @ts-ignore
                public static readFile(inputStream: java.io.InputStream): string;
                // @ts-ignore
                public static copyFile(from: java.io.File, to: java.io.File): void;
                // @ts-ignore
                public static getAllThreadDumps(): string;
                // @ts-ignore
                public static getExceptionMessage(e: java.lang.Throwable): string;
                // @ts-ignore
                public static dataToUUID(params: string): java.util.UUID;
                // @ts-ignore
                public static dataToUUID(params: number): java.util.UUID;
                // @ts-ignore
                public static rtrim(s: string, character: string): string;
                // @ts-ignore
                public static isByteArrayEmpty(array: number): boolean;
                // @ts-ignore
                public static toRGB(r: number, g: number, b: number, a: number): number;
                // @ts-ignore
                public static toABGR(argb: number): number;
                // @ts-ignore
                public static splitArray(arrayToSplit: java.lang.Object, chunkSize: number): java.lang.Object[][];
                // @ts-ignore
                public static reverseArray(data: java.lang.Object): void;
                // @ts-ignore
                public static reverseArray(array: java.lang.Object, copy: boolean): java.lang.Object[];
                // @ts-ignore
                public static clone2dArray(array: java.lang.Object): java.lang.Object[][];
                // @ts-ignore
                public static getOrCreate(map: java.util.Map, key: java.lang.Object): java.util.Map;
                // @ts-ignore
                public static getOrCreate(map: java.util.Map, clazz: java.lang.Class, key: java.lang.Object): java.lang.Object;
                // @ts-ignore
                public static toInt(number: java.lang.Object): number;
                // @ts-ignore
                public static parseHexBinary(s: string): number[];
            }
        }
    }
}
