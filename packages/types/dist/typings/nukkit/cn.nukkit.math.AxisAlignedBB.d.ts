declare namespace cn {
    namespace nukkit {
        namespace math {
            // @ts-ignore
            interface AxisAlignedBB {
                // @ts-ignore
                 setBounds(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                 addCoord(x: number, y: number, z: number): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                 grow(x: number, y: number, z: number): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                 expand(x: number, y: number, z: number): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                 offset(x: number, y: number, z: number): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                 shrink(x: number, y: number, z: number): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                 contract(x: number, y: number, z: number): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                 setBB(bb: cn.nukkit.math.AxisAlignedBB): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                 getOffsetBoundingBox(x: number, y: number, z: number): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                 calculateXOffset(bb: cn.nukkit.math.AxisAlignedBB, x: number): number;
                // @ts-ignore
                 calculateYOffset(bb: cn.nukkit.math.AxisAlignedBB, y: number): number;
                // @ts-ignore
                 calculateZOffset(bb: cn.nukkit.math.AxisAlignedBB, z: number): number;
                // @ts-ignore
                 intersectsWith(bb: cn.nukkit.math.AxisAlignedBB): boolean;
                // @ts-ignore
                 isVectorInside(vector: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                 getAverageEdgeLength(): number;
                // @ts-ignore
                 isVectorInYZ(vector: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                 isVectorInXZ(vector: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                 isVectorInXY(vector: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                 calculateIntercept(pos1: cn.nukkit.math.Vector3, pos2: cn.nukkit.math.Vector3): cn.nukkit.level.MovingObjectPosition;
                // @ts-ignore
                 setMinX(minX: number): void;
                // @ts-ignore
                 setMinY(minY: number): void;
                // @ts-ignore
                 setMinZ(minZ: number): void;
                // @ts-ignore
                 setMaxX(maxX: number): void;
                // @ts-ignore
                 setMaxY(maxY: number): void;
                // @ts-ignore
                 setMaxZ(maxZ: number): void;
                // @ts-ignore
                 getMinX(): number;
                // @ts-ignore
                 getMinY(): number;
                // @ts-ignore
                 getMinZ(): number;
                // @ts-ignore
                 getMaxX(): number;
                // @ts-ignore
                 getMaxY(): number;
                // @ts-ignore
                 getMaxZ(): number;
                // @ts-ignore
                 clone(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                 forEach(action: cn.nukkit.math.AxisAlignedBB.BBConsumer): void;
            }
        }
    }
}
