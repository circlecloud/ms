// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            abstract class SelectionKey extends java.lang.Object {
                /**
                 * Constructs an instance of this class.
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static OP_READ: number;
                // @ts-ignore
                public static OP_WRITE: number;
                // @ts-ignore
                public static OP_CONNECT: number;
                // @ts-ignore
                public static OP_ACCEPT: number;
                /**
                 * Returns the channel for which this key was created.  This method will
                 * continue to return the channel even after the key is cancelled.
                 */
                // @ts-ignore
                public abstract channel(): java.nio.channels.SelectableChannel;
                /**
                 * Returns the selector for which this key was created.  This method will
                 * continue to return the selector even after the key is cancelled.
                 */
                // @ts-ignore
                public abstract selector(): java.nio.channels.Selector;
                /**
                 * Tells whether or not this key is valid.
                 * <p> A key is valid upon creation and remains so until it is cancelled,
                 * its channel is closed, or its selector is closed.  </p>
                 */
                // @ts-ignore
                public abstract isValid(): boolean;
                /**
                 * Requests that the registration of this key's channel with its selector
                 * be cancelled.  Upon return the key will be invalid and will have been
                 * added to its selector's cancelled-key set.  The key will be removed from
                 * all of the selector's key sets during the next selection operation.
                 * <p> If this key has already been cancelled then invoking this method has
                 * no effect.  Once cancelled, a key remains forever invalid. </p>
                 * <p> This method may be invoked at any time.  It synchronizes on the
                 * selector's cancelled-key set, and therefore may block briefly if invoked
                 * concurrently with a cancellation or selection operation involving the
                 * same selector.  </p>
                 */
                // @ts-ignore
                public abstract cancel(): void;
                /**
                 * Retrieves this key's interest set.
                 * <p> It is guaranteed that the returned set will only contain operation
                 * bits that are valid for this key's channel.
                 * <p> This method may be invoked at any time.  Whether or not it blocks,
                 * and for how long, is implementation-dependent.  </p>
                 */
                // @ts-ignore
                public abstract interestOps(): number;
                /**
                 * Retrieves this key's ready-operation set.
                 * <p> It is guaranteed that the returned set will only contain operation
                 * bits that are valid for this key's channel.  </p>
                 */
                // @ts-ignore
                public abstract readyOps(): number;
                /**
                 * Tests whether this key's channel is ready for reading.
                 * <p> An invocation of this method of the form <tt>k.isReadable()</tt>
                 * behaves in exactly the same way as the expression
                 * <blockquote><pre>{@code
                 * k.readyOps() & OP_READ != 0
                 * }</pre></blockquote>
                 * <p> If this key's channel does not support read operations then this
                 * method always returns <tt>false</tt>.  </p>
                 */
                // @ts-ignore
                public isReadable(): boolean;
                /**
                 * Tests whether this key's channel is ready for writing.
                 * <p> An invocation of this method of the form <tt>k.isWritable()</tt>
                 * behaves in exactly the same way as the expression
                 * <blockquote><pre>{@code
                 * k.readyOps() & OP_WRITE != 0
                 * }</pre></blockquote>
                 * <p> If this key's channel does not support write operations then this
                 * method always returns <tt>false</tt>.  </p>
                 */
                // @ts-ignore
                public isWritable(): boolean;
                /**
                 * Tests whether this key's channel has either finished, or failed to
                 * finish, its socket-connection operation.
                 * <p> An invocation of this method of the form <tt>k.isConnectable()</tt>
                 * behaves in exactly the same way as the expression
                 * <blockquote><pre>{@code
                 * k.readyOps() & OP_CONNECT != 0
                 * }</pre></blockquote>
                 * <p> If this key's channel does not support socket-connect operations
                 * then this method always returns <tt>false</tt>.  </p>
                 */
                // @ts-ignore
                public isConnectable(): boolean;
                /**
                 * Tests whether this key's channel is ready to accept a new socket
                 * connection.
                 * <p> An invocation of this method of the form <tt>k.isAcceptable()</tt>
                 * behaves in exactly the same way as the expression
                 * <blockquote><pre>{@code
                 * k.readyOps() & OP_ACCEPT != 0
                 * }</pre></blockquote>
                 * <p> If this key's channel does not support socket-accept operations then
                 * this method always returns <tt>false</tt>.  </p>
                 */
                // @ts-ignore
                public isAcceptable(): boolean;
                /**
                 * Attaches the given object to this key.
                 * <p> An attached object may later be retrieved via the {@link #attachment()
                 * attachment} method.  Only one object may be attached at a time; invoking
                 * this method causes any previous attachment to be discarded.  The current
                 * attachment may be discarded by attaching <tt>null</tt>.  </p>
                 */
                // @ts-ignore
                public attach(ob: java.lang.Object): java.lang.Object;
                /**
                 * Retrieves the current attachment.
                 */
                // @ts-ignore
                public attachment(): java.lang.Object;
            }
        }
    }
}
