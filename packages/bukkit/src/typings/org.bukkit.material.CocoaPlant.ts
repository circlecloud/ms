declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class CocoaPlant implements org.bukkit.material.Directional, org.bukkit.material.Attachable {
                constructor()
                constructor(type: org.bukkit.Material, data: number)
                constructor(sz: org.bukkit.material.CocoaPlant.CocoaPlantSize)
                constructor(sz: org.bukkit.material.CocoaPlant.CocoaPlantSize, dir: org.bukkit.block.BlockFace)
                /**
                 * Get size of plant
                 */
                public getSize(): org.bukkit.material.CocoaPlant.CocoaPlantSize;
                /**
                 * Set size of plant
                 */
                public setSize(sz: org.bukkit.material.CocoaPlant.CocoaPlantSize): void;
                public getAttachedFace(): org.bukkit.block.BlockFace;
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public getFacing(): org.bukkit.block.BlockFace;
                public clone(): org.bukkit.material.CocoaPlant;
                public toString(): string;
            }
        }
    }
}
