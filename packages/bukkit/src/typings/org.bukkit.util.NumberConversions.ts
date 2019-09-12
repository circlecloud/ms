declare namespace org {
    namespace bukkit {
        namespace util {
            class NumberConversions {
                public static floor(num: number): number;
                public static ceil(num: number): number;
                public static round(num: number): number;
                public static square(num: number): number;
                public static toInt(object: any): number;
                public static toFloat(object: any): number;
                public static toDouble(object: any): number;
                public static toLong(object: any): number;
                public static toShort(object: any): number;
                public static toByte(object: any): number;
                public static isFinite(d: number): boolean;
                public static isFinite(f: number): boolean;
                public static checkFinite(d: number, message: string): void;
                public static checkFinite(d: number, message: string): void;
            }
        }
    }
}
