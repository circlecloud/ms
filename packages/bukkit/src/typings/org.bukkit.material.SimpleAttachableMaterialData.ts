declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
            abstract class SimpleAttachableMaterialData extends org.bukkit.material.MaterialData implements org.bukkit.material.Attachable {
                constructor(type: org.bukkit.Material, direction: org.bukkit.block.BlockFace)
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public getFacing(): org.bukkit.block.BlockFace;
                public toString(): string;
                public clone(): org.bukkit.material.SimpleAttachableMaterialData;
            }
        }
    }
}
