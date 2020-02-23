declare namespace cn {
    namespace nukkit {
        namespace plugin {
            // @ts-ignore
             class PluginDescription extends java.lang.Object {
                // @ts-ignore
                constructor(yamlMap: java.util.Map)
                // @ts-ignore
                constructor(yamlString: string)
                /**
                 * 返回这个插件完整的名字。<br>
                 * Returns the full name of this plugin.
                 * <p>一个插件完整的名字由{@code 名字+" v"+版本号}组成。比如：<br>
                 * A full name of a plugin is composed by {@code name+" v"+version}.for example:</p>
                 * <p>{@code HelloWorld v1.0.0}</p>
                 */
                // @ts-ignore
                public getFullName(): string;
                /**
                 * 返回这个插件支持的Nukkit API版本列表。<br>
                 * Returns all Nukkit API versions this plugin supports.
                 */
                // @ts-ignore
                public getCompatibleAPIs(): java.util.List;
                /**
                 * 返回这个插件的作者列表。<br>
                 * Returns all the authors of this plugin.
                 */
                // @ts-ignore
                public getAuthors(): java.util.List;
                /**
                 * 返回这个插件的信息前缀。<br>
                 * Returns the message title of this plugin.
                 * <p>插件的信息前缀在记录器记录信息时，会作为信息头衔使用。如果没有定义记录器，会使用插件的名字作为信息头衔。<br>
                 * When a PluginLogger logs, the message title is used as the prefix of message. If prefix is undefined,
                 * the plugin name will be used instead. </p>
                 */
                // @ts-ignore
                public getPrefix(): string;
                /**
                 * 返回这个插件定义的命令列表。<br>
                 * Returns all the defined commands of this plugin.
                 */
                // @ts-ignore
                public getCommands(): java.util.Map;
                /**
                 * 返回这个插件所依赖的插件名字。<br>
                 * The names of the plugins what is depended by this plugin.
                 * Nukkit插件的依赖有这些注意事项：<br>Here are some note for Nukkit plugin depending:
                 * <ul>
                 * <li>一个插件不能依赖自己（否则会报错）。<br>A plugin can not depend on itself (or there will be an exception).</li>
                 * <li>如果一个插件依赖另一个插件，那么必须要安装依赖的插件后才能加载这个插件。<br>
                 * If a plugin relies on another one, the another one must be installed at the same time, or Nukkit
                 * won't load this plugin.</li>
                 * <li>当一个插件所依赖的插件不存在时，Nukkit不会加载这个插件，但是会提醒用户去安装所依赖的插件。<br>
                 * When the required dependency plugin does not exists, Nukkit won't load this plugin, but will tell the
                 * user that this dependency is required.</li>
                 * </ul>
                 * <p>举个例子，如果A插件依赖于B插件，在没有安装B插件而安装A插件的情况下，Nukkit会阻止A插件的加载。
                 * 只有在安装B插件前安装了它所依赖的A插件，Nukkit才会允许加载B插件。<br>
                 * For example, there is a Plugin A which relies on Plugin B. If you installed A without installing B,
                 * Nukkit won't load A because its dependency B is lost. Only when B is installed, A will be loaded
                 * by Nukkit.</p>
                 */
                // @ts-ignore
                public getDepend(): java.util.List;
                /**
                 * 返回这个插件的描述文字。<br>
                 * Returns the description text of this plugin.
                 */
                // @ts-ignore
                public getDescription(): string;
                /**
                 * TODO finish javadoc
                 */
                // @ts-ignore
                public getLoadBefore(): java.util.List;
                /**
                 * 返回这个插件的主类名。<br>
                 * Returns the main class name of this plugin.
                 * <p>一个插件的加载都是从主类开始的。主类的名字在插件的配置文件中定义后可以通过这个函数返回。一个返回值例子：<br>
                 * The load action of a Nukkit plugin begins from main class. The name of main class should be defined
                 * in the plugin configuration, and it can be returned by this function. An example for return value: <br>
                 * {@code "com.example.ExamplePlugin"}</p>
                 */
                // @ts-ignore
                public getMain(): string;
                /**
                 * 返回这个插件的名字。<br>
                 * Returns the name of this plugin.
                 */
                // @ts-ignore
                public getName(): string;
                /**
                 * 返回这个插件加载的顺序，即插件应该在什么时候加载。<br>
                 * Returns the order the plugin loads, or when the plugin is loaded.
                 */
                // @ts-ignore
                public getOrder(): cn.nukkit.plugin.PluginLoadOrder;
                /**
                 * 返回这个插件定义的权限列表。<br>
                 * Returns all the defined permissions of this plugin.
                 */
                // @ts-ignore
                public getPermissions(): java.util.List;
                /**
                 * TODO finish javadoc
                 */
                // @ts-ignore
                public getSoftDepend(): java.util.List;
                /**
                 * 返回这个插件的版本号。<br>
                 * Returns the version string of this plugin.
                 */
                // @ts-ignore
                public getVersion(): string;
                /**
                 * 返回这个插件的网站。<br>
                 * Returns the website of this plugin.
                 */
                // @ts-ignore
                public getWebsite(): string;
            }
        }
    }
}
