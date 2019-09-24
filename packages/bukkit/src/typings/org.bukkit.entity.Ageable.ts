declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Ageable extends org.bukkit.entity.Creature {
                /**
                 * Gets the age of this animal.
                 */
                 getAge(): number;
                /**
                 * Sets the age of this animal.
                 */
                 setAge(age: number): void;
                /**
                 * Lock the age of the animal, setting this will prevent the animal from
                 * maturing or getting ready for mating.
                 */
                 setAgeLock(lock: boolean): void;
                /**
                 * Gets the current agelock.
                 */
                 getAgeLock(): boolean;
                /**
                 * Sets the age of the animal to a baby
                 */
                 setBaby(): void;
                /**
                 * Sets the age of the animal to an adult
                 */
                 setAdult(): void;
                /**
                 * Returns true if the animal is an adult.
                 */
                 isAdult(): boolean;
                /**
                 * Return the ability to breed of the animal.
                 */
                 canBreed(): boolean;
                /**
                 * Set breedability of the animal, if the animal is a baby and set to
                 * breed it will instantly grow up.
                 */
                 setBreed(breed: boolean): void;
            }
        }
    }
}
