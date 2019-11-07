// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
             class BlockFace extends java.lang.Enum {
                // @ts-ignore
                public static NORTH: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static EAST: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static SOUTH: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static WEST: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static UP: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static DOWN: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static NORTH_EAST: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static NORTH_WEST: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static SOUTH_EAST: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static SOUTH_WEST: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static WEST_NORTH_WEST: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static NORTH_NORTH_WEST: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static NORTH_NORTH_EAST: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static EAST_NORTH_EAST: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static EAST_SOUTH_EAST: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static SOUTH_SOUTH_EAST: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static SOUTH_SOUTH_WEST: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static WEST_SOUTH_WEST: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static SELF: org.bukkit.block.BlockFace;
                // @ts-ignore
                public static values(): org.bukkit.block.BlockFace[];
                // @ts-ignore
                public static valueOf(name: string): org.bukkit.block.BlockFace;
                /**
                 * Get the amount of X-coordinates to modify to get the represented block
                 */
                // @ts-ignore
                public getModX(): number;
                /**
                 * Get the amount of Y-coordinates to modify to get the represented block
                 */
                // @ts-ignore
                public getModY(): number;
                /**
                 * Get the amount of Z-coordinates to modify to get the represented block
                 */
                // @ts-ignore
                public getModZ(): number;
                /**
                 * Gets the normal vector corresponding to this block face.
                 */
                // @ts-ignore
                public getDirection(): org.bukkit.util.Vector;
                // @ts-ignore
                public getOppositeFace(): org.bukkit.block.BlockFace;
            }
        }
    }
}
