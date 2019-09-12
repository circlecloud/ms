declare namespace org {
    namespace bukkit {
        namespace material {
            class Gate {
                constructor()
                constructor(type: org.bukkit.Material, data: number)
                constructor(data: number)
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public getFacing(): org.bukkit.block.BlockFace;
                public isOpen(): boolean;
                public setOpen(isOpen: boolean): void;
                public toString(): string;
                public clone(): org.bukkit.material.Gate;
            }
        }
    }
}
