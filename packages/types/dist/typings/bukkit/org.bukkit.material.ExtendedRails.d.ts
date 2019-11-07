// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class ExtendedRails extends org.bukkit.material.Rails {
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                public isCurve(): boolean;
                // @ts-ignore
                protected getConvertedData(): number;
                // @ts-ignore
                public setDirection(face: org.bukkit.block.BlockFace, isOnSlope: boolean): void;
                // @ts-ignore
                public clone(): org.bukkit.material.ExtendedRails;
            }
        }
    }
}
