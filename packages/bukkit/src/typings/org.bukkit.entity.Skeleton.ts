declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Skeleton extends org.bukkit.entity.Monster {
                /**
                 * Gets the current type of this skeleton.
                 */
                 getSkeletonType(): org.bukkit.entity.Skeleton.SkeletonType;
                 setSkeletonType(type: org.bukkit.entity.Skeleton.SkeletonType): void;
            }
        }
    }
}
