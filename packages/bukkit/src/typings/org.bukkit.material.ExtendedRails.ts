declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class ExtendedRails extends org.bukkit.material.Rails {
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public isCurve(): boolean;
                protected getConvertedData(): number;
                public setDirection(face: org.bukkit.block.BlockFace, isOnSlope: boolean): void;
                public clone(): org.bukkit.material.ExtendedRails;
            }
        }
    }
}
