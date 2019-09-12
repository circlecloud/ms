declare namespace org {
    namespace bukkit {
        namespace entity {
            class Ageable {
                /**
                 * Gets the age of this animal.
                 */
                public getAge(): number;
                /**
                 * Sets the age of this animal.
                 */
                public setAge(age: number): void;
                /**
                 * Lock the age of the animal, setting this will prevent the animal from
                 * maturing or getting ready for mating.
                 */
                public setAgeLock(lock: boolean): void;
                /**
                 * Gets the current agelock.
                 */
                public getAgeLock(): boolean;
                /**
                 * Sets the age of the animal to a baby
                 */
                public setBaby(): void;
                /**
                 * Sets the age of the animal to an adult
                 */
                public setAdult(): void;
                /**
                 * Returns true if the animal is an adult.
                 */
                public isAdult(): boolean;
                /**
                 * Return the ability to breed of the animal.
                 */
                public canBreed(): boolean;
                /**
                 * Set breedability of the animal, if the animal is a baby and set to
                 * breed it will instantly grow up.
                 */
                public setBreed(breed: boolean): void;
            }
        }
    }
}
