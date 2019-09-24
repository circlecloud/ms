declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ArmorStand extends org.bukkit.entity.LivingEntity {
                /**
                 * Returns the item the armor stand is
                 * currently holding
                 */
                 getItemInHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item the armor stand is currently
                 * holding
                 */
                 setItemInHand(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the item currently being worn
                 * by the armor stand on its feet
                 */
                 getBoots(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item currently being worn
                 * by the armor stand on its feet
                 */
                 setBoots(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the item currently being worn
                 * by the armor stand on its legs
                 */
                 getLeggings(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item currently being worn
                 * by the armor stand on its legs
                 */
                 setLeggings(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the item currently being worn
                 * by the armor stand on its chest
                 */
                 getChestplate(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item currently being worn
                 * by the armor stand on its chest
                 */
                 setChestplate(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the item currently being worn
                 * by the armor stand on its head
                 */
                 getHelmet(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item currently being worn
                 * by the armor stand on its head
                 */
                 setHelmet(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the armor stand's body's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                 getBodyPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's body's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                 setBodyPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns the armor stand's left arm's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                 getLeftArmPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's left arm's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                 setLeftArmPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns the armor stand's right arm's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                 getRightArmPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's right arm's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                 setRightArmPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns the armor stand's left leg's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                 getLeftLegPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's left leg's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                 setLeftLegPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns the armor stand's right leg's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                 getRightLegPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's right leg's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                 setRightLegPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns the armor stand's head's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                 getHeadPose(): org.bukkit.util.EulerAngle;
                /**
                 * Sets the armor stand's head's
                 * current pose as a {@link org.bukkit.util.EulerAngle}
                 */
                 setHeadPose(pose: org.bukkit.util.EulerAngle): void;
                /**
                 * Returns whether the armor stand has
                 * a base plate
                 */
                 hasBasePlate(): boolean;
                /**
                 * Sets whether the armor stand has a
                 * base plate
                 */
                 setBasePlate(basePlate: boolean): void;
                /**
                 * Returns whether the armor stand should be
                 * visible or not
                 */
                 isVisible(): boolean;
                /**
                 * Sets whether the armor stand should be
                 * visible or not
                 */
                 setVisible(visible: boolean): void;
                /**
                 * Returns whether this armor stand has arms
                 */
                 hasArms(): boolean;
                /**
                 * Sets whether this armor stand has arms
                 */
                 setArms(arms: boolean): void;
                /**
                 * Returns whether this armor stand is scaled
                 * down
                 */
                 isSmall(): boolean;
                /**
                 * Sets whether this armor stand is scaled
                 * down
                 */
                 setSmall(small: boolean): void;
                /**
                 * Returns whether this armor stand is a marker,
                 * meaning it has a very small collision box
                 */
                 isMarker(): boolean;
                /**
                 * Sets whether this armor stand is a marker,
                 * meaning it has a very small collision box
                 */
                 setMarker(marker: boolean): void;
            }
        }
    }
}
