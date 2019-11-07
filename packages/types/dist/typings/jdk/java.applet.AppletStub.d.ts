// @ts-nocheck
declare namespace java {
    namespace applet {
        // @ts-ignore
        interface AppletStub {
            /**
             * Determines if the applet is active. An applet is active just
             * before its <code>start</code> method is called. It becomes
             * inactive just before its <code>stop</code> method is called.
             */
            // @ts-ignore
             isActive(): boolean;
            /**
             * Gets the URL of the document in which the applet is embedded.
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
             getDocumentBase(): java.net.URL;
            /**
             * Gets the base URL. This is the URL of the directory which contains the applet.
             */
            // @ts-ignore
             getCodeBase(): java.net.URL;
            /**
             * Returns the value of the named parameter in the HTML tag. For
             * example, if an applet is specified as
             * <blockquote><pre>
             * &lt;applet code="Clock" width=50 height=50&gt;
             * &lt;param name=Color value="blue"&gt;
             * &lt;/applet&gt;
             * </pre></blockquote>
             * <p>
             * then a call to <code>getParameter("Color")</code> returns the
             * value <code>"blue"</code>.
             */
            // @ts-ignore
             getParameter(name: string): string;
            /**
             * Returns the applet's context.
             */
            // @ts-ignore
             getAppletContext(): java.applet.AppletContext;
            /**
             * Called when the applet wants to be resized.
             */
            // @ts-ignore
             appletResize(width: number, height: number): void;
        }
    }
}
