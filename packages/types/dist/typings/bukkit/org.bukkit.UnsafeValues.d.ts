// @ts-nocheck
declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface UnsafeValues {
            // @ts-ignore
             toLegacy(material: org.bukkit.Material): org.bukkit.Material;
            // @ts-ignore
             fromLegacy(material: org.bukkit.Material): org.bukkit.Material;
            // @ts-ignore
             fromLegacy(material: org.bukkit.material.MaterialData): org.bukkit.Material;
            // @ts-ignore
             fromLegacy(material: org.bukkit.material.MaterialData, itemPriority: boolean): org.bukkit.Material;
            // @ts-ignore
             fromLegacy(material: org.bukkit.Material, data: number): org.bukkit.block.data.BlockData;
            // @ts-ignore
             getMaterial(material: string, version: number): org.bukkit.Material;
            // @ts-ignore
             getDataVersion(): number;
            // @ts-ignore
             modifyItemStack(stack: org.bukkit.inventory.ItemStack, arguments: string): org.bukkit.inventory.ItemStack;
            // @ts-ignore
             checkSupported(pdf: org.bukkit.plugin.PluginDescriptionFile): void;
            // @ts-ignore
             processClass(pdf: org.bukkit.plugin.PluginDescriptionFile, path: string, clazz: number): number[];
            /**
             * Load an advancement represented by the specified string into the server.
             * The advancement format is governed by Minecraft and has no specified
             * layout.
             * <br>
             * It is currently a JSON object, as described by the Minecraft Wiki:
             * http://minecraft.gamepedia.com/Advancements
             * <br>
             * Loaded advancements will be stored and persisted across server restarts
             * and reloads.
             * <br>
             * Callers should be prepared for {@link Exception} to be thrown.
             */
            // @ts-ignore
             loadAdvancement(key: org.bukkit.NamespacedKey, advancement: string): org.bukkit.advancement.Advancement;
            /**
             * Delete an advancement which was loaded and saved by
             * {@link #loadAdvancement(org.bukkit.NamespacedKey, java.lang.String)}.
             * <br>
             * This method will only remove advancement from persistent storage. It
             * should be accompanied by a call to {@link Server#reloadData()} in order
             * to fully remove it from the running instance.
             */
            // @ts-ignore
             removeAdvancement(key: org.bukkit.NamespacedKey): boolean;
        }
    }
}
