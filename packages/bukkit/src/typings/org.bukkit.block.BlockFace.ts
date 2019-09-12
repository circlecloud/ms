declare namespace org {
    namespace bukkit {
        namespace block {
            class BlockFace {
                public static NORTH: org.bukkit.block.BlockFace;
                public static EAST: org.bukkit.block.BlockFace;
                public static SOUTH: org.bukkit.block.BlockFace;
                public static WEST: org.bukkit.block.BlockFace;
                public static UP: org.bukkit.block.BlockFace;
                public static DOWN: org.bukkit.block.BlockFace;
                public static NORTH_EAST: org.bukkit.block.BlockFace;
                public static NORTH_WEST: org.bukkit.block.BlockFace;
                public static SOUTH_EAST: org.bukkit.block.BlockFace;
                public static SOUTH_WEST: org.bukkit.block.BlockFace;
                public static WEST_NORTH_WEST: org.bukkit.block.BlockFace;
                public static NORTH_NORTH_WEST: org.bukkit.block.BlockFace;
                public static NORTH_NORTH_EAST: org.bukkit.block.BlockFace;
                public static EAST_NORTH_EAST: org.bukkit.block.BlockFace;
                public static EAST_SOUTH_EAST: org.bukkit.block.BlockFace;
                public static SOUTH_SOUTH_EAST: org.bukkit.block.BlockFace;
                public static SOUTH_SOUTH_WEST: org.bukkit.block.BlockFace;
                public static WEST_SOUTH_WEST: org.bukkit.block.BlockFace;
                public static SELF: org.bukkit.block.BlockFace;
                public static values(): org.bukkit.block.BlockFace[];
                public static valueOf(name: string): org.bukkit.block.BlockFace;
                /**
                 * Get the amount of X-coordinates to modify to get the represented block
                 */
                public getModX(): number;
                /**
                 * Get the amount of Y-coordinates to modify to get the represented block
                 */
                public getModY(): number;
                /**
                 * Get the amount of Z-coordinates to modify to get the represented block
                 */
                public getModZ(): number;
                /**
                 * Gets the normal vector corresponding to this block face.
                 */
                public getDirection(): org.bukkit.util.Vector;
                public getOppositeFace(): org.bukkit.block.BlockFace;
            }
        }
    }
}
