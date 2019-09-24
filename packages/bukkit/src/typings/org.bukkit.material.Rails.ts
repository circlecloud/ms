declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Rails extends org.bukkit.material.MaterialData {
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public isOnSlope(): boolean;
                public isCurve(): boolean;
                public getDirection(): org.bukkit.block.BlockFace;
                public toString(): string;
                /**
                 * Return the data without the extended properties used by {@link
                 * PoweredRail} and {@link DetectorRail}. Overridden in {@link
                 * ExtendedRails}
                 */
                protected getConvertedData(): number;
                /**
                 * Set the direction of these tracks
                 * <p>
                 * Note that tracks are bidirectional and that the direction returned is
                 * the ascending direction if the track is set on a slope. If it is set as
                 * a curve, the corner of the track should be supplied.
                 */
                public setDirection(face: org.bukkit.block.BlockFace, isOnSlope: boolean): void;
                public clone(): org.bukkit.material.Rails;
            }
        }
    }
}
