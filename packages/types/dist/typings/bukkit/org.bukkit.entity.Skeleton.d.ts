declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Skeleton extends org.bukkit.entity.Monster {
                /**
                 * Gets the current type of this skeleton.
                 */
                // @ts-ignore
                 getSkeletonType(): org.bukkit.entity.Skeleton.SkeletonType;
                // @ts-ignore
                 setSkeletonType(type: org.bukkit.entity.Skeleton.SkeletonType): void;
            }
        }
    }
}
