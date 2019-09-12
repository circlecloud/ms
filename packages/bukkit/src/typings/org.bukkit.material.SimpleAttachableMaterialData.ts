declare namespace org {
    namespace bukkit {
        namespace material {
            abstract class SimpleAttachableMaterialData {
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
