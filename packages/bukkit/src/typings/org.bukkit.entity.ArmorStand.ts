declare namespace org {
    namespace bukkit {
        namespace entity {
            class ArmorStand {
                /**
                 * Returns the item the armor stand is
                 * currently holding
                 */
                public getItemInHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item the armor stand is currently
                 * holding
                 */
                public setItemInHand(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the item currently being worn
                 * by the armor stand on its feet
                 */
                public getBoots(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item currently being worn
                 * by the armor stand on its feet
                 */
                public setBoots(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the item currently being worn
                 * by the armor stand on its legs
                 */
                public getLeggings(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item currently being worn
                 * by the armor stand on its legs
                 */
                public setLeggings(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the item currently being worn
                 * by the armor stand on its chest
                 */
                public getChestplate(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item currently being worn
                 * by the armor stand on its chest
                 */
                public setChestplate(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the item currently being worn
                 * by the armor stand on its head
                 */
                public getHelmet(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item currently being worn
                 * by the armor stand on its head
                 */
                public setHelmet(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the armor stand's body's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                public getBodyPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's body's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                public setBodyPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns the armor stand's left arm's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                public getLeftArmPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's left arm's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                public setLeftArmPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns the armor stand's right arm's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                public getRightArmPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's right arm's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                public setRightArmPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns the armor stand's left leg's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                public getLeftLegPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's left leg's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                public setLeftLegPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns the armor stand's right leg's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                public getRightLegPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's right leg's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                public setRightLegPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns the armor stand's head's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                public getHeadPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's head's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                public setHeadPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns whether the armor stand has
                 * a base plate
                 */
                public hasBasePlate(): boolean;
                /**
                 * Sets whether the armor stand has a
                 * base plate
                 */
                public setBasePlate(basePlate: boolean): void;
                /**
                 * Returns whether the armor stand should be
                 * visible or not
                 */
                public isVisible(): boolean;
                /**
                 * Sets whether the armor stand should be
                 * visible or not
                 */
                public setVisible(visible: boolean): void;
                /**
                 * Returns whether this armor stand has arms
                 */
                public hasArms(): boolean;
                /**
                 * Sets whether this armor stand has arms
                 */
                public setArms(arms: boolean): void;
                /**
                 * Returns whether this armor stand is scaled
                 * down
                 */
                public isSmall(): boolean;
                /**
                 * Sets whether this armor stand is scaled
                 * down
                 */
                public setSmall(small: boolean): void;
                /**
                 * Returns whether this armor stand is a marker,
                 * meaning it has a very small collision box
                 */
                public isMarker(): boolean;
                /**
                 * Sets whether this armor stand is a marker,
                 * meaning it has a very small collision box
                 */
                public setMarker(marker: boolean): void;
            }
        }
    }
}
