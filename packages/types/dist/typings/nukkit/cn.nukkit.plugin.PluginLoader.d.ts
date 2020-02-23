declare namespace cn {
    namespace nukkit {
        namespace plugin {
            // @ts-ignore
            interface PluginLoader {
                /**
                 * 通过文件名字的字符串，来加载和初始化一个插件。<br>
                 * Loads and initializes a plugin by its file name.
                 * <p>这个方法应该设置好插件的相关属性。比如，插件所在的服务器对象，插件的加载器对象，插件的描述对象，插件的数据文件夹。<br>
                 * Properties for loaded plugin should be set in this method. Such as, the {@code Server} object for which this
                 * plugin is running in, the {@code PluginLoader} object for its loader, and the {@code File} object for its
                 * data folder.</p>
                 * <p>如果插件加载失败，这个方法应该返回{@code null}，或者抛出异常。<br>
                 * If the plugin loader does not load this plugin successfully, a {@code null} should be returned,
                 * or an exception should be thrown.</p>
                 */
                // @ts-ignore
                 loadPlugin(filename: string): cn.nukkit.plugin.Plugin;
                /**
                 * 通过插件的 {@code File}对象，来加载和初始化一个插件。<br>
                 * Loads and initializes a plugin by a {@code File} object describes the file.
                 * <p>这个方法应该设置好插件的相关属性。比如，插件所在的服务器对象，插件的加载器对象，插件的描述对象，插件的数据文件夹。<br>
                 * Properties for loaded plugin should be set in this method. Such as, the {@code Server} object for which this
                 * plugin is running in, the {@code PluginLoader} object for its loader, and the {@code File} object for its
                 * data folder.</p>
                 * <p>如果插件加载失败，这个方法应该返回{@code null}，或者抛出异常。<br>
                 * If the plugin loader does not load this plugin successfully, a {@code null} should be returned,
                 * or an exception should be thrown.</p>
                 */
                // @ts-ignore
                 loadPlugin(file: java.io.File): cn.nukkit.plugin.Plugin;
                /**
                 * 通过插件文件名的字符串，来获得描述这个插件的 {@code PluginDescription}对象。<br>
                 * Gets a {@code PluginDescription} object describes the plugin by its file name.
                 * <p>如果插件的描述对象获取失败，这个方法应该返回{@code null}。<br>
                 * If the plugin loader does not get its description successfully, a {@code null} should be returned.</p>
                 */
                // @ts-ignore
                 getPluginDescription(filename: string): cn.nukkit.plugin.PluginDescription;
                /**
                 * 通过插件的 {@code File}对象，来获得描述这个插件的 {@code PluginDescription}对象。<br>
                 * Gets a {@code PluginDescription} object describes the plugin by a {@code File} object describes the plugin file.
                 * <p>如果插件的描述对象获取失败，这个方法应该返回{@code null}。<br>
                 * If the plugin loader does not get its description successfully, a {@code null} should be returned.</p>
                 */
                // @ts-ignore
                 getPluginDescription(file: java.io.File): cn.nukkit.plugin.PluginDescription;
                /**
                 * 返回这个插件加载器支持的文件类型。<br>
                 * Returns the file types this plugin loader supports.
                 * <p>在Nukkit读取所有插件时，插件管理器会查找所有已经安装的插件加载器，通过识别这个插件是否满足下面的条件，
                 * 来选择对应的插件加载器。<br>
                 * When Nukkit is trying to load all its plugins, the plugin manager will look for all installed plugin loader,
                 * and choose the correct one by checking if this plugin matches the filters given below.</p>
                 * <p>举个例子，识别这个文件是否以jar为扩展名，它的正则表达式是：<br>
                 * For example, to check if this file is has a "jar" extension, the regular expression should be:<br>
                 * {@code ^.+\\.jar$}<br>
                 * 所以只读取jar扩展名的插件加载器，这个函数应该写成：<br>
                 * So, for a jar-extension-only file plugin loader, this method should be:
                 * </p>
                 * <pre> {@code           @Override}
                 * public Pattern[] getPluginFilters() {
                 * return new Pattern[]{Pattern.compile("^.+\\.jar$")};
                 * }
                 * </pre>
                 */
                // @ts-ignore
                 getPluginFilters(): java.util.regex.Pattern[];
                /**
                 * 启用一个插件。<br>
                 * Enables a plugin.
                 */
                // @ts-ignore
                 enablePlugin(plugin: cn.nukkit.plugin.Plugin): void;
                /**
                 * 停用一个插件。<br>
                 * Disables a plugin.
                 */
                // @ts-ignore
                 disablePlugin(plugin: cn.nukkit.plugin.Plugin): void;
            }
        }
    }
}
