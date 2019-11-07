declare namespace java {
    namespace util {
        namespace prefs {
            // @ts-ignore
            abstract class AbstractPreferences extends java.util.prefs.Preferences {
                /**
                 * Creates a preference node with the specified parent and the specified
                 * name relative to its parent.
                 */
                // @ts-ignore
                constructor(parent: java.util.prefs.AbstractPreferences, name: string)
                // @ts-ignore
                protected newNode: boolean;
                // @ts-ignore
                protected lock: java.lang.Object;
                /**
                 * Implements the <tt>put</tt> method as per the specification in
                 * {@link Preferences#put(String,String)}.
                 * <p>This implementation checks that the key and value are legal,
                 * obtains this preference node's lock, checks that the node
                 * has not been removed, invokes {@link #putSpi(String,String)}, and if
                 * there are any preference change listeners, enqueues a notification
                 * event for processing by the event dispatch thread.
                 */
                // @ts-ignore
                public put(key: string, value: string): void;
                /**
                 * Implements the <tt>get</tt> method as per the specification in
                 * {@link Preferences#get(String,String)}.
                 * <p>This implementation first checks to see if <tt>key</tt> is
                 * <tt>null</tt> throwing a <tt>NullPointerException</tt> if this is
                 * the case.  Then it obtains this preference node's lock,
                 * checks that the node has not been removed, invokes {@link
                 * #getSpi(String)}, and returns the result, unless the <tt>getSpi</tt>
                 * invocation returns <tt>null</tt> or throws an exception, in which case
                 * this invocation returns <tt>def</tt>.
                 */
                // @ts-ignore
                public get(key: string, def: string): string;
                /**
                 * Implements the <tt>remove(String)</tt> method as per the specification
                 * in {@link Preferences#remove(String)}.
                 * <p>This implementation obtains this preference node's lock,
                 * checks that the node has not been removed, invokes
                 * {@link #removeSpi(String)} and if there are any preference
                 * change listeners, enqueues a notification event for processing by the
                 * event dispatch thread.
                 */
                // @ts-ignore
                public remove(key: string): void;
                /**
                 * Implements the <tt>clear</tt> method as per the specification in
                 * {@link Preferences#clear()}.
                 * <p>This implementation obtains this preference node's lock,
                 * invokes {@link #keys()} to obtain an array of keys, and
                 * iterates over the array invoking {@link #remove(String)} on each key.
                 */
                // @ts-ignore
                public clear(): void;
                /**
                 * Implements the <tt>putInt</tt> method as per the specification in
                 * {@link Preferences#putInt(String,int)}.
                 * <p>This implementation translates <tt>value</tt> to a string with
                 * {@link Integer#toString(int)} and invokes {@link #put(String,String)}
                 * on the result.
                 */
                // @ts-ignore
                public putInt(key: string, value: number): void;
                /**
                 * Implements the <tt>getInt</tt> method as per the specification in
                 * {@link Preferences#getInt(String,int)}.
                 * <p>This implementation invokes {@link #get(String,String) <tt>get(key,
                 * null)</tt>}.  If the return value is non-null, the implementation
                 * attempts to translate it to an <tt>int</tt> with
                 * {@link Integer#parseInt(String)}.  If the attempt succeeds, the return
                 * value is returned by this method.  Otherwise, <tt>def</tt> is returned.
                 */
                // @ts-ignore
                public getInt(key: string, def: number): number;
                /**
                 * Implements the <tt>putLong</tt> method as per the specification in
                 * {@link Preferences#putLong(String,long)}.
                 * <p>This implementation translates <tt>value</tt> to a string with
                 * {@link Long#toString(long)} and invokes {@link #put(String,String)}
                 * on the result.
                 */
                // @ts-ignore
                public putLong(key: string, value: number): void;
                /**
                 * Implements the <tt>getLong</tt> method as per the specification in
                 * {@link Preferences#getLong(String,long)}.
                 * <p>This implementation invokes {@link #get(String,String) <tt>get(key,
                 * null)</tt>}.  If the return value is non-null, the implementation
                 * attempts to translate it to a <tt>long</tt> with
                 * {@link Long#parseLong(String)}.  If the attempt succeeds, the return
                 * value is returned by this method.  Otherwise, <tt>def</tt> is returned.
                 */
                // @ts-ignore
                public getLong(key: string, def: number): number;
                /**
                 * Implements the <tt>putBoolean</tt> method as per the specification in
                 * {@link Preferences#putBoolean(String,boolean)}.
                 * <p>This implementation translates <tt>value</tt> to a string with
                 * {@link String#valueOf(boolean)} and invokes {@link #put(String,String)}
                 * on the result.
                 */
                // @ts-ignore
                public putBoolean(key: string, value: boolean): void;
                /**
                 * Implements the <tt>getBoolean</tt> method as per the specification in
                 * {@link Preferences#getBoolean(String,boolean)}.
                 * <p>This implementation invokes {@link #get(String,String) <tt>get(key,
                 * null)</tt>}.  If the return value is non-null, it is compared with
                 * <tt>"true"</tt> using {@link String#equalsIgnoreCase(String)}.  If the
                 * comparison returns <tt>true</tt>, this invocation returns
                 * <tt>true</tt>.  Otherwise, the original return value is compared with
                 * <tt>"false"</tt>, again using {@link String#equalsIgnoreCase(String)}.
                 * If the comparison returns <tt>true</tt>, this invocation returns
                 * <tt>false</tt>.  Otherwise, this invocation returns <tt>def</tt>.
                 */
                // @ts-ignore
                public getBoolean(key: string, def: boolean): boolean;
                /**
                 * Implements the <tt>putFloat</tt> method as per the specification in
                 * {@link Preferences#putFloat(String,float)}.
                 * <p>This implementation translates <tt>value</tt> to a string with
                 * {@link Float#toString(float)} and invokes {@link #put(String,String)}
                 * on the result.
                 */
                // @ts-ignore
                public putFloat(key: string, value: number): void;
                /**
                 * Implements the <tt>getFloat</tt> method as per the specification in
                 * {@link Preferences#getFloat(String,float)}.
                 * <p>This implementation invokes {@link #get(String,String) <tt>get(key,
                 * null)</tt>}.  If the return value is non-null, the implementation
                 * attempts to translate it to an <tt>float</tt> with
                 * {@link Float#parseFloat(String)}.  If the attempt succeeds, the return
                 * value is returned by this method.  Otherwise, <tt>def</tt> is returned.
                 */
                // @ts-ignore
                public getFloat(key: string, def: number): number;
                /**
                 * Implements the <tt>putDouble</tt> method as per the specification in
                 * {@link Preferences#putDouble(String,double)}.
                 * <p>This implementation translates <tt>value</tt> to a string with
                 * {@link Double#toString(double)} and invokes {@link #put(String,String)}
                 * on the result.
                 */
                // @ts-ignore
                public putDouble(key: string, value: number): void;
                /**
                 * Implements the <tt>getDouble</tt> method as per the specification in
                 * {@link Preferences#getDouble(String,double)}.
                 * <p>This implementation invokes {@link #get(String,String) <tt>get(key,
                 * null)</tt>}.  If the return value is non-null, the implementation
                 * attempts to translate it to an <tt>double</tt> with
                 * {@link Double#parseDouble(String)}.  If the attempt succeeds, the return
                 * value is returned by this method.  Otherwise, <tt>def</tt> is returned.
                 */
                // @ts-ignore
                public getDouble(key: string, def: number): number;
                /**
                 * Implements the <tt>putByteArray</tt> method as per the specification in
                 * {@link Preferences#putByteArray(String,byte[])}.
                 */
                // @ts-ignore
                public putByteArray(key: string, value: number): void;
                /**
                 * Implements the <tt>getByteArray</tt> method as per the specification in
                 * {@link Preferences#getByteArray(String,byte[])}.
                 */
                // @ts-ignore
                public getByteArray(key: string, def: number): number[];
                /**
                 * Implements the <tt>keys</tt> method as per the specification in
                 * {@link Preferences#keys()}.
                 * <p>This implementation obtains this preference node's lock, checks that
                 * the node has not been removed and invokes {@link #keysSpi()}.
                 */
                // @ts-ignore
                public keys(): java.lang.String[];
                /**
                 * Implements the <tt>children</tt> method as per the specification in
                 * {@link Preferences#childrenNames()}.
                 * <p>This implementation obtains this preference node's lock, checks that
                 * the node has not been removed, constructs a <tt>TreeSet</tt> initialized
                 * to the names of children already cached (the children in this node's
                 * "child-cache"), invokes {@link #childrenNamesSpi()}, and adds all of the
                 * returned child-names into the set.  The elements of the tree set are
                 * dumped into a <tt>String</tt> array using the <tt>toArray</tt> method,
                 * and this array is returned.
                 */
                // @ts-ignore
                public childrenNames(): java.lang.String[];
                /**
                 * Returns all known unremoved children of this node.
                 */
                // @ts-ignore
                protected cachedChildren(): java.util.prefs.AbstractPreferences[];
                /**
                 * Implements the <tt>parent</tt> method as per the specification in
                 * {@link Preferences#parent()}.
                 * <p>This implementation obtains this preference node's lock, checks that
                 * the node has not been removed and returns the parent value that was
                 * passed to this node's constructor.
                 */
                // @ts-ignore
                public parent(): java.util.prefs.Preferences;
                /**
                 * Implements the <tt>node</tt> method as per the specification in
                 * {@link Preferences#node(String)}.
                 * <p>This implementation obtains this preference node's lock and checks
                 * that the node has not been removed.  If <tt>path</tt> is <tt>""</tt>,
                 * this node is returned; if <tt>path</tt> is <tt>"/"</tt>, this node's
                 * root is returned.  If the first character in <tt>path</tt> is
                 * not <tt>'/'</tt>, the implementation breaks <tt>path</tt> into
                 * tokens and recursively traverses the path from this node to the
                 * named node, "consuming" a name and a slash from <tt>path</tt> at
                 * each step of the traversal.  At each step, the current node is locked
                 * and the node's child-cache is checked for the named node.  If it is
                 * not found, the name is checked to make sure its length does not
                 * exceed <tt>MAX_NAME_LENGTH</tt>.  Then the {@link #childSpi(String)}
                 * method is invoked, and the result stored in this node's child-cache.
                 * If the newly created <tt>Preferences</tt> object's {@link #newNode}
                 * field is <tt>true</tt> and there are any node change listeners,
                 * a notification event is enqueued for processing by the event dispatch
                 * thread.
                 * <p>When there are no more tokens, the last value found in the
                 * child-cache or returned by <tt>childSpi</tt> is returned by this
                 * method.  If during the traversal, two <tt>"/"</tt> tokens occur
                 * consecutively, or the final token is <tt>"/"</tt> (rather than a name),
                 * an appropriate <tt>IllegalArgumentException</tt> is thrown.
                 * <p> If the first character of <tt>path</tt> is <tt>'/'</tt>
                 * (indicating an absolute path name) this preference node's
                 * lock is dropped prior to breaking <tt>path</tt> into tokens, and
                 * this method recursively traverses the path starting from the root
                 * (rather than starting from this node).  The traversal is otherwise
                 * identical to the one described for relative path names.  Dropping
                 * the lock on this node prior to commencing the traversal at the root
                 * node is essential to avoid the possibility of deadlock, as per the
                 * {@link #lock locking invariant}.
                 */
                // @ts-ignore
                public node(path: string): java.util.prefs.Preferences;
                /**
                 * Implements the <tt>nodeExists</tt> method as per the specification in
                 * {@link Preferences#nodeExists(String)}.
                 * <p>This implementation is very similar to {@link #node(String)},
                 * except that {@link #getChild(String)} is used instead of {@link
                 * #childSpi(String)}.
                 */
                // @ts-ignore
                public nodeExists(path: string): boolean;
                /**
                 * Implements the <tt>removeNode()</tt> method as per the specification in
                 * {@link Preferences#removeNode()}.
                 * <p>This implementation checks to see that this node is the root; if so,
                 * it throws an appropriate exception.  Then, it locks this node's parent,
                 * and calls a recursive helper method that traverses the subtree rooted at
                 * this node.  The recursive method locks the node on which it was called,
                 * checks that it has not already been removed, and then ensures that all
                 * of its children are cached: The {@link #childrenNamesSpi()} method is
                 * invoked and each returned child name is checked for containment in the
                 * child-cache.  If a child is not already cached, the {@link
                 * #childSpi(String)} method is invoked to create a <tt>Preferences</tt>
                 * instance for it, and this instance is put into the child-cache.  Then
                 * the helper method calls itself recursively on each node contained in its
                 * child-cache.  Next, it invokes {@link #removeNodeSpi()}, marks itself
                 * as removed, and removes itself from its parent's child-cache.  Finally,
                 * if there are any node change listeners, it enqueues a notification
                 * event for processing by the event dispatch thread.
                 * <p>Note that the helper method is always invoked with all ancestors up
                 * to the "closest non-removed ancestor" locked.
                 */
                // @ts-ignore
                public removeNode(): void;
                /**
                 * Implements the <tt>name</tt> method as per the specification in
                 * {@link Preferences#name()}.
                 * <p>This implementation merely returns the name that was
                 * passed to this node's constructor.
                 */
                // @ts-ignore
                public name(): string;
                /**
                 * Implements the <tt>absolutePath</tt> method as per the specification in
                 * {@link Preferences#absolutePath()}.
                 * <p>This implementation merely returns the absolute path name that
                 * was computed at the time that this node was constructed (based on
                 * the name that was passed to this node's constructor, and the names
                 * that were passed to this node's ancestors' constructors).
                 */
                // @ts-ignore
                public absolutePath(): string;
                /**
                 * Implements the <tt>isUserNode</tt> method as per the specification in
                 * {@link Preferences#isUserNode()}.
                 * <p>This implementation compares this node's root node (which is stored
                 * in a private field) with the value returned by
                 * {@link Preferences#userRoot()}.  If the two object references are
                 * identical, this method returns true.
                 */
                // @ts-ignore
                public isUserNode(): boolean;
                // @ts-ignore
                public addPreferenceChangeListener(pcl: java.util.prefs.PreferenceChangeListener): void;
                // @ts-ignore
                public removePreferenceChangeListener(pcl: java.util.prefs.PreferenceChangeListener): void;
                // @ts-ignore
                public addNodeChangeListener(ncl: java.util.prefs.NodeChangeListener): void;
                // @ts-ignore
                public removeNodeChangeListener(ncl: java.util.prefs.NodeChangeListener): void;
                /**
                 * Put the given key-value association into this preference node.  It is
                 * guaranteed that <tt>key</tt> and <tt>value</tt> are non-null and of
                 * legal length.  Also, it is guaranteed that this node has not been
                 * removed.  (The implementor needn't check for any of these things.)
                 * <p>This method is invoked with the lock on this node held.
                 */
                // @ts-ignore
                protected abstract putSpi(key: string, value: string): void;
                /**
                 * Return the value associated with the specified key at this preference
                 * node, or <tt>null</tt> if there is no association for this key, or the
                 * association cannot be determined at this time.  It is guaranteed that
                 * <tt>key</tt> is non-null.  Also, it is guaranteed that this node has
                 * not been removed.  (The implementor needn't check for either of these
                 * things.)
                 * <p> Generally speaking, this method should not throw an exception
                 * under any circumstances.  If, however, if it does throw an exception,
                 * the exception will be intercepted and treated as a <tt>null</tt>
                 * return value.
                 * <p>This method is invoked with the lock on this node held.
                 */
                // @ts-ignore
                protected abstract getSpi(key: string): string;
                /**
                 * Remove the association (if any) for the specified key at this
                 * preference node.  It is guaranteed that <tt>key</tt> is non-null.
                 * Also, it is guaranteed that this node has not been removed.
                 * (The implementor needn't check for either of these things.)
                 * <p>This method is invoked with the lock on this node held.
                 */
                // @ts-ignore
                protected abstract removeSpi(key: string): void;
                /**
                 * Removes this preference node, invalidating it and any preferences that
                 * it contains.  The named child will have no descendants at the time this
                 * invocation is made (i.e., the {@link Preferences#removeNode()} method
                 * invokes this method repeatedly in a bottom-up fashion, removing each of
                 * a node's descendants before removing the node itself).
                 * <p>This method is invoked with the lock held on this node and its
                 * parent (and all ancestors that are being removed as a
                 * result of a single invocation to {@link Preferences#removeNode()}).
                 * <p>The removal of a node needn't become persistent until the
                 * <tt>flush</tt> method is invoked on this node (or an ancestor).
                 * <p>If this node throws a <tt>BackingStoreException</tt>, the exception
                 * will propagate out beyond the enclosing {@link #removeNode()}
                 * invocation.
                 */
                // @ts-ignore
                protected abstract removeNodeSpi(): void;
                /**
                 * Returns all of the keys that have an associated value in this
                 * preference node.  (The returned array will be of size zero if
                 * this node has no preferences.)  It is guaranteed that this node has not
                 * been removed.
                 * <p>This method is invoked with the lock on this node held.
                 * <p>If this node throws a <tt>BackingStoreException</tt>, the exception
                 * will propagate out beyond the enclosing {@link #keys()} invocation.
                 */
                // @ts-ignore
                protected abstract keysSpi(): java.lang.String[];
                /**
                 * Returns the names of the children of this preference node.  (The
                 * returned array will be of size zero if this node has no children.)
                 * This method need not return the names of any nodes already cached,
                 * but may do so without harm.
                 * <p>This method is invoked with the lock on this node held.
                 * <p>If this node throws a <tt>BackingStoreException</tt>, the exception
                 * will propagate out beyond the enclosing {@link #childrenNames()}
                 * invocation.
                 */
                // @ts-ignore
                protected abstract childrenNamesSpi(): java.lang.String[];
                /**
                 * Returns the named child if it exists, or <tt>null</tt> if it does not.
                 * It is guaranteed that <tt>nodeName</tt> is non-null, non-empty,
                 * does not contain the slash character ('/'), and is no longer than
                 * {@link #MAX_NAME_LENGTH} characters.  Also, it is guaranteed
                 * that this node has not been removed.  (The implementor needn't check
                 * for any of these things if he chooses to override this method.)
                 * <p>Finally, it is guaranteed that the named node has not been returned
                 * by a previous invocation of this method or {@link #childSpi} after the
                 * last time that it was removed.  In other words, a cached value will
                 * always be used in preference to invoking this method.  (The implementor
                 * needn't maintain his own cache of previously returned children if he
                 * chooses to override this method.)
                 * <p>This implementation obtains this preference node's lock, invokes
                 * {@link #childrenNames()} to get an array of the names of this node's
                 * children, and iterates over the array comparing the name of each child
                 * with the specified node name.  If a child node has the correct name,
                 * the {@link #childSpi(String)} method is invoked and the resulting
                 * node is returned.  If the iteration completes without finding the
                 * specified name, <tt>null</tt> is returned.
                 */
                // @ts-ignore
                protected getChild(nodeName: string): java.util.prefs.AbstractPreferences;
                /**
                 * Returns the named child of this preference node, creating it if it does
                 * not already exist.  It is guaranteed that <tt>name</tt> is non-null,
                 * non-empty, does not contain the slash character ('/'), and is no longer
                 * than {@link #MAX_NAME_LENGTH} characters.  Also, it is guaranteed that
                 * this node has not been removed.  (The implementor needn't check for any
                 * of these things.)
                 * <p>Finally, it is guaranteed that the named node has not been returned
                 * by a previous invocation of this method or {@link #getChild(String)}
                 * after the last time that it was removed.  In other words, a cached
                 * value will always be used in preference to invoking this method.
                 * Subclasses need not maintain their own cache of previously returned
                 * children.
                 * <p>The implementer must ensure that the returned node has not been
                 * removed.  If a like-named child of this node was previously removed, the
                 * implementer must return a newly constructed <tt>AbstractPreferences</tt>
                 * node; once removed, an <tt>AbstractPreferences</tt> node
                 * cannot be "resuscitated."
                 * <p>If this method causes a node to be created, this node is not
                 * guaranteed to be persistent until the <tt>flush</tt> method is
                 * invoked on this node or one of its ancestors (or descendants).
                 * <p>This method is invoked with the lock on this node held.
                 */
                // @ts-ignore
                protected abstract childSpi(name: string): java.util.prefs.AbstractPreferences;
                /**
                 * Returns the absolute path name of this preferences node.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Implements the <tt>sync</tt> method as per the specification in
                 * {@link Preferences#sync()}.
                 * <p>This implementation calls a recursive helper method that locks this
                 * node, invokes syncSpi() on it, unlocks this node, and recursively
                 * invokes this method on each "cached child."  A cached child is a child
                 * of this node that has been created in this VM and not subsequently
                 * removed.  In effect, this method does a depth first traversal of the
                 * "cached subtree" rooted at this node, calling syncSpi() on each node in
                 * the subTree while only that node is locked. Note that syncSpi() is
                 * invoked top-down.
                 */
                // @ts-ignore
                public sync(): void;
                /**
                 * This method is invoked with this node locked.  The contract of this
                 * method is to synchronize any cached preferences stored at this node
                 * with any stored in the backing store.  (It is perfectly possible that
                 * this node does not exist on the backing store, either because it has
                 * been deleted by another VM, or because it has not yet been created.)
                 * Note that this method should <i>not</i> synchronize the preferences in
                 * any subnodes of this node.  If the backing store naturally syncs an
                 * entire subtree at once, the implementer is encouraged to override
                 * sync(), rather than merely overriding this method.
                 * <p>If this node throws a <tt>BackingStoreException</tt>, the exception
                 * will propagate out beyond the enclosing {@link #sync()} invocation.
                 */
                // @ts-ignore
                protected abstract syncSpi(): void;
                /**
                 * Implements the <tt>flush</tt> method as per the specification in
                 * {@link Preferences#flush()}.
                 * <p>This implementation calls a recursive helper method that locks this
                 * node, invokes flushSpi() on it, unlocks this node, and recursively
                 * invokes this method on each "cached child."  A cached child is a child
                 * of this node that has been created in this VM and not subsequently
                 * removed.  In effect, this method does a depth first traversal of the
                 * "cached subtree" rooted at this node, calling flushSpi() on each node in
                 * the subTree while only that node is locked. Note that flushSpi() is
                 * invoked top-down.
                 * <p> If this method is invoked on a node that has been removed with
                 * the {@link #removeNode()} method, flushSpi() is invoked on this node,
                 * but not on others.
                 */
                // @ts-ignore
                public flush(): void;
                /**
                 * This method is invoked with this node locked.  The contract of this
                 * method is to force any cached changes in the contents of this
                 * preference node to the backing store, guaranteeing their persistence.
                 * (It is perfectly possible that this node does not exist on the backing
                 * store, either because it has been deleted by another VM, or because it
                 * has not yet been created.)  Note that this method should <i>not</i>
                 * flush the preferences in any subnodes of this node.  If the backing
                 * store naturally flushes an entire subtree at once, the implementer is
                 * encouraged to override flush(), rather than merely overriding this
                 * method.
                 * <p>If this node throws a <tt>BackingStoreException</tt>, the exception
                 * will propagate out beyond the enclosing {@link #flush()} invocation.
                 */
                // @ts-ignore
                protected abstract flushSpi(): void;
                /**
                 * Returns <tt>true</tt> iff this node (or an ancestor) has been
                 * removed with the {@link #removeNode()} method.  This method
                 * locks this node prior to returning the contents of the private
                 * field used to track this state.
                 */
                // @ts-ignore
                protected isRemoved(): boolean;
                /**
                 * Implements the <tt>exportNode</tt> method as per the specification in
                 * {@link Preferences#exportNode(OutputStream)}.
                 */
                // @ts-ignore
                public exportNode(os: java.io.OutputStream): void;
                /**
                 * Implements the <tt>exportSubtree</tt> method as per the specification in
                 * {@link Preferences#exportSubtree(OutputStream)}.
                 */
                // @ts-ignore
                public exportSubtree(os: java.io.OutputStream): void;
            }
        }
    }
}
