declare namespace org {
    namespace bukkit {
        namespace block {
            class Structure {
                /**
                 * The name of this structure.
                 */
                public getStructureName(): string;
                /**
                 * Set the name of this structure. This is case-sensitive. The name of the
                 * structure in the {@link UsageMode#SAVE} structure block MUST match the
                 * name within the {@link UsageMode#CORNER} block or the size calculation
                 * will fail.
                 */
                public setStructureName(name: string): void;
                /**
                 * Get the name of who created this structure.
                 */
                public getAuthor(): string;
                /**
                 * Set the name of whoever created this structure.
                 */
                public setAuthor(author: string): void;
                /**
                 * Set the name of whoever created this structure using a
                 * {@link LivingEntity}.
                 */
                public setAuthor(livingEntity: org.bukkit.entity.LivingEntity): void;
                /**
                 * The relative position of the structure outline based on the position of
                 * the structure block. Maximum allowed distance is 32 blocks in any
                 * direction.
                 */
                public getRelativePosition(): org.bukkit.util.BlockVector;
                /**
                 * Set the relative position from the structure block. Maximum allowed
                 * distance is 32 blocks in any direction.
                 */
                public setRelativePosition(vector: org.bukkit.util.BlockVector): void;
                /**
                 * The distance to the opposite corner of this structure. The maximum
                 * structure size is 32x32x32. When a structure has successfully been
                 * calculated (i.e. it is within the maximum allowed distance) a white
                 * border surrounds the structure.
                 */
                public getStructureSize(): org.bukkit.util.BlockVector;
                /**
                 * Set the maximum size of this structure from the origin point. Maximum
                 * allowed size is 32x32x32.
                 */
                public setStructureSize(vector: org.bukkit.util.BlockVector): void;
                /**
                 * Sets the mirroring of the structure.
                 */
                public setMirror(mirror: org.bukkit.block.structure.Mirror): void;
                /**
                 * How this structure is mirrored.
                 */
                public getMirror(): org.bukkit.block.structure.Mirror;
                /**
                 * Set how this structure is rotated.
                 */
                public setRotation(rotation: org.bukkit.block.structure.StructureRotation): void;
                /**
                 * Get how this structure is rotated.
                 */
                public getRotation(): org.bukkit.block.structure.StructureRotation;
                /**
                 * Set the {@link UsageMode} of this structure block.
                 */
                public setUsageMode(mode: org.bukkit.block.structure.UsageMode): void;
                /**
                 * Get the {@link UsageMode} of this structure block.
                 */
                public getUsageMode(): org.bukkit.block.structure.UsageMode;
                /**
                 * While in {@link UsageMode#SAVE} mode, this will ignore any entities when
                 * saving the structure.
                 * <br>
                 * While in {@link UsageMode#LOAD} mode this will ignore any entities that
                 * were saved to file.
                 */
                public setIgnoreEntities(ignoreEntities: boolean): void;
                /**
                 * Get if this structure block should ignore entities.
                 */
                public isIgnoreEntities(): boolean;
                /**
                 * Set if the structure outline should show air blocks.
                 */
                public setShowAir(showAir: boolean): void;
                /**
                 * Check if this structure block is currently showing all air blocks
                 */
                public isShowAir(): boolean;
                /**
                 * Set if this structure box should show the bounding box.
                 */
                public setBoundingBoxVisible(showBoundingBox: boolean): void;
                /**
                 * Get if this structure block is currently showing the bounding box.
                 */
                public isBoundingBoxVisible(): boolean;
                /**
                 * Set the integrity of the structure. Integrity must be between 0.0 and 1.0
                 * Lower integrity values will result in more blocks being removed when
                 * loading a structure. Integrity and {@link #getSeed()} are used together
                 * to determine which blocks are randomly removed to mimic "decay."
                 */
                public setIntegrity(integrity: number): void;
                /**
                 * Get the integrity of this structure.
                 */
                public getIntegrity(): number;
                /**
                 * The seed used to determine which blocks will be removed upon loading.
                 * {@link #getIntegrity()} and seed are used together to determine which
                 * blocks are randomly removed to mimic "decay."
                 */
                public setSeed(seed: number): void;
                /**
                 * The seed used to determine how many blocks are removed upon loading of
                 * this structure.
                 */
                public getSeed(): number;
                /**
                 * Only applicable while in {@link UsageMode#DATA}. Metadata are specific
                 * functions that can be applied to the structure location. Consult the
                 * <a href="https://minecraft.gamepedia.com/Structure_Block#Data">Minecraft
                 * wiki</a> for more information.
                 */
                public setMetadata(metadata: string): void;
                /**
                 * Get the metadata function this structure block will perform when
                 * activated. Consult the
                 * <a href="https://minecraft.gamepedia.com/Structure_Block#Data">Minecraft
                 * Wiki</a> for more information.
                 */
                public getMetadata(): string;
            }
        }
    }
}
