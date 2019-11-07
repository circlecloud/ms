declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Rails extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                public isOnSlope(): boolean;
                // @ts-ignore
                public isCurve(): boolean;
                // @ts-ignore
                public getDirection(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public toString(): string;
                /**
                 * Return the data without the extended properties used by {@link
                 * PoweredRail} and {@link DetectorRail}. Overridden in {@link
                 * ExtendedRails}
                 */
                // @ts-ignore
                protected getConvertedData(): number;
                /**
                 * Set the direction of these tracks
                 * <p>
                 * Note that tracks are bidirectional and that the direction returned is
                 * the ascending direction if the track is set on a slope. If it is set as
                 * a curve, the corner of the track should be supplied.
                 */
                // @ts-ignore
                public setDirection(face: org.bukkit.block.BlockFace, isOnSlope: boolean): void;
                // @ts-ignore
                public clone(): org.bukkit.material.Rails;
            }
        }
    }
}
