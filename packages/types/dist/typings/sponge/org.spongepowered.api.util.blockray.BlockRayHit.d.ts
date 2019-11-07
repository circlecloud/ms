declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace blockray {
                    // @ts-ignore
                     class BlockRayHit extends java.lang.Object {
                        /**
                         * Constructs a new block ray hit from the extent that contains it, the
                         * coordinates and the face that was entered.
                         */
                        // @ts-ignore
                        constructor(extent: org.spongepowered.api.world.extent.Extent, x: number, y: number, z: number, direction: any /*Vector3d*/, normal: any /*Vector3d*/)
                        /**
                         * Returns the extent that contains the block.
                         */
                        // @ts-ignore
                        public getExtent(): org.spongepowered.api.world.extent.Extent;
                        /**
                         * Returns the x coordinate of the intersection.
                         */
                        // @ts-ignore
                        public getX(): number;
                        /**
                         * Returns the y coordinate of the intersection.
                         */
                        // @ts-ignore
                        public getY(): number;
                        /**
                         * Returns the z coordinate of the intersection.
                         */
                        // @ts-ignore
                        public getZ(): number;
                        /**
                         * Returns the position of the intersection.
                         */
                        // @ts-ignore
                        public getPosition(): any /*Vector3d*/;
                        /**
                         * Returns the x coordinate of the block that was hit.
                         */
                        // @ts-ignore
                        public getBlockX(): number;
                        /**
                         * Returns the y coordinate of the block that was hit.
                         */
                        // @ts-ignore
                        public getBlockY(): number;
                        /**
                         * Returns the z coordinate of the block that was hit.
                         */
                        // @ts-ignore
                        public getBlockZ(): number;
                        /**
                         * Returns the position of the block that was hit.
                         */
                        // @ts-ignore
                        public getBlockPosition(): any /*Vector3i*/;
                        /**
                         * Returns the location of the hit block, <b>not the intersection
                         * location</b>.
                         */
                        // @ts-ignore
                        public getLocation(): org.spongepowered.api.world.Location;
                        /**
                         * Returns the direction of the ray as a normalized vector.
                         */
                        // @ts-ignore
                        public getDirection(): any /*Vector3d*/;
                        /**
                         * Returns the normal of the entered face, edge or corner.
                         * Edges and corners use the average of the surrounding faces.
                         */
                        // @ts-ignore
                        public getNormal(): any /*Vector3d*/;
                        /**
                         * Returns all the intersected faces. In most cases, this is only one face,
                         * but if the ray enters an edge, two faces are returned (the ones
                         * that form it). Similarly for corners, but three faces.
                         */
                        // @ts-ignore
                        public getFaces(): org.spongepowered.api.util.Direction[];
                        /**
                         * Calls the mapper function on the extent and position.
                         */
                        // @ts-ignore
                        public map(mapper: java.util.function$.BiFunction): java.lang.Object;
                        /**
                         * Calls the mapper function on the extent and block position.
                         */
                        // @ts-ignore
                        public mapBlock(mapper: java.util.function$.BiFunction): java.lang.Object;
                        // @ts-ignore
                        public toString(): string;
                    }
                }
            }
        }
    }
}
