declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace EntityUniverse {
                        // @ts-ignore
                         class EntityHit {
                            /**
                             * Creates a new entity hit from the entity, the intersection point and
                             * the normal.
                             */
                            constructor(entity: org.spongepowered.api.entity.Entity, intersection: any /*Vector3d*/, normal: any /*Vector3d*/, distance: number)
                            /**
                             * Gets the intersected entity.
                             */
                            // @ts-ignore
                            public getEntity(): org.spongepowered.api.entity.Entity;
                            /**
                             * Gets the intersection point.
                             */
                            // @ts-ignore
                            public getIntersection(): any /*Vector3d*/;
                            /**
                             * Gets the intersection normal.
                             */
                            // @ts-ignore
                            public getNormal(): any /*Vector3d*/;
                            /**
                             * Gets the distance from the start to the intersection.
                             */
                            // @ts-ignore
                            public getDistance(): number;
                            // @ts-ignore
                            public equals(other: any): boolean;
                            // @ts-ignore
                            public hashCode(): number;
                            // @ts-ignore
                            public toString(): string;
                        }
                    }
                }
            }
        }
    }
}
