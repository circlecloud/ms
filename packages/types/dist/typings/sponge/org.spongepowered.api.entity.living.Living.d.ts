declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    // @ts-ignore
                    interface Living extends org.spongepowered.api.entity.Entity, org.spongepowered.api.entity.projectile.source.ProjectileSource, org.spongepowered.api.scoreboard.TeamMember {
                        /**
                         * Gets a copy of the current {@link HealthData}.
                         */
                        // @ts-ignore
                         getHealthData(): org.spongepowered.api.data.manipulator.mutable.entity.HealthData;
                        /**
                         * Returns the health amount.
                         * <p>The range of the health depends on the object on which this
                         * method is defined. For players in Minecraft, the nominal range is
                         * between 0 and 20, inclusive, but the range can be adjusted.</p>
                         * <p>Convention dictates that health does not follow below 0 but this
                         * convention may be broken.</p>
                         */
                        // @ts-ignore
                         health(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                        /**
                         * Gets the current maximum health.
                         * <p>The maximum health set here may affect the attribute increasing
                         * health points. The base health should be minded that it may be lower
                         * than the total maximum health of this entity.</p>
                         */
                        // @ts-ignore
                         maxHealth(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                        /**
                         * Gets a copy of the current {@link DamageableData}.
                         */
                        // @ts-ignore
                         getDamageableData(): org.spongepowered.api.data.manipulator.mutable.entity.DamageableData;
                        /**
                         * Gets the {@link OptionalValue} for the last attacker.
                         * <p>This is generally an entity snapshot of a {@link Living}.</p>
                         */
                        // @ts-ignore
                         lastAttacker(): org.spongepowered.api.data.value.mutable.OptionalValue;
                        /**
                         * Gets the last amount of damage dealt as an optional value.
                         */
                        // @ts-ignore
                         lastDamage(): org.spongepowered.api.data.value.mutable.OptionalValue;
                        /**
                         * Returns this entity's head rotation.
                         * <p>The format of the rotation is represented by:</p>
                         * <ul><code>x -> pitch</code>, <code>y -> yaw</code>, <code>z -> roll
                         * </code></ul>
                         * <p>Note that the pitch will be the same x value returned by
                         * {@link Entity#getRotation()} and Minecraft does not currently support
                         * head roll so the z value will always be zero.</p>
                         */
                        // @ts-ignore
                         getHeadRotation(): any /*Vector3d*/;
                        /**
                         * Sets the entity's head rotation.
                         * <p>The format of the rotation is represented by:</p>
                         * <ul><code>x -> pitch</code>, <code>y -> yaw</code>, <code>z -> roll
                         * </code></ul>
                         * <p>Note that the pitch (x value) supplied will update the entity's pitch
                         * via {@link Entity#setRotation(Vector3d)}.</p>
                         */
                        // @ts-ignore
                         setHeadRotation(rotation: any /*Vector3d*/): void;
                        /**
                         * Makes the entity look at the specified target position.
                         */
                        // @ts-ignore
                         lookAt(targetPos: any /*Vector3d*/): void;
                    }
                }
            }
        }
    }
}
