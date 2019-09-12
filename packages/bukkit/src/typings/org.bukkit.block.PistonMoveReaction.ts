declare namespace org {
    namespace bukkit {
        namespace block {
            class PistonMoveReaction {
                public static MOVE: org.bukkit.block.PistonMoveReaction;
                public static BREAK: org.bukkit.block.PistonMoveReaction;
                public static BLOCK: org.bukkit.block.PistonMoveReaction;
                public static IGNORE: org.bukkit.block.PistonMoveReaction;
                public static PUSH_ONLY: org.bukkit.block.PistonMoveReaction;
                public static values(): org.bukkit.block.PistonMoveReaction[];
                public static valueOf(name: string): org.bukkit.block.PistonMoveReaction;
                public getId(): number;
                public static getById(id: number): org.bukkit.block.PistonMoveReaction;
            }
        }
    }
}
