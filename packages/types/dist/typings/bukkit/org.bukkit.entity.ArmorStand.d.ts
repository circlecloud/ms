declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ArmorStand extends org.bukkit.entity.LivingEntity {
                /**
                 * Returns the item the armor stand is
                 * currently holding
                 */
                // @ts-ignore
                 getItemInHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item the armor stand is currently
                 * holding
                 */
                // @ts-ignore
                 setItemInHand(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the item currently being worn
                 * by the armor stand on its feet
                 */
                // @ts-ignore
                 getBoots(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item currently being worn
                 * by the armor stand on its feet
                 */
                // @ts-ignore
                 setBoots(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the item currently being worn
                 * by the armor stand on its legs
                 */
                // @ts-ignore
                 getLeggings(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item currently being worn
                 * by the armor stand on its legs
                 */
                // @ts-ignore
                 setLeggings(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the item currently being worn
                 * by the armor stand on its chest
                 */
                // @ts-ignore
                 getChestplate(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item currently being worn
                 * by the armor stand on its chest
                 */
                // @ts-ignore
                 setChestplate(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the item currently being worn
                 * by the armor stand on its head
                 */
                // @ts-ignore
                 getHelmet(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item currently being worn
                 * by the armor stand on its head
                 */
                // @ts-ignore
                 setHelmet(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the armor stand's body's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                // @ts-ignore
                 getBodyPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's body's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                // @ts-ignore
                 setBodyPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns the armor stand's left arm's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                // @ts-ignore
                 getLeftArmPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's left arm's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                // @ts-ignore
                 setLeftArmPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns the armor stand's right arm's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                // @ts-ignore
                 getRightArmPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's right arm's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                // @ts-ignore
                 setRightArmPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns the armor stand's left leg's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                // @ts-ignore
                 getLeftLegPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's left leg's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                // @ts-ignore
                 setLeftLegPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns the armor stand's right leg's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                // @ts-ignore
                 getRightLegPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's right leg's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                // @ts-ignore
                 setRightLegPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns the armor stand's head's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                // @ts-ignore
                 getHeadPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's head's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                // @ts-ignore
                 setHeadPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns whether the armor stand has
                 * a base plate
                 */
                // @ts-ignore
                 hasBasePlate(): boolean;
                /**
                 * Sets whether the armor stand has a
                 * base plate
                 */
                // @ts-ignore
                 setBasePlate(basePlate: boolean): void;
                /**
                 * Returns whether the armor stand should be
                 * visible or not
                 */
                // @ts-ignore
                 isVisible(): boolean;
                /**
                 * Sets whether the armor stand should be
                 * visible or not
                 */
                // @ts-ignore
                 setVisible(visible: boolean): void;
                /**
                 * Returns whether this armor stand has arms
                 */
                // @ts-ignore
                 hasArms(): boolean;
                /**
                 * Sets whether this armor stand has arms
                 */
                // @ts-ignore
                 setArms(arms: boolean): void;
                /**
                 * Returns whether this armor stand is scaled
                 * down
                 */
                // @ts-ignore
                 isSmall(): boolean;
                /**
                 * Sets whether this armor stand is scaled
                 * down
                 */
                // @ts-ignore
                 setSmall(small: boolean): void;
                /**
                 * Returns whether this armor stand is a marker,
                 * meaning it has a very small collision box
                 */
                // @ts-ignore
                 isMarker(): boolean;
                /**
                 * Sets whether this armor stand is a marker,
                 * meaning it has a very small collision box
                 */
                // @ts-ignore
                 setMarker(marker: boolean): void;
            }
        }
    }
}
