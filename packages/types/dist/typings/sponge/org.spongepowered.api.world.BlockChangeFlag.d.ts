declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                // @ts-ignore
                interface BlockChangeFlag {
                    /**
                     * Gets whether this flag defines that a block change should
                     * notify neighboring blocks.
                     */
                    // @ts-ignore
                     updateNeighbors(): boolean;
                    /**
                     * Gets whether this flag defines that a block change should
                     * perform block physics checks or not. If not, no checks
                     * are performed.
                     */
                    // @ts-ignore
                     performBlockPhysics(): boolean;
                    /**
                     * Gets whether this flag will update observer blocks, different
                     * from notifying neighbors in that neighbor notifications
                     * can cause further block notification loops (like redstone),
                     * whereas this focuses on {@link BlockTypes#OBSERVER} blocks
                     * being told of updates.
                     */
                    // @ts-ignore
                     notifyObservers(): boolean;
                    /**
                     * Gets the equivalent {@link BlockChangeFlag} of this flag with all
                     * other flags while having the desired {@code updateNeighbors}
                     * as defined by the parameter.
                     */
                    // @ts-ignore
                     withUpdateNeighbors(updateNeighbors: boolean): org.spongepowered.api.world.BlockChangeFlag;
                    /**
                     * Gets the equivalent {@link BlockChangeFlag} of this flag
                     * with all other flags while having the desired {@code performBlockPhysics}
                     * as defined by the parameter.
                     */
                    // @ts-ignore
                     withPhysics(performBlockPhysics: boolean): org.spongepowered.api.world.BlockChangeFlag;
                    /**
                     * Gets the equivalent {@link BlockChangeFlag} of this flag with all
                     * other flags while having the desired {@code notifyObservers}
                     * as defined by the parameter.
                     */
                    // @ts-ignore
                     withNotifyObservers(notifyObservers: boolean): org.spongepowered.api.world.BlockChangeFlag;
                    /**
                     * Gets the inverted {@link BlockChangeFlag} of this flag.
                     * Normally, this may cancel out certain interactions, such
                     * as physics, neighbor notifications, or even observer
                     * notifications. In certain circumstances, some flags may
                     * even require clients to rejoin the world or restart their
                     * connections to the server.
                     */
                    // @ts-ignore
                     inverse(): org.spongepowered.api.world.BlockChangeFlag;
                    /**
                     * Gets the equivalent {@link BlockChangeFlag} of this flag
                     * with the {@code true}s set for this flag and the provided
                     * {@code flag}, such that only if both flags have the same
                     * {@code true} flags set will persist.
                     * <p>For example, if this flag has {@link #notifyObservers()}
                     * and the incoming flag has {@link #notifyObservers()} returning
                     * {@code true}, the resulting flag will have
                     * {@link #notifyObservers()} return {@code true} as well. The
                     * inverse is also true. If either has differing flags for any
                     * of the above methods, the resulting flag will have a
                     * {@code false} value.</p>
                     */
                    // @ts-ignore
                     andFlag(flag: org.spongepowered.api.world.BlockChangeFlag): org.spongepowered.api.world.BlockChangeFlag;
                    /**
                     * Gets the equivalent {@link BlockChangeFlag} of this flag
                     * with the {@code true}s set for this flag and the provided
                     * {@code flag}, such that only if both flags have the same
                     * {@code true} flags set will persist.
                     * <p>For example, if this flag has {@link #notifyObservers()}
                     * and the incoming flag has {@link #notifyObservers()} returning
                     * {@code true}, the resulting flag will have
                     * {@link #notifyObservers()} return {@code true} as well. The
                     * inverse is also true. If either has differing flags for any
                     * of the above methods, the resulting flag will have a
                     * {@code false} value.</p>
                     */
                    // @ts-ignore
                     andNotFlag(flag: org.spongepowered.api.world.BlockChangeFlag): org.spongepowered.api.world.BlockChangeFlag;
                }
            }
        }
    }
}
