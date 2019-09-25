declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace action {
                    namespace HoverAction {
                        namespace ShowEntity {
                            // @ts-ignore
                             class Ref implements org.spongepowered.api.util.Identifiable {
                                /**
                                 * Constructs a Ref to an entity.
                                 */
                                constructor(uuid: any, name: string, type: org.spongepowered.api.entity.EntityType)
                                /**
                                 * Constructs a Ref to an entity.
                                 */
                                constructor(uuid: any, name: string)
                                /**
                                 * Constructs a Ref, given an {@link Entity}.
                                 */
                                constructor(entity: org.spongepowered.api.entity.Entity, name: string)
                                /**
                                 * Constructs a Ref directly.
                                 */
                                constructor(uuid: any, name: string, type: any)
                                /**
                                 * Retrieves the UUID that this {@link Ref} refers to.
                                 */
                                // @ts-ignore
                                public getUniqueId(): any;
                                /**
                                 * Retrieves the name that this {@link Ref} refers to.
                                 */
                                // @ts-ignore
                                public getName(): string;
                                /**
                                 * Retrieves the type that this {@link Ref} refers to, if it exists.
                                 */
                                // @ts-ignore
                                public getType(): any;
                                // @ts-ignore
                                public equals(obj: any): boolean;
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
