declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace action {
                    namespace HoverAction {
                        namespace ShowEntity {
                            // @ts-ignore
                             class Ref extends java.lang.Object implements org.spongepowered.api.util.Identifiable {
                                /**
                                 * Constructs a Ref to an entity.
                                 */
                                // @ts-ignore
                                constructor(uuid: java.util.UUID, name: string, type: org.spongepowered.api.entity.EntityType)
                                /**
                                 * Constructs a Ref to an entity.
                                 */
                                // @ts-ignore
                                constructor(uuid: java.util.UUID, name: string)
                                /**
                                 * Constructs a Ref, given an {@link Entity}.
                                 */
                                // @ts-ignore
                                constructor(entity: org.spongepowered.api.entity.Entity, name: string)
                                /**
                                 * Constructs a Ref directly.
                                 */
                                // @ts-ignore
                                constructor(uuid: java.util.UUID, name: string, type: java.util.Optional)
                                /**
                                 * Retrieves the UUID that this {@link Ref} refers to.
                                 */
                                // @ts-ignore
                                public getUniqueId(): java.util.UUID;
                                /**
                                 * Retrieves the name that this {@link Ref} refers to.
                                 */
                                // @ts-ignore
                                public getName(): string;
                                /**
                                 * Retrieves the type that this {@link Ref} refers to, if it exists.
                                 */
                                // @ts-ignore
                                public getType(): java.util.Optional;
                                // @ts-ignore
                                public equals(obj: java.lang.Object): boolean;
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
}
