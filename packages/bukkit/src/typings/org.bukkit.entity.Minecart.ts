declare namespace org {
    namespace bukkit {
        namespace entity {
            class Minecart {
                /**
                 * Sets a minecart's damage.
                 */
                public setDamage(damage: number): void;
                /**
                 * Gets a minecart's damage.
                 */
                public getDamage(): number;
                /**
                 * Gets the maximum speed of a minecart. The speed is unrelated to the
                 * velocity.
                 */
                public getMaxSpeed(): number;
                /**
                 * Sets the maximum speed of a minecart. Must be nonnegative. Default is
                 * 0.4D.
                 */
                public setMaxSpeed(speed: number): void;
                /**
                 * Returns whether this minecart will slow down faster without a passenger
                 * occupying it
                 */
                public isSlowWhenEmpty(): boolean;
                /**
                 * Sets whether this minecart will slow down faster without a passenger
                 * occupying it
                 */
                public setSlowWhenEmpty(slow: boolean): void;
                /**
                 * Gets the flying velocity modifier. Used for minecarts that are in
                 * mid-air. A flying minecart's velocity is multiplied by this factor each
                 * tick.
                 */
                public getFlyingVelocityMod(): org.bukkit.util.Vector;
                /**
                 * Sets the flying velocity modifier. Used for minecarts that are in
                 * mid-air. A flying minecart's velocity is multiplied by this factor each
                 * tick.
                 */
                public setFlyingVelocityMod(flying: org.bukkit.util.Vector): void;
                /**
                 * Gets the derailed velocity modifier. Used for minecarts that are on the
                 * ground, but not on rails.
                 * <p>
                 * A derailed minecart's velocity is multiplied by this factor each tick.
                 */
                public getDerailedVelocityMod(): org.bukkit.util.Vector;
                /**
                 * Sets the derailed velocity modifier. Used for minecarts that are on the
                 * ground, but not on rails. A derailed minecart's velocity is multiplied
                 * by this factor each tick.
                 */
                public setDerailedVelocityMod(derailed: org.bukkit.util.Vector): void;
                /**
                 * Sets the display block for this minecart.
                 * Passing a null value will set the minecart to have no display block.
                 */
                public setDisplayBlock(material: org.bukkit.material.MaterialData): void;
                /**
                 * Gets the display block for this minecart.
                 * This function will return the type AIR if none is set.
                 */
                public getDisplayBlock(): org.bukkit.material.MaterialData;
                /**
                 * Sets the display block for this minecart.
                 * Passing a null value will set the minecart to have no display block.
                 */
                public setDisplayBlockData(blockData: org.bukkit.block.data.BlockData): void;
                /**
                 * Gets the display block for this minecart.
                 * This function will return the type AIR if none is set.
                 */
                public getDisplayBlockData(): org.bukkit.block.data.BlockData;
                /**
                 * Sets the offset of the display block.
                 */
                public setDisplayBlockOffset(offset: number): void;
                /**
                 * Gets the offset of the display block.
                 */
                public getDisplayBlockOffset(): number;
            }
        }
    }
}
