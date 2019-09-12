declare namespace org {
    namespace bukkit {
        namespace block {
            class EndGateway {
                /**
                 * Gets the location that entities are teleported to when
                 * entering the gateway portal.
                 * <p>
                 * If this block state is not placed the location's world will be null.
                 */
                public getExitLocation(): org.bukkit.Location;
                /**
                 * Sets the exit location that entities are teleported to when
                 * they enter the gateway portal.
                 * <p>
                 * If this block state is not placed the location's world has to be null.
                 */
                public setExitLocation(location: org.bukkit.Location): void;
                /**
                 * Gets whether this gateway will teleport entities directly to
                 * the exit location instead of finding a nearby location.
                 */
                public isExactTeleport(): boolean;
                /**
                 * Sets whether this gateway will teleport entities directly to
                 * the exit location instead of finding a nearby location.
                 */
                public setExactTeleport(exact: boolean): void;
                /**
                 * Gets the age in ticks of the gateway.
                 * <br>
                 * If the age is less than 200 ticks a magenta beam will be emitted, whilst
                 * if it is a multiple of 2400 ticks a purple beam will be emitted.
                 */
                public getAge(): number;
                /**
                 * Sets the age in ticks of the gateway.
                 * <br>
                 * If the age is less than 200 ticks a magenta beam will be emitted, whilst
                 * if it is a multiple of 2400 ticks a purple beam will be emitted.
                 */
                public setAge(age: number): void;
            }
        }
    }
}
