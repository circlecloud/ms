declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Gate extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Openable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                constructor(data: number)
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public isOpen(): boolean;
                // @ts-ignore
                public setOpen(isOpen: boolean): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Gate;
            }
        }
    }
}
