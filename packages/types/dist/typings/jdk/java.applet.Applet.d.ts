declare namespace java {
    namespace applet {
        // @ts-ignore
         class Applet extends java.awt.Panel {
            /**
             * Constructs a new Applet.
             * <p>
             * Note: Many methods in <code>java.applet.Applet</code>
             * may be invoked by the applet only after the applet is
             * fully constructed; applet should avoid calling methods
             * in <code>java.applet.Applet</code> in the constructor.
             */
            // @ts-ignore
            constructor()
            /**
             * Sets this applet's stub. This is done automatically by the system.
             * <p>If there is a security manager, its <code> checkPermission </code>
             * method is called with the
             * <code>AWTPermission("setAppletStub")</code>
             * permission if a stub has already been set.
             */
            // @ts-ignore
            public setStub(stub: java.applet.AppletStub): void;
            /**
             * Determines if this applet is active. An applet is marked active
             * just before its <code>start</code> method is called. It becomes
             * inactive just before its <code>stop</code> method is called.
             */
            // @ts-ignore
            public isActive(): boolean;
            /**
             * Gets the URL of the document in which this applet is embedded.
             * For example, suppose an applet is contained
             * within the document:
             * <blockquote><pre>
             * http://www.oracle.com/technetwork/java/index.html
             * </pre></blockquote>
             * The document base is:
             * <blockquote><pre>
             * http://www.oracle.com/technetwork/java/index.html
             * </pre></blockquote>
             */
            // @ts-ignore
            public getDocumentBase(): java.net.URL;
            /**
             * Gets the base URL. This is the URL of the directory which contains this applet.
             */
            // @ts-ignore
            public getCodeBase(): java.net.URL;
            /**
             * Returns the value of the named parameter in the HTML tag. For
             * example, if this applet is specified as
             * <blockquote><pre>
             * &lt;applet code="Clock" width=50 height=50&gt;
             * &lt;param name=Color value="blue"&gt;
             * &lt;/applet&gt;
             * </pre></blockquote>
             * <p>
             * then a call to <code>getParameter("Color")</code> returns the
             * value <code>"blue"</code>.
             * <p>
             * The <code>name</code> argument is case insensitive.
             */
            // @ts-ignore
            public getParameter(name: string): string;
            /**
             * Determines this applet's context, which allows the applet to
             * query and affect the environment in which it runs.
             * <p>
             * This environment of an applet represents the document that
             * contains the applet.
             */
            // @ts-ignore
            public getAppletContext(): java.applet.AppletContext;
            /**
             * Requests that this applet be resized.
             */
            // @ts-ignore
            public resize(width: number, height: number): void;
            /**
             * Requests that this applet be resized.
             */
            // @ts-ignore
            public resize(d: java.awt.Dimension): void;
            /**
             * Indicates if this container is a validate root.
             * <p>
             * {@code Applet} objects are the validate roots, and, therefore, they
             * override this method to return {@code true}.
             */
            // @ts-ignore
            public isValidateRoot(): boolean;
            /**
             * Requests that the argument string be displayed in the
             * "status window". Many browsers and applet viewers
             * provide such a window, where the application can inform users of
             * its current state.
             */
            // @ts-ignore
            public showStatus(msg: string): void;
            /**
             * Returns an <code>Image</code> object that can then be painted on
             * the screen. The <code>url</code> that is passed as an argument
             * must specify an absolute URL.
             * <p>
             * This method always returns immediately, whether or not the image
             * exists. When this applet attempts to draw the image on the screen,
             * the data will be loaded. The graphics primitives that draw the
             * image will incrementally paint on the screen.
             */
            // @ts-ignore
            public getImage(url: java.net.URL): java.awt.Image;
            /**
             * Returns an <code>Image</code> object that can then be painted on
             * the screen. The <code>url</code> argument must specify an absolute
             * URL. The <code>name</code> argument is a specifier that is
             * relative to the <code>url</code> argument.
             * <p>
             * This method always returns immediately, whether or not the image
             * exists. When this applet attempts to draw the image on the screen,
             * the data will be loaded. The graphics primitives that draw the
             * image will incrementally paint on the screen.
             */
            // @ts-ignore
            public getImage(url: java.net.URL, name: string): java.awt.Image;
            /**
             * Get an audio clip from the given URL.
             */
            // @ts-ignore
            public static newAudioClip(url: java.net.URL): java.applet.AudioClip;
            /**
             * Returns the <code>AudioClip</code> object specified by the
             * <code>URL</code> argument.
             * <p>
             * This method always returns immediately, whether or not the audio
             * clip exists. When this applet attempts to play the audio clip, the
             * data will be loaded.
             */
            // @ts-ignore
            public getAudioClip(url: java.net.URL): java.applet.AudioClip;
            /**
             * Returns the <code>AudioClip</code> object specified by the
             * <code>URL</code> and <code>name</code> arguments.
             * <p>
             * This method always returns immediately, whether or not the audio
             * clip exists. When this applet attempts to play the audio clip, the
             * data will be loaded.
             */
            // @ts-ignore
            public getAudioClip(url: java.net.URL, name: string): java.applet.AudioClip;
            /**
             * Returns information about this applet. An applet should override
             * this method to return a <code>String</code> containing information
             * about the author, version, and copyright of the applet.
             * <p>
             * The implementation of this method provided by the
             * <code>Applet</code> class returns <code>null</code>.
             */
            // @ts-ignore
            public getAppletInfo(): string;
            /**
             * Gets the locale of the applet. It allows the applet
             * to maintain its own locale separated from the locale
             * of the browser or appletviewer.
             */
            // @ts-ignore
            public getLocale(): java.util.Locale;
            /**
             * Returns information about the parameters that are understood by
             * this applet. An applet should override this method to return an
             * array of <code>Strings</code> describing these parameters.
             * <p>
             * Each element of the array should be a set of three
             * <code>Strings</code> containing the name, the type, and a
             * description. For example:
             * <blockquote><pre>
             * String pinfo[][] = {
             * {"fps",    "1-10",    "frames per second"},
             * {"repeat", "boolean", "repeat image loop"},
             * {"imgs",   "url",     "images directory"}
             * };
             * </pre></blockquote>
             * <p>
             * The implementation of this method provided by the
             * <code>Applet</code> class returns <code>null</code>.
             */
            // @ts-ignore
            public getParameterInfo(): java.lang.String[][];
            /**
             * Plays the audio clip at the specified absolute URL. Nothing
             * happens if the audio clip cannot be found.
             */
            // @ts-ignore
            public play(url: java.net.URL): void;
            /**
             * Plays the audio clip given the URL and a specifier that is
             * relative to it. Nothing happens if the audio clip cannot be found.
             */
            // @ts-ignore
            public play(url: java.net.URL, name: string): void;
            /**
             * Called by the browser or applet viewer to inform
             * this applet that it has been loaded into the system. It is always
             * called before the first time that the <code>start</code> method is
             * called.
             * <p>
             * A subclass of <code>Applet</code> should override this method if
             * it has initialization to perform. For example, an applet with
             * threads would use the <code>init</code> method to create the
             * threads and the <code>destroy</code> method to kill them.
             * <p>
             * The implementation of this method provided by the
             * <code>Applet</code> class does nothing.
             */
            // @ts-ignore
            public init(): void;
            /**
             * Called by the browser or applet viewer to inform
             * this applet that it should start its execution. It is called after
             * the <code>init</code> method and each time the applet is revisited
             * in a Web page.
             * <p>
             * A subclass of <code>Applet</code> should override this method if
             * it has any operation that it wants to perform each time the Web
             * page containing it is visited. For example, an applet with
             * animation might want to use the <code>start</code> method to
             * resume animation, and the <code>stop</code> method to suspend the
             * animation.
             * <p>
             * Note: some methods, such as <code>getLocationOnScreen</code>, can only
             * provide meaningful results if the applet is showing.  Because
             * <code>isShowing</code> returns <code>false</code> when the applet's
             * <code>start</code> is first called, methods requiring
             * <code>isShowing</code> to return <code>true</code> should be called from
             * a <code>ComponentListener</code>.
             * <p>
             * The implementation of this method provided by the
             * <code>Applet</code> class does nothing.
             */
            // @ts-ignore
            public start(): void;
            /**
             * Called by the browser or applet viewer to inform
             * this applet that it should stop its execution. It is called when
             * the Web page that contains this applet has been replaced by
             * another page, and also just before the applet is to be destroyed.
             * <p>
             * A subclass of <code>Applet</code> should override this method if
             * it has any operation that it wants to perform each time the Web
             * page containing it is no longer visible. For example, an applet
             * with animation might want to use the <code>start</code> method to
             * resume animation, and the <code>stop</code> method to suspend the
             * animation.
             * <p>
             * The implementation of this method provided by the
             * <code>Applet</code> class does nothing.
             */
            // @ts-ignore
            public stop(): void;
            /**
             * Called by the browser or applet viewer to inform
             * this applet that it is being reclaimed and that it should destroy
             * any resources that it has allocated. The <code>stop</code> method
             * will always be called before <code>destroy</code>.
             * <p>
             * A subclass of <code>Applet</code> should override this method if
             * it has any operation that it wants to perform before it is
             * destroyed. For example, an applet with threads would use the
             * <code>init</code> method to create the threads and the
             * <code>destroy</code> method to kill them.
             * <p>
             * The implementation of this method provided by the
             * <code>Applet</code> class does nothing.
             */
            // @ts-ignore
            public destroy(): void;
            /**
             * Gets the AccessibleContext associated with this Applet.
             * For applets, the AccessibleContext takes the form of an
             * AccessibleApplet.
             * A new AccessibleApplet instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
