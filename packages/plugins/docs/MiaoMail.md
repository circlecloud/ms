    private static void injectInventoryAddItemMethod() {
        System.out.println("Injectoring Mail...");
        try {
            ClassPool pool = ClassPool.getDefault();
            String inventoryClassName = Bukkit.getServer().getClass().getPackage().getName() + ".inventory.CraftInventory";
            File classFile = new File(URLDecoder.decode(InventoryDragEvent.class.getProtectionDomain().getCodeSource().getLocation().getPath().split("!")[0], "UTF-8"));
            pool.appendClassPath(classFile.getPath());
            classFile = new File(URLDecoder.decode(MailPlugin.class.getProtectionDomain().getCodeSource().getLocation().getPath().split("!")[0], "UTF-8"));
            pool.appendClassPath(classFile.getPath());
            CtClass inventoryClass = pool.get(inventoryClassName);
            CtMethod addItemMethod = inventoryClass.getDeclaredMethod("addItem");

            addItemMethod.insertAfter(
                    "if(this instanceof org.bukkit.inventory.PlayerInventory){"
                    + "    final org.bukkit.inventory.PlayerInventory playerInventory = (org.bukkit.inventory.PlayerInventory)this;"
                    + "    final org.bukkit.entity.Player player = (org.bukkit.entity.Player)playerInventory.getHolder();"
                    + "    if(!$_.values().isEmpty()){"
                    + "        org.bukkit.event.inventory.InventoryDragEvent event = new org.bukkit.event.inventory.InventoryDragEvent(player.getOpenInventory(), new org.bukkit.inventory.ItemStack(org.bukkit.Material.AIR), new org.bukkit.inventory.ItemStack(org.bukkit.Material.AIR), true, $_);"
                    + "        event.setCancelled(true);"
                    + "        event.setResult(org.bukkit.event.Event.Result.DENY);"
                    + "        org.bukkit.Bukkit.getPluginManager().callEvent(event);"
                    + "    }"
                    + "}");
            try {
                inventoryClass.toClass();
                System.out.println("Injected");
            } catch (Exception e) {
                System.out.println("Inject fail, Please restart server");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
