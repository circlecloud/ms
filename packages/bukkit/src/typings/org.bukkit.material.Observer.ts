declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Observer implements org.bukkit.material.Directional, org.bukkit.material.Redstone {
                constructor()
                constructor(direction: org.bukkit.block.BlockFace)
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public isPowered(): boolean;
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public getFacing(): org.bukkit.block.BlockFace;
                public toString(): string;
                public clone(): org.bukkit.material.Observer;
            }
        }
    }
}
