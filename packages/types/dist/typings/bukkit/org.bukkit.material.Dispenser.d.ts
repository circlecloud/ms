// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Dispenser extends org.bukkit.material.FurnaceAndDispenser {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(direction: org.bukkit.block.BlockFace)
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public clone(): org.bukkit.material.Dispenser;
            }
        }
    }
}
