declare namespace cn {
    namespace nukkit {
        namespace math {
            // @ts-ignore
             class BlockFace extends java.lang.Enum {
                // @ts-ignore
                public static DOWN: cn.nukkit.math.BlockFace;
                // @ts-ignore
                public static UP: cn.nukkit.math.BlockFace;
                // @ts-ignore
                public static NORTH: cn.nukkit.math.BlockFace;
                // @ts-ignore
                public static SOUTH: cn.nukkit.math.BlockFace;
                // @ts-ignore
                public static WEST: cn.nukkit.math.BlockFace;
                // @ts-ignore
                public static EAST: cn.nukkit.math.BlockFace;
                // @ts-ignore
                public static values(): cn.nukkit.math.BlockFace[];
                // @ts-ignore
                public static valueOf(name: string): cn.nukkit.math.BlockFace;
                /**
                 * Get a BlockFace by it's index (0-5). The order is D-U-N-S-W-E
                 */
                // @ts-ignore
                public static fromIndex(index: number): cn.nukkit.math.BlockFace;
                /**
                 * Get a BlockFace by it's horizontal index (0-3). The order is S-W-N-E
                 */
                // @ts-ignore
                public static fromHorizontalIndex(index: number): cn.nukkit.math.BlockFace;
                /**
                 * Get the BlockFace corresponding to the given angle (0-360). An angle of 0 is SOUTH, an angle of 90 would be WEST
                 */
                // @ts-ignore
                public static fromHorizontalAngle(angle: number): cn.nukkit.math.BlockFace;
                // @ts-ignore
                public static fromAxis(axisDirection: cn.nukkit.math.BlockFace.AxisDirection, axis: cn.nukkit.math.BlockFace.Axis): cn.nukkit.math.BlockFace;
                /**
                 * Choose a random BlockFace using the given Random
                 */
                // @ts-ignore
                public static random(rand: java.util.Random): cn.nukkit.math.BlockFace;
                /**
                 * Get the index of this BlockFace (0-5). The order is D-U-N-S-W-E
                 */
                // @ts-ignore
                public getIndex(): number;
                /**
                 * Get the horizontal index of this BlockFace (0-3). The order is S-W-N-E
                 */
                // @ts-ignore
                public getHorizontalIndex(): number;
                /**
                 * Get the angle of this BlockFace (0-360)
                 */
                // @ts-ignore
                public getHorizontalAngle(): number;
                /**
                 * Get the name of this BlockFace (up, down, north, etc.)
                 */
                // @ts-ignore
                public getName(): string;
                /**
                 * Get the Axis of this BlockFace
                 */
                // @ts-ignore
                public getAxis(): cn.nukkit.math.BlockFace.Axis;
                /**
                 * Get the AxisDirection of this BlockFace
                 */
                // @ts-ignore
                public getAxisDirection(): cn.nukkit.math.BlockFace.AxisDirection;
                /**
                 * Get the unit vector of this BlockFace
                 */
                // @ts-ignore
                public getUnitVector(): cn.nukkit.math.Vector3;
                /**
                 * Returns an offset that addresses the block in front of this BlockFace
                 */
                // @ts-ignore
                public getXOffset(): number;
                /**
                 * Returns an offset that addresses the block in front of this BlockFace
                 */
                // @ts-ignore
                public getYOffset(): number;
                /**
                 * Returns an offset that addresses the block in front of this BlockFace
                 */
                // @ts-ignore
                public getZOffset(): number;
                /**
                 * Get the opposite BlockFace (e.g. DOWN ==&gt; UP)
                 */
                // @ts-ignore
                public getOpposite(): cn.nukkit.math.BlockFace;
                /**
                 * Rotate this BlockFace around the Y axis clockwise (NORTH =&gt; EAST =&gt; SOUTH =&gt; WEST =&gt; NORTH)
                 */
                // @ts-ignore
                public rotateY(): cn.nukkit.math.BlockFace;
                /**
                 * Rotate this BlockFace around the Y axis counter-clockwise (NORTH =&gt; WEST =&gt; SOUTH =&gt; EAST =&gt; NORTH)
                 */
                // @ts-ignore
                public rotateYCCW(): cn.nukkit.math.BlockFace;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
