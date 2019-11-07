// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
            abstract class SimpleAttachableMaterialData extends org.bukkit.material.MaterialData implements org.bukkit.material.Attachable {
                // @ts-ignore
                constructor(type: org.bukkit.Material, direction: org.bukkit.block.BlockFace)
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.SimpleAttachableMaterialData;
            }
        }
    }
}
