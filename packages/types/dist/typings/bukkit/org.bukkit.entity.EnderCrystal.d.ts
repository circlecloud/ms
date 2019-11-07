declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface EnderCrystal extends org.bukkit.entity.Entity {
                /**
                 * Return whether or not this end crystal is showing the
                 * bedrock slate underneath it.
                 */
                // @ts-ignore
                 isShowingBottom(): boolean;
                /**
                 * Sets whether or not this end crystal is showing the
                 * bedrock slate underneath it.
                 */
                // @ts-ignore
                 setShowingBottom(showing: boolean): void;
                /**
                 * Gets the location that this end crystal is pointing its beam to.
                 */
                // @ts-ignore
                 getBeamTarget(): org.bukkit.Location;
                /**
                 * Sets the location that this end crystal is pointing to. Passing a null
                 * value will remove the current beam.
                 */
                // @ts-ignore
                 setBeamTarget(location: org.bukkit.Location): void;
            }
        }
    }
}
