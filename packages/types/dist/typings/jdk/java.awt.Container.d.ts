// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class Container extends java.awt.Component {
            /**
             * Constructs a new Container. Containers can be extended directly,
             * but are lightweight in this case and must be contained by a parent
             * somewhere higher up in the component tree that is native.
             * (such as Frame for example).
             */
            // @ts-ignore
            constructor()
            /**
             * Gets the number of components in this panel.
             * <p>
             * Note: This method should be called under AWT tree lock.
             */
            // @ts-ignore
            public getComponentCount(): number;
            // @ts-ignore
            public countComponents(): number;
            /**
             * Gets the nth component in this container.
             * <p>
             * Note: This method should be called under AWT tree lock.
             */
            // @ts-ignore
            public getComponent(n: number): java.awt.Component;
            /**
             * Gets all the components in this container.
             * <p>
             * Note: This method should be called under AWT tree lock.
             */
            // @ts-ignore
            public getComponents(): java.awt.Component[];
            /**
             * Determines the insets of this container, which indicate the size
             * of the container's border.
             * <p>
             * A <code>Frame</code> object, for example, has a top inset that
             * corresponds to the height of the frame's title bar.
             */
            // @ts-ignore
            public getInsets(): java.awt.Insets;
            // @ts-ignore
            public insets(): java.awt.Insets;
            /**
             * Appends the specified component to the end of this container.
             * This is a convenience method for {@link #addImpl}.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * display the added component.
             */
            // @ts-ignore
            public add(comp: java.awt.Component): java.awt.Component;
            /**
             * Adds the specified component to this container.
             * This is a convenience method for {@link #addImpl}.
             * <p>
             * This method is obsolete as of 1.1.  Please use the
             * method <code>add(Component, Object)</code> instead.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * display the added component.
             */
            // @ts-ignore
            public add(name: string, comp: java.awt.Component): java.awt.Component;
            /**
             * Adds the specified component to this container at the given
             * position.
             * This is a convenience method for {@link #addImpl}.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * display the added component.
             */
            // @ts-ignore
            public add(comp: java.awt.Component, index: number): java.awt.Component;
            /**
             * Moves the specified component to the specified z-order index in
             * the container. The z-order determines the order that components
             * are painted; the component with the highest z-order paints first
             * and the component with the lowest z-order paints last.
             * Where components overlap, the component with the lower
             * z-order paints over the component with the higher z-order.
             * <p>
             * If the component is a child of some other container, it is
             * removed from that container before being added to this container.
             * The important difference between this method and
             * <code>java.awt.Container.add(Component, int)</code> is that this method
             * doesn't call <code>removeNotify</code> on the component while
             * removing it from its previous container unless necessary and when
             * allowed by the underlying native windowing system. This way, if the
             * component has the keyboard focus, it maintains the focus when
             * moved to the new position.
             * <p>
             * This property is guaranteed to apply only to lightweight
             * non-<code>Container</code> components.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             * <p>
             * <b>Note</b>: Not all platforms support changing the z-order of
             * heavyweight components from one container into another without
             * the call to <code>removeNotify</code>. There is no way to detect
             * whether a platform supports this, so developers shouldn't make
             * any assumptions.
             */
            // @ts-ignore
            public setComponentZOrder(comp: java.awt.Component, index: number): void;
            /**
             * Returns the z-order index of the component inside the container.
             * The higher a component is in the z-order hierarchy, the lower
             * its index.  The component with the lowest z-order index is
             * painted last, above all other child components.
             */
            // @ts-ignore
            public getComponentZOrder(comp: java.awt.Component): number;
            /**
             * Adds the specified component to the end of this container.
             * Also notifies the layout manager to add the component to
             * this container's layout using the specified constraints object.
             * This is a convenience method for {@link #addImpl}.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * display the added component.
             */
            // @ts-ignore
            public add(comp: java.awt.Component, constraints: java.lang.Object): void;
            /**
             * Adds the specified component to this container with the specified
             * constraints at the specified index.  Also notifies the layout
             * manager to add the component to the this container's layout using
             * the specified constraints object.
             * This is a convenience method for {@link #addImpl}.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * display the added component.
             */
            // @ts-ignore
            public add(comp: java.awt.Component, constraints: java.lang.Object, index: number): void;
            /**
             * Adds the specified component to this container at the specified
             * index. This method also notifies the layout manager to add
             * the component to this container's layout using the specified
             * constraints object via the <code>addLayoutComponent</code>
             * method.
             * <p>
             * The constraints are
             * defined by the particular layout manager being used.  For
             * example, the <code>BorderLayout</code> class defines five
             * constraints: <code>BorderLayout.NORTH</code>,
             * <code>BorderLayout.SOUTH</code>, <code>BorderLayout.EAST</code>,
             * <code>BorderLayout.WEST</code>, and <code>BorderLayout.CENTER</code>.
             * <p>
             * The <code>GridBagLayout</code> class requires a
             * <code>GridBagConstraints</code> object.  Failure to pass
             * the correct type of constraints object results in an
             * <code>IllegalArgumentException</code>.
             * <p>
             * If the current layout manager implements {@code LayoutManager2}, then
             * {@link LayoutManager2#addLayoutComponent(Component,Object)} is invoked on
             * it. If the current layout manager does not implement
             * {@code LayoutManager2}, and constraints is a {@code String}, then
             * {@link LayoutManager#addLayoutComponent(String,Component)} is invoked on it.
             * <p>
             * If the component is not an ancestor of this container and has a non-null
             * parent, it is removed from its current parent before it is added to this
             * container.
             * <p>
             * This is the method to override if a program needs to track
             * every add request to a container as all other add methods defer
             * to this one. An overriding method should
             * usually include a call to the superclass's version of the method:
             * <blockquote>
             * <code>super.addImpl(comp, constraints, index)</code>
             * </blockquote>
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * display the added component.
             */
            // @ts-ignore
            protected addImpl(comp: java.awt.Component, constraints: java.lang.Object, index: number): void;
            /**
             * Removes the component, specified by <code>index</code>,
             * from this container.
             * This method also notifies the layout manager to remove the
             * component from this container's layout via the
             * <code>removeLayoutComponent</code> method.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * reflect the changes.
             */
            // @ts-ignore
            public remove(index: number): void;
            /**
             * Removes the specified component from this container.
             * This method also notifies the layout manager to remove the
             * component from this container's layout via the
             * <code>removeLayoutComponent</code> method.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * reflect the changes.
             */
            // @ts-ignore
            public remove(comp: java.awt.Component): void;
            /**
             * Removes all the components from this container.
             * This method also notifies the layout manager to remove the
             * components from this container's layout via the
             * <code>removeLayoutComponent</code> method.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * reflect the changes.
             */
            // @ts-ignore
            public removeAll(): void;
            /**
             * Gets the layout manager for this container.
             */
            // @ts-ignore
            public getLayout(): java.awt.LayoutManager;
            /**
             * Sets the layout manager for this container.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             */
            // @ts-ignore
            public setLayout(mgr: java.awt.LayoutManager): void;
            /**
             * Causes this container to lay out its components.  Most programs
             * should not call this method directly, but should invoke
             * the <code>validate</code> method instead.
             */
            // @ts-ignore
            public doLayout(): void;
            // @ts-ignore
            public layout(): void;
            /**
             * Indicates if this container is a <i>validate root</i>.
             * <p>
             * Layout-related changes, such as bounds of the validate root descendants,
             * do not affect the layout of the validate root parent. This peculiarity
             * enables the {@code invalidate()} method to stop invalidating the
             * component hierarchy when the method encounters a validate root. However,
             * to preserve backward compatibility this new optimized behavior is
             * enabled only when the {@code java.awt.smartInvalidate} system property
             * value is set to {@code true}.
             * <p>
             * If a component hierarchy contains validate roots and the new optimized
             * {@code invalidate()} behavior is enabled, the {@code validate()} method
             * must be invoked on the validate root of a previously invalidated
             * component to restore the validity of the hierarchy later. Otherwise,
             * calling the {@code validate()} method on the top-level container (such
             * as a {@code Frame} object) should be used to restore the validity of the
             * component hierarchy.
             * <p>
             * The {@code Window} class and the {@code Applet} class are the validate
             * roots in AWT.  Swing introduces more validate roots.
             */
            // @ts-ignore
            public isValidateRoot(): boolean;
            /**
             * Invalidates the container.
             * <p>
             * If the {@code LayoutManager} installed on this container is an instance
             * of the {@code LayoutManager2} interface, then
             * the {@link LayoutManager2#invalidateLayout(Container)} method is invoked
             * on it supplying this {@code Container} as the argument.
             * <p>
             * Afterwards this method marks this container invalid, and invalidates its
             * ancestors. See the {@link Component#invalidate} method for more details.
             */
            // @ts-ignore
            public invalidate(): void;
            /**
             * Validates this container and all of its subcomponents.
             * <p>
             * Validating a container means laying out its subcomponents.
             * Layout-related changes, such as setting the bounds of a component, or
             * adding a component to the container, invalidate the container
             * automatically.  Note that the ancestors of the container may be
             * invalidated also (see {@link Component#invalidate} for details.)
             * Therefore, to restore the validity of the hierarchy, the {@code
             * validate()} method should be invoked on the top-most invalid
             * container of the hierarchy.
             * <p>
             * Validating the container may be a quite time-consuming operation. For
             * performance reasons a developer may postpone the validation of the
             * hierarchy till a set of layout-related operations completes, e.g. after
             * adding all the children to the container.
             * <p>
             * If this {@code Container} is not valid, this method invokes
             * the {@code validateTree} method and marks this {@code Container}
             * as valid. Otherwise, no action is performed.
             */
            // @ts-ignore
            public validate(): void;
            /**
             * Recursively descends the container tree and recomputes the
             * layout for any subtrees marked as needing it (those marked as
             * invalid).  Synchronization should be provided by the method
             * that calls this one:  <code>validate</code>.
             */
            // @ts-ignore
            protected validateTree(): void;
            /**
             * Sets the font of this container.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             */
            // @ts-ignore
            public setFont(f: java.awt.Font): void;
            /**
             * Returns the preferred size of this container.  If the preferred size has
             * not been set explicitly by {@link Component#setPreferredSize(Dimension)}
             * and this {@code Container} has a {@code non-null} {@link LayoutManager},
             * then {@link LayoutManager#preferredLayoutSize(Container)}
             * is used to calculate the preferred size.
             * <p>Note: some implementations may cache the value returned from the
             * {@code LayoutManager}.  Implementations that cache need not invoke
             * {@code preferredLayoutSize} on the {@code LayoutManager} every time
             * this method is invoked, rather the {@code LayoutManager} will only
             * be queried after the {@code Container} becomes invalid.
             */
            // @ts-ignore
            public getPreferredSize(): java.awt.Dimension;
            // @ts-ignore
            public preferredSize(): java.awt.Dimension;
            /**
             * Returns the minimum size of this container.  If the minimum size has
             * not been set explicitly by {@link Component#setMinimumSize(Dimension)}
             * and this {@code Container} has a {@code non-null} {@link LayoutManager},
             * then {@link LayoutManager#minimumLayoutSize(Container)}
             * is used to calculate the minimum size.
             * <p>Note: some implementations may cache the value returned from the
             * {@code LayoutManager}.  Implementations that cache need not invoke
             * {@code minimumLayoutSize} on the {@code LayoutManager} every time
             * this method is invoked, rather the {@code LayoutManager} will only
             * be queried after the {@code Container} becomes invalid.
             */
            // @ts-ignore
            public getMinimumSize(): java.awt.Dimension;
            // @ts-ignore
            public minimumSize(): java.awt.Dimension;
            /**
             * Returns the maximum size of this container.  If the maximum size has
             * not been set explicitly by {@link Component#setMaximumSize(Dimension)}
             * and the {@link LayoutManager} installed on this {@code Container}
             * is an instance of {@link LayoutManager2}, then
             * {@link LayoutManager2#maximumLayoutSize(Container)}
             * is used to calculate the maximum size.
             * <p>Note: some implementations may cache the value returned from the
             * {@code LayoutManager2}.  Implementations that cache need not invoke
             * {@code maximumLayoutSize} on the {@code LayoutManager2} every time
             * this method is invoked, rather the {@code LayoutManager2} will only
             * be queried after the {@code Container} becomes invalid.
             */
            // @ts-ignore
            public getMaximumSize(): java.awt.Dimension;
            /**
             * Returns the alignment along the x axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             */
            // @ts-ignore
            public getAlignmentX(): number;
            /**
             * Returns the alignment along the y axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             */
            // @ts-ignore
            public getAlignmentY(): number;
            /**
             * Paints the container. This forwards the paint to any lightweight
             * components that are children of this container. If this method is
             * reimplemented, super.paint(g) should be called so that lightweight
             * components are properly rendered. If a child component is entirely
             * clipped by the current clipping setting in g, paint() will not be
             * forwarded to that child.
             */
            // @ts-ignore
            public paint(g: java.awt.Graphics): void;
            /**
             * Updates the container.  This forwards the update to any lightweight
             * components that are children of this container.  If this method is
             * reimplemented, super.update(g) should be called so that lightweight
             * components are properly rendered.  If a child component is entirely
             * clipped by the current clipping setting in g, update() will not be
             * forwarded to that child.
             */
            // @ts-ignore
            public update(g: java.awt.Graphics): void;
            /**
             * Prints the container. This forwards the print to any lightweight
             * components that are children of this container. If this method is
             * reimplemented, super.print(g) should be called so that lightweight
             * components are properly rendered. If a child component is entirely
             * clipped by the current clipping setting in g, print() will not be
             * forwarded to that child.
             */
            // @ts-ignore
            public print(g: java.awt.Graphics): void;
            /**
             * Paints each of the components in this container.
             */
            // @ts-ignore
            public paintComponents(g: java.awt.Graphics): void;
            /**
             * Prints each of the components in this container.
             */
            // @ts-ignore
            public printComponents(g: java.awt.Graphics): void;
            /**
             * Adds the specified container listener to receive container events
             * from this container.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addContainerListener(l: java.awt.event.ContainerListener): void;
            /**
             * Removes the specified container listener so it no longer receives
             * container events from this container.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeContainerListener(l: java.awt.event.ContainerListener): void;
            /**
             * Returns an array of all the container listeners
             * registered on this container.
             */
            // @ts-ignore
            public getContainerListeners(): java.awt.event.ContainerListener[];
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>Container</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>Container</code> <code>c</code>
             * for its container listeners with the following code:
             * <pre>ContainerListener[] cls = (ContainerListener[])(c.getListeners(ContainerListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             */
            // @ts-ignore
            public getListeners(listenerType: java.lang.Class): java.util.EventListener[];
            /**
             * Processes events on this container. If the event is a
             * <code>ContainerEvent</code>, it invokes the
             * <code>processContainerEvent</code> method, else it invokes
             * its superclass's <code>processEvent</code>.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processEvent(e: java.awt.AWTEvent): void;
            /**
             * Processes container events occurring on this container by
             * dispatching them to any registered ContainerListener objects.
             * NOTE: This method will not be called unless container events
             * are enabled for this component; this happens when one of the
             * following occurs:
             * <ul>
             * <li>A ContainerListener object is registered via
             * <code>addContainerListener</code>
             * <li>Container events are enabled via <code>enableEvents</code>
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processContainerEvent(e: java.awt.event.ContainerEvent): void;
            // @ts-ignore
            public deliverEvent(e: java.awt.Event): void;
            /**
             * Locates the component that contains the x,y position.  The
             * top-most child component is returned in the case where there
             * is overlap in the components.  This is determined by finding
             * the component closest to the index 0 that claims to contain
             * the given point via Component.contains(), except that Components
             * which have native peers take precedence over those which do not
             * (i.e., lightweight Components).
             */
            // @ts-ignore
            public getComponentAt(x: number, y: number): java.awt.Component;
            // @ts-ignore
            public locate(x: number, y: number): java.awt.Component;
            /**
             * Gets the component that contains the specified point.
             */
            // @ts-ignore
            public getComponentAt(p: java.awt.Point): java.awt.Component;
            /**
             * Returns the position of the mouse pointer in this <code>Container</code>'s
             * coordinate space if the <code>Container</code> is under the mouse pointer,
             * otherwise returns <code>null</code>.
             * This method is similar to {@link Component#getMousePosition()} with the exception
             * that it can take the <code>Container</code>'s children into account.
             * If <code>allowChildren</code> is <code>false</code>, this method will return
             * a non-null value only if the mouse pointer is above the <code>Container</code>
             * directly, not above the part obscured by children.
             * If <code>allowChildren</code> is <code>true</code>, this method returns
             * a non-null value if the mouse pointer is above <code>Container</code> or any
             * of its descendants.
             */
            // @ts-ignore
            public getMousePosition(allowChildren: boolean): java.awt.Point;
            /**
             * Locates the visible child component that contains the specified
             * position.  The top-most child component is returned in the case
             * where there is overlap in the components.  If the containing child
             * component is a Container, this method will continue searching for
             * the deepest nested child component.  Components which are not
             * visible are ignored during the search.<p>
             * The findComponentAt method is different from getComponentAt in
             * that getComponentAt only searches the Container's immediate
             * children; if the containing component is a Container,
             * findComponentAt will search that child to find a nested component.
             */
            // @ts-ignore
            public findComponentAt(x: number, y: number): java.awt.Component;
            /**
             * Locates the visible child component that contains the specified
             * point.  The top-most child component is returned in the case
             * where there is overlap in the components.  If the containing child
             * component is a Container, this method will continue searching for
             * the deepest nested child component.  Components which are not
             * visible are ignored during the search.<p>
             * The findComponentAt method is different from getComponentAt in
             * that getComponentAt only searches the Container's immediate
             * children; if the containing component is a Container,
             * findComponentAt will search that child to find a nested component.
             */
            // @ts-ignore
            public findComponentAt(p: java.awt.Point): java.awt.Component;
            /**
             * Makes this Container displayable by connecting it to
             * a native screen resource.  Making a container displayable will
             * cause all of its children to be made displayable.
             * This method is called internally by the toolkit and should
             * not be called directly by programs.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Makes this Container undisplayable by removing its connection
             * to its native screen resource.  Making a container undisplayable
             * will cause all of its children to be made undisplayable.
             * This method is called by the toolkit internally and should
             * not be called directly by programs.
             */
            // @ts-ignore
            public removeNotify(): void;
            /**
             * Checks if the component is contained in the component hierarchy of
             * this container.
             */
            // @ts-ignore
            public isAncestorOf(c: java.awt.Component): boolean;
            /**
             * Returns a string representing the state of this <code>Container</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            protected paramString(): string;
            /**
             * Prints a listing of this container to the specified output
             * stream. The listing starts at the specified indentation.
             * <p>
             * The immediate children of the container are printed with
             * an indentation of <code>indent+1</code>.  The children
             * of those children are printed at <code>indent+2</code>
             * and so on.
             */
            // @ts-ignore
            public list(out: java.io.PrintStream, indent: number): void;
            /**
             * Prints out a list, starting at the specified indentation,
             * to the specified print writer.
             * <p>
             * The immediate children of the container are printed with
             * an indentation of <code>indent+1</code>.  The children
             * of those children are printed at <code>indent+2</code>
             * and so on.
             */
            // @ts-ignore
            public list(out: java.io.PrintWriter, indent: number): void;
            /**
             * Sets the focus traversal keys for a given traversal operation for this
             * Container.
             * <p>
             * The default values for a Container's focus traversal keys are
             * implementation-dependent. Sun recommends that all implementations for a
             * particular native platform use the same default values. The
             * recommendations for Windows and Unix are listed below. These
             * recommendations are used in the Sun AWT implementations.
             * <table border=1 summary="Recommended default values for a Container's focus traversal keys">
             * <tr>
             * <th>Identifier</th>
             * <th>Meaning</th>
             * <th>Default</th>
             * </tr>
             * <tr>
             * <td>KeyboardFocusManager.FORWARD_TRAVERSAL_KEYS</td>
             * <td>Normal forward keyboard traversal</td>
             * <td>TAB on KEY_PRESSED, CTRL-TAB on KEY_PRESSED</td>
             * </tr>
             * <tr>
             * <td>KeyboardFocusManager.BACKWARD_TRAVERSAL_KEYS</td>
             * <td>Normal reverse keyboard traversal</td>
             * <td>SHIFT-TAB on KEY_PRESSED, CTRL-SHIFT-TAB on KEY_PRESSED</td>
             * </tr>
             * <tr>
             * <td>KeyboardFocusManager.UP_CYCLE_TRAVERSAL_KEYS</td>
             * <td>Go up one focus traversal cycle</td>
             * <td>none</td>
             * </tr>
             * <tr>
             * <td>KeyboardFocusManager.DOWN_CYCLE_TRAVERSAL_KEYS<td>
             * <td>Go down one focus traversal cycle</td>
             * <td>none</td>
             * </tr>
             * </table>
             * To disable a traversal key, use an empty Set; Collections.EMPTY_SET is
             * recommended.
             * <p>
             * Using the AWTKeyStroke API, client code can specify on which of two
             * specific KeyEvents, KEY_PRESSED or KEY_RELEASED, the focus traversal
             * operation will occur. Regardless of which KeyEvent is specified,
             * however, all KeyEvents related to the focus traversal key, including the
             * associated KEY_TYPED event, will be consumed, and will not be dispatched
             * to any Container. It is a runtime error to specify a KEY_TYPED event as
             * mapping to a focus traversal operation, or to map the same event to
             * multiple default focus traversal operations.
             * <p>
             * If a value of null is specified for the Set, this Container inherits the
             * Set from its parent. If all ancestors of this Container have null
             * specified for the Set, then the current KeyboardFocusManager's default
             * Set is used.
             * <p>
             * This method may throw a {@code ClassCastException} if any {@code Object}
             * in {@code keystrokes} is not an {@code AWTKeyStroke}.
             */
            // @ts-ignore
            public setFocusTraversalKeys(id: number, keystrokes: java.util.Set): void;
            /**
             * Returns the Set of focus traversal keys for a given traversal operation
             * for this Container. (See
             * <code>setFocusTraversalKeys</code> for a full description of each key.)
             * <p>
             * If a Set of traversal keys has not been explicitly defined for this
             * Container, then this Container's parent's Set is returned. If no Set
             * has been explicitly defined for any of this Container's ancestors, then
             * the current KeyboardFocusManager's default Set is returned.
             */
            // @ts-ignore
            public getFocusTraversalKeys(id: number): java.util.Set;
            /**
             * Returns whether the Set of focus traversal keys for the given focus
             * traversal operation has been explicitly defined for this Container. If
             * this method returns <code>false</code>, this Container is inheriting the
             * Set from an ancestor, or from the current KeyboardFocusManager.
             */
            // @ts-ignore
            public areFocusTraversalKeysSet(id: number): boolean;
            /**
             * Returns whether the specified Container is the focus cycle root of this
             * Container's focus traversal cycle. Each focus traversal cycle has only
             * a single focus cycle root and each Container which is not a focus cycle
             * root belongs to only a single focus traversal cycle. Containers which
             * are focus cycle roots belong to two cycles: one rooted at the Container
             * itself, and one rooted at the Container's nearest focus-cycle-root
             * ancestor. This method will return <code>true</code> for both such
             * Containers in this case.
             */
            // @ts-ignore
            public isFocusCycleRoot(container: java.awt.Container): boolean;
            /**
             * Sets the focus traversal policy that will manage keyboard traversal of
             * this Container's children, if this Container is a focus cycle root. If
             * the argument is null, this Container inherits its policy from its focus-
             * cycle-root ancestor. If the argument is non-null, this policy will be
             * inherited by all focus-cycle-root children that have no keyboard-
             * traversal policy of their own (as will, recursively, their focus-cycle-
             * root children).
             * <p>
             * If this Container is not a focus cycle root, the policy will be
             * remembered, but will not be used or inherited by this or any other
             * Containers until this Container is made a focus cycle root.
             */
            // @ts-ignore
            public setFocusTraversalPolicy(policy: java.awt.FocusTraversalPolicy): void;
            /**
             * Returns the focus traversal policy that will manage keyboard traversal
             * of this Container's children, or null if this Container is not a focus
             * cycle root. If no traversal policy has been explicitly set for this
             * Container, then this Container's focus-cycle-root ancestor's policy is
             * returned.
             */
            // @ts-ignore
            public getFocusTraversalPolicy(): java.awt.FocusTraversalPolicy;
            /**
             * Returns whether the focus traversal policy has been explicitly set for
             * this Container. If this method returns <code>false</code>, this
             * Container will inherit its focus traversal policy from an ancestor.
             */
            // @ts-ignore
            public isFocusTraversalPolicySet(): boolean;
            /**
             * Sets whether this Container is the root of a focus traversal cycle. Once
             * focus enters a traversal cycle, typically it cannot leave it via focus
             * traversal unless one of the up- or down-cycle keys is pressed. Normal
             * traversal is limited to this Container, and all of this Container's
             * descendants that are not descendants of inferior focus cycle roots. Note
             * that a FocusTraversalPolicy may bend these restrictions, however. For
             * example, ContainerOrderFocusTraversalPolicy supports implicit down-cycle
             * traversal.
             * <p>
             * The alternative way to specify the traversal order of this Container's
             * children is to make this Container a
             * <a href="doc-files/FocusSpec.html#FocusTraversalPolicyProviders">focus traversal policy provider</a>.
             */
            // @ts-ignore
            public setFocusCycleRoot(focusCycleRoot: boolean): void;
            /**
             * Returns whether this Container is the root of a focus traversal cycle.
             * Once focus enters a traversal cycle, typically it cannot leave it via
             * focus traversal unless one of the up- or down-cycle keys is pressed.
             * Normal traversal is limited to this Container, and all of this
             * Container's descendants that are not descendants of inferior focus
             * cycle roots. Note that a FocusTraversalPolicy may bend these
             * restrictions, however. For example, ContainerOrderFocusTraversalPolicy
             * supports implicit down-cycle traversal.
             */
            // @ts-ignore
            public isFocusCycleRoot(): boolean;
            /**
             * Sets whether this container will be used to provide focus
             * traversal policy. Container with this property as
             * <code>true</code> will be used to acquire focus traversal policy
             * instead of closest focus cycle root ancestor.
             */
            // @ts-ignore
            public setFocusTraversalPolicyProvider(provider: boolean): void;
            /**
             * Returns whether this container provides focus traversal
             * policy. If this property is set to <code>true</code> then when
             * keyboard focus manager searches container hierarchy for focus
             * traversal policy and encounters this container before any other
             * container with this property as true or focus cycle roots then
             * its focus traversal policy will be used instead of focus cycle
             * root's policy.
             */
            // @ts-ignore
            public isFocusTraversalPolicyProvider(): boolean;
            /**
             * Transfers the focus down one focus traversal cycle. If this Container is
             * a focus cycle root, then the focus owner is set to this Container's
             * default Component to focus, and the current focus cycle root is set to
             * this Container. If this Container is not a focus cycle root, then no
             * focus traversal operation occurs.
             */
            // @ts-ignore
            public transferFocusDownCycle(): void;
            /**
             * Sets the <code>ComponentOrientation</code> property of this container
             * and all components contained within it.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             */
            // @ts-ignore
            public applyComponentOrientation(o: java.awt.ComponentOrientation): void;
            /**
             * Adds a PropertyChangeListener to the listener list. The listener is
             * registered for all bound properties of this class, including the
             * following:
             * <ul>
             * <li>this Container's font ("font")</li>
             * <li>this Container's background color ("background")</li>
             * <li>this Container's foreground color ("foreground")</li>
             * <li>this Container's focusability ("focusable")</li>
             * <li>this Container's focus traversal keys enabled state
             * ("focusTraversalKeysEnabled")</li>
             * <li>this Container's Set of FORWARD_TRAVERSAL_KEYS
             * ("forwardFocusTraversalKeys")</li>
             * <li>this Container's Set of BACKWARD_TRAVERSAL_KEYS
             * ("backwardFocusTraversalKeys")</li>
             * <li>this Container's Set of UP_CYCLE_TRAVERSAL_KEYS
             * ("upCycleFocusTraversalKeys")</li>
             * <li>this Container's Set of DOWN_CYCLE_TRAVERSAL_KEYS
             * ("downCycleFocusTraversalKeys")</li>
             * <li>this Container's focus traversal policy ("focusTraversalPolicy")
             * </li>
             * <li>this Container's focus-cycle-root state ("focusCycleRoot")</li>
             * </ul>
             * Note that if this Container is inheriting a bound property, then no
             * event will be fired in response to a change in the inherited property.
             * <p>
             * If listener is null, no exception is thrown and no action is performed.
             */
            // @ts-ignore
            public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
            /**
             * Adds a PropertyChangeListener to the listener list for a specific
             * property. The specified property may be user-defined, or one of the
             * following defaults:
             * <ul>
             * <li>this Container's font ("font")</li>
             * <li>this Container's background color ("background")</li>
             * <li>this Container's foreground color ("foreground")</li>
             * <li>this Container's focusability ("focusable")</li>
             * <li>this Container's focus traversal keys enabled state
             * ("focusTraversalKeysEnabled")</li>
             * <li>this Container's Set of FORWARD_TRAVERSAL_KEYS
             * ("forwardFocusTraversalKeys")</li>
             * <li>this Container's Set of BACKWARD_TRAVERSAL_KEYS
             * ("backwardFocusTraversalKeys")</li>
             * <li>this Container's Set of UP_CYCLE_TRAVERSAL_KEYS
             * ("upCycleFocusTraversalKeys")</li>
             * <li>this Container's Set of DOWN_CYCLE_TRAVERSAL_KEYS
             * ("downCycleFocusTraversalKeys")</li>
             * <li>this Container's focus traversal policy ("focusTraversalPolicy")
             * </li>
             * <li>this Container's focus-cycle-root state ("focusCycleRoot")</li>
             * <li>this Container's focus-traversal-policy-provider state("focusTraversalPolicyProvider")</li>
             * <li>this Container's focus-traversal-policy-provider state("focusTraversalPolicyProvider")</li>
             * </ul>
             * Note that if this Container is inheriting a bound property, then no
             * event will be fired in response to a change in the inherited property.
             * <p>
             * If listener is null, no exception is thrown and no action is performed.
             */
            // @ts-ignore
            public addPropertyChangeListener(propertyName: string, listener: java.beans.PropertyChangeListener): void;
        }
    }
}
