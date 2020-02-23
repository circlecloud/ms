declare namespace cn {
    namespace nukkit {
        namespace utils {
            namespace Rail {
                // @ts-ignore
                 class Orientation extends java.lang.Enum {
                    // @ts-ignore
                    public static STRAIGHT_NORTH_SOUTH: cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public static STRAIGHT_EAST_WEST: cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public static ASCENDING_EAST: cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public static ASCENDING_WEST: cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public static ASCENDING_NORTH: cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public static ASCENDING_SOUTH: cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public static CURVED_SOUTH_EAST: cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public static CURVED_SOUTH_WEST: cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public static CURVED_NORTH_WEST: cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public static CURVED_NORTH_EAST: cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public static values(): cn.nukkit.utils.Rail.Orientation[];
                    // @ts-ignore
                    public static valueOf(name: string): cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public static byMetadata(meta: number): cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public static straight(face: cn.nukkit.math.BlockFace): cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public static ascending(face: cn.nukkit.math.BlockFace): cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public static curved(f1: cn.nukkit.math.BlockFace, f2: cn.nukkit.math.BlockFace): cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public static straightOrCurved(f1: cn.nukkit.math.BlockFace, f2: cn.nukkit.math.BlockFace): cn.nukkit.utils.Rail.Orientation;
                    // @ts-ignore
                    public metadata(): number;
                    // @ts-ignore
                    public hasConnectingDirections(faces: cn.nukkit.math.BlockFace): boolean;
                    // @ts-ignore
                    public connectingDirections(): java.util.List;
                    // @ts-ignore
                    public ascendingDirection(): java.util.Optional;
                    // @ts-ignore
                    public isStraight(): boolean;
                    // @ts-ignore
                    public isAscending(): boolean;
                    // @ts-ignore
                    public isCurved(): boolean;
                }
            }
        }
    }
}
