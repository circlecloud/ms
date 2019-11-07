// @ts-nocheck
declare namespace java {
    namespace beans {
        namespace beancontext {
            // @ts-ignore
             class BeanContextSupport extends java.beans.beancontext.BeanContextChildSupport {
                /**
                 * Construct a BeanContextSupport instance
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContext, lcle: java.util.Locale, dTime: boolean, visible: boolean)
                /**
                 * Create an instance using the specified Locale and design mode.
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContext, lcle: java.util.Locale, dtime: boolean)
                /**
                 * Create an instance using the specified locale
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContext, lcle: java.util.Locale)
                /**
                 * Create an instance using with a default locale
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContext)
                /**
                 * Create an instance that is not a delegate of another object
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                protected children: java.util.HashMap;
                // @ts-ignore
                protected bcmListeners: java.util.ArrayList;
                // @ts-ignore
                protected locale: java.util.Locale;
                // @ts-ignore
                protected designTime: boolean;
                /**
                 * Gets the instance of <tt>BeanContext</tt> that
                 * this object is providing the implementation for.
                 */
                // @ts-ignore
                public getBeanContextPeer(): java.beans.beancontext.BeanContext;
                /**
                 * <p>
                 * The instantiateChild method is a convenience hook
                 * in BeanContext to simplify
                 * the task of instantiating a Bean, nested,
                 * into a <tt>BeanContext</tt>.
                 * </p>
                 * <p>
                 * The semantics of the beanName parameter are defined by java.beans.Beans.instantiate.
                 * </p>
                 */
                // @ts-ignore
                public instantiateChild(beanName: string): java.lang.Object;
                /**
                 * Gets the number of children currently nested in
                 * this BeanContext.
                 */
                // @ts-ignore
                public size(): number;
                /**
                 * Reports whether or not this
                 * <tt>BeanContext</tt> is empty.
                 * A <tt>BeanContext</tt> is considered
                 * empty when it contains zero
                 * nested children.
                 */
                // @ts-ignore
                public isEmpty(): boolean;
                /**
                 * Determines whether or not the specified object
                 * is currently a child of this <tt>BeanContext</tt>.
                 */
                // @ts-ignore
                public contains(o: java.lang.Object): boolean;
                /**
                 * Determines whether or not the specified object
                 * is currently a child of this <tt>BeanContext</tt>.
                 */
                // @ts-ignore
                public containsKey(o: java.lang.Object): boolean;
                /**
                 * Gets all JavaBean or <tt>BeanContext</tt> instances
                 * currently nested in this <tt>BeanContext</tt>.
                 */
                // @ts-ignore
                public iterator(): java.util.Iterator;
                /**
                 * Gets all JavaBean or <tt>BeanContext</tt>
                 * instances currently nested in this BeanContext.
                 */
                // @ts-ignore
                public toArray(): java.lang.Object[];
                /**
                 * Gets an array containing all children of
                 * this <tt>BeanContext</tt> that match
                 * the types contained in arry.
                 */
                // @ts-ignore
                public toArray(arry: java.lang.Object): java.lang.Object[];
                /**
                 * <p>
                 * Subclasses can override this method to insert their own subclass
                 * of Child without having to override add() or the other Collection
                 * methods that add children to the set.
                 * </p>
                 */
                // @ts-ignore
                protected createBCSChild(targetChild: java.lang.Object, peer: java.lang.Object): java.beans.beancontext.BeanContextSupport.BCSChild;
                /**
                 * Adds/nests a child within this <tt>BeanContext</tt>.
                 * <p>
                 * Invoked as a side effect of java.beans.Beans.instantiate().
                 * If the child object is not valid for adding then this method
                 * throws an IllegalStateException.
                 * </p>
                 */
                // @ts-ignore
                public add(targetChild: java.lang.Object): boolean;
                /**
                 * Removes a child from this BeanContext.  If the child object is not
                 * for adding then this method throws an IllegalStateException.
                 */
                // @ts-ignore
                public remove(targetChild: java.lang.Object): boolean;
                /**
                 * internal remove used when removal caused by
                 * unexpected <tt>setBeanContext</tt> or
                 * by <tt>remove()</tt> invocation.
                 */
                // @ts-ignore
                protected remove(targetChild: java.lang.Object, callChildSetBC: boolean): boolean;
                /**
                 * Tests to see if all objects in the
                 * specified <tt>Collection</tt> are children of
                 * this <tt>BeanContext</tt>.
                 */
                // @ts-ignore
                public containsAll(c: java.util.Collection): boolean;
                /**
                 * add Collection to set of Children (Unsupported)
                 * implementations must synchronized on the hierarchy lock and "children" protected field
                 */
                // @ts-ignore
                public addAll(c: java.util.Collection): boolean;
                /**
                 * remove all specified children (Unsupported)
                 * implementations must synchronized on the hierarchy lock and "children" protected field
                 */
                // @ts-ignore
                public removeAll(c: java.util.Collection): boolean;
                /**
                 * retain only specified children (Unsupported)
                 * implementations must synchronized on the hierarchy lock and "children" protected field
                 */
                // @ts-ignore
                public retainAll(c: java.util.Collection): boolean;
                /**
                 * clear the children (Unsupported)
                 * implementations must synchronized on the hierarchy lock and "children" protected field
                 */
                // @ts-ignore
                public clear(): void;
                /**
                 * Adds a BeanContextMembershipListener
                 */
                // @ts-ignore
                public addBeanContextMembershipListener(bcml: java.beans.beancontext.BeanContextMembershipListener): void;
                /**
                 * Removes a BeanContextMembershipListener
                 */
                // @ts-ignore
                public removeBeanContextMembershipListener(bcml: java.beans.beancontext.BeanContextMembershipListener): void;
                // @ts-ignore
                public getResourceAsStream(name: string, bcc: java.beans.beancontext.BeanContextChild): java.io.InputStream;
                // @ts-ignore
                public getResource(name: string, bcc: java.beans.beancontext.BeanContextChild): java.net.URL;
                /**
                 * Sets the new design time value for this <tt>BeanContext</tt>.
                 */
                // @ts-ignore
                public setDesignTime(dTime: boolean): void;
                /**
                 * Reports whether or not this object is in
                 * currently in design time mode.
                 */
                // @ts-ignore
                public isDesignTime(): boolean;
                /**
                 * Sets the locale of this BeanContext.
                 */
                // @ts-ignore
                public setLocale(newLocale: java.util.Locale): void;
                /**
                 * Gets the locale for this <tt>BeanContext</tt>.
                 */
                // @ts-ignore
                public getLocale(): java.util.Locale;
                /**
                 * <p>
                 * This method is typically called from the environment in order to determine
                 * if the implementor "needs" a GUI.
                 * </p>
                 * <p>
                 * The algorithm used herein tests the BeanContextPeer, and its current children
                 * to determine if they are either Containers, Components, or if they implement
                 * Visibility and return needsGui() == true.
                 * </p>
                 */
                // @ts-ignore
                public needsGui(): boolean;
                /**
                 * notify this instance that it may no longer render a GUI.
                 */
                // @ts-ignore
                public dontUseGui(): void;
                /**
                 * Notify this instance that it may now render a GUI
                 */
                // @ts-ignore
                public okToUseGui(): void;
                /**
                 * Used to determine if the <tt>BeanContext</tt>
                 * child is avoiding using its GUI.
                 */
                // @ts-ignore
                public avoidingGui(): boolean;
                /**
                 * Is this <tt>BeanContext</tt> in the
                 * process of being serialized?
                 */
                // @ts-ignore
                public isSerializing(): boolean;
                /**
                 * Returns an iterator of all children
                 * of this <tt>BeanContext</tt>.
                 */
                // @ts-ignore
                protected bcsChildren(): java.util.Iterator;
                /**
                 * called by writeObject after defaultWriteObject() but prior to
                 * serialization of currently serializable children.
                 * This method may be overridden by subclasses to perform custom
                 * serialization of their state prior to this superclass serializing
                 * the children.
                 * This method should not however be used by subclasses to replace their
                 * own implementation (if any) of writeObject().
                 */
                // @ts-ignore
                protected bcsPreSerializationHook(oos: java.io.ObjectOutputStream): void;
                /**
                 * called by readObject after defaultReadObject() but prior to
                 * deserialization of any children.
                 * This method may be overridden by subclasses to perform custom
                 * deserialization of their state prior to this superclass deserializing
                 * the children.
                 * This method should not however be used by subclasses to replace their
                 * own implementation (if any) of readObject().
                 */
                // @ts-ignore
                protected bcsPreDeserializationHook(ois: java.io.ObjectInputStream): void;
                /**
                 * Called by readObject with the newly deserialized child and BCSChild.
                 */
                // @ts-ignore
                protected childDeserializedHook(child: java.lang.Object, bcsc: java.beans.beancontext.BeanContextSupport.BCSChild): void;
                /**
                 * Used by writeObject to serialize a Collection.
                 */
                // @ts-ignore
                protected serialize(oos: java.io.ObjectOutputStream, coll: java.util.Collection): void;
                /**
                 * used by readObject to deserialize a collection.
                 */
                // @ts-ignore
                protected deserialize(ois: java.io.ObjectInputStream, coll: java.util.Collection): void;
                /**
                 * Used to serialize all children of
                 * this <tt>BeanContext</tt>.
                 */
                // @ts-ignore
                public writeChildren(oos: java.io.ObjectOutputStream): void;
                /**
                 * When an instance of this class is used as a delegate for the
                 * implementation of the BeanContext protocols (and its subprotocols)
                 * there exists a 'chicken and egg' problem during deserialization
                 */
                // @ts-ignore
                public readChildren(ois: java.io.ObjectInputStream): void;
                /**
                 * subclasses may envelope to monitor veto child property changes.
                 */
                // @ts-ignore
                public vetoableChange(pce: java.beans.PropertyChangeEvent): void;
                /**
                 * subclasses may envelope to monitor child property changes.
                 */
                // @ts-ignore
                public propertyChange(pce: java.beans.PropertyChangeEvent): void;
                /**
                 * <p>
                 * Subclasses of this class may override, or envelope, this method to
                 * add validation behavior for the BeanContext to examine child objects
                 * immediately prior to their being added to the BeanContext.
                 * </p>
                 */
                // @ts-ignore
                protected validatePendingAdd(targetChild: java.lang.Object): boolean;
                /**
                 * <p>
                 * Subclasses of this class may override, or envelope, this method to
                 * add validation behavior for the BeanContext to examine child objects
                 * immediately prior to their being removed from the BeanContext.
                 * </p>
                 */
                // @ts-ignore
                protected validatePendingRemove(targetChild: java.lang.Object): boolean;
                /**
                 * subclasses may override this method to simply extend add() semantics
                 * after the child has been added and before the event notification has
                 * occurred. The method is called with the child synchronized.
                 */
                // @ts-ignore
                protected childJustAddedHook(child: java.lang.Object, bcsc: java.beans.beancontext.BeanContextSupport.BCSChild): void;
                /**
                 * subclasses may override this method to simply extend remove() semantics
                 * after the child has been removed and before the event notification has
                 * occurred. The method is called with the child synchronized.
                 */
                // @ts-ignore
                protected childJustRemovedHook(child: java.lang.Object, bcsc: java.beans.beancontext.BeanContextSupport.BCSChild): void;
                /**
                 * Gets the Component (if any) associated with the specified child.
                 */
                // @ts-ignore
                protected static getChildVisibility(child: java.lang.Object): java.beans.Visibility;
                /**
                 * Gets the Serializable (if any) associated with the specified Child
                 */
                // @ts-ignore
                protected static getChildSerializable(child: java.lang.Object): java.io.Serializable;
                /**
                 * Gets the PropertyChangeListener
                 * (if any) of the specified child
                 */
                // @ts-ignore
                protected static getChildPropertyChangeListener(child: java.lang.Object): java.beans.PropertyChangeListener;
                /**
                 * Gets the VetoableChangeListener
                 * (if any) of the specified child
                 */
                // @ts-ignore
                protected static getChildVetoableChangeListener(child: java.lang.Object): java.beans.VetoableChangeListener;
                /**
                 * Gets the BeanContextMembershipListener
                 * (if any) of the specified child
                 */
                // @ts-ignore
                protected static getChildBeanContextMembershipListener(child: java.lang.Object): java.beans.beancontext.BeanContextMembershipListener;
                /**
                 * Gets the BeanContextChild (if any) of the specified child
                 */
                // @ts-ignore
                protected static getChildBeanContextChild(child: java.lang.Object): java.beans.beancontext.BeanContextChild;
                /**
                 * Fire a BeanContextshipEvent on the BeanContextMembershipListener interface
                 */
                // @ts-ignore
                protected fireChildrenAdded(bcme: java.beans.beancontext.BeanContextMembershipEvent): void;
                /**
                 * Fire a BeanContextshipEvent on the BeanContextMembershipListener interface
                 */
                // @ts-ignore
                protected fireChildrenRemoved(bcme: java.beans.beancontext.BeanContextMembershipEvent): void;
                /**
                 * protected method called from constructor and readObject to initialize
                 * transient state of BeanContextSupport instance.
                 * This class uses this method to instantiate inner class listeners used
                 * to monitor PropertyChange and VetoableChange events on children.
                 * subclasses may envelope this method to add their own initialization
                 * behavior
                 */
                // @ts-ignore
                protected initialize(): void;
                /**
                 * Gets a copy of the this BeanContext's children.
                 */
                // @ts-ignore
                protected copyChildren(): java.lang.Object[];
                /**
                 * Tests to see if two class objects,
                 * or their names are equal.
                 */
                // @ts-ignore
                protected static classEquals(first: java.lang.Class, second: java.lang.Class): boolean;
            }
        }
    }
}
