declare namespace org {
    namespace bukkit {
        namespace entity {
            class EnderCrystal {
                /**
                 * Return whether or not this end crystal is showing the
                 * bedrock slate underneath it.
                 */
                public isShowingBottom(): boolean;
                /**
                 * Sets whether or not this end crystal is showing the
                 * bedrock slate underneath it.
                 */
                public setShowingBottom(showing: boolean): void;
                /**
                 * Gets the location that this end crystal is pointing its beam to.
                 */
                public getBeamTarget(): org.bukkit.Location;
                /**
                 * Sets the location that this end crystal is pointing to. Passing a null
                 * value will remove the current beam.
                 */
                public setBeamTarget(location: org.bukkit.Location): void;
            }
        }
    }
}
