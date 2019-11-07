// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class CocoaPlant extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Attachable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                constructor(sz: org.bukkit.material.CocoaPlant.CocoaPlantSize)
                // @ts-ignore
                constructor(sz: org.bukkit.material.CocoaPlant.CocoaPlantSize, dir: org.bukkit.block.BlockFace)
                /**
                 * Get size of plant
                 */
                // @ts-ignore
                public getSize(): org.bukkit.material.CocoaPlant.CocoaPlantSize;
                /**
                 * Set size of plant
                 */
                // @ts-ignore
                public setSize(sz: org.bukkit.material.CocoaPlant.CocoaPlantSize): void;
                // @ts-ignore
                public getAttachedFace(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public clone(): org.bukkit.material.CocoaPlant;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
