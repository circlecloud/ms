// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
        abstract class PersistenceDelegate extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * The <code>writeObject</code> is a single entry point to the persistence
             * and is used by a <code>Encoder</code> in the traditional
             * mode of delegation. Although this method is not final,
             * it should not need to be subclassed under normal circumstances.
             * <p>
             * This implementation first checks to see if the stream
             * has already encountered this object. Next the
             * <code>mutatesTo</code> method is called to see if
             * that candidate returned from the stream can
             * be mutated into an accurate copy of <code>oldInstance</code>.
             * If it can, the <code>initialize</code> method is called to
             * perform the initialization. If not, the candidate is removed
             * from the stream, and the <code>instantiate</code> method
             * is called to create a new candidate for this object.
             */
            // @ts-ignore
            public writeObject(oldInstance: java.lang.Object, out: java.beans.Encoder): void;
            /**
             * Returns true if an <em>equivalent</em> copy of <code>oldInstance</code> may be
             * created by applying a series of statements to <code>newInstance</code>.
             * In the specification of this method, we mean by equivalent that the modified instance
             * is indistinguishable from <code>oldInstance</code> in the behavior
             * of the relevant methods in its public API. [Note: we use the
             * phrase <em>relevant</em> methods rather than <em>all</em> methods
             * here only because, to be strictly correct, methods like <code>hashCode</code>
             * and <code>toString</code> prevent most classes from producing truly
             * indistinguishable copies of their instances].
             * <p>
             * The default behavior returns <code>true</code>
             * if the classes of the two instances are the same.
             */
            // @ts-ignore
            protected mutatesTo(oldInstance: java.lang.Object, newInstance: java.lang.Object): boolean;
            /**
             * Returns an expression whose value is <code>oldInstance</code>.
             * This method is used to characterize the constructor
             * or factory method that should be used to create the given object.
             * For example, the <code>instantiate</code> method of the persistence
             * delegate for the <code>Field</code> class could be defined as follows:
             * <pre>
             * Field f = (Field)oldInstance;
             * return new Expression(f, f.getDeclaringClass(), "getField", new Object[]{f.getName()});
             * </pre>
             * Note that we declare the value of the returned expression so that
             * the value of the expression (as returned by <code>getValue</code>)
             * will be identical to <code>oldInstance</code>.
             */
            // @ts-ignore
            protected abstract instantiate(oldInstance: java.lang.Object, out: java.beans.Encoder): java.beans.Expression;
            /**
             * Produce a series of statements with side effects on <code>newInstance</code>
             * so that the new instance becomes <em>equivalent</em> to <code>oldInstance</code>.
             * In the specification of this method, we mean by equivalent that, after the method
             * returns, the modified instance is indistinguishable from
             * <code>newInstance</code> in the behavior of all methods in its
             * public API.
             * <p>
             * The implementation typically achieves this goal by producing a series of
             * "what happened" statements involving the <code>oldInstance</code>
             * and its publicly available state. These statements are sent
             * to the output stream using its <code>writeExpression</code>
             * method which returns an expression involving elements in
             * a cloned environment simulating the state of an input stream during
             * reading. Each statement returned will have had all instances
             * the old environment replaced with objects which exist in the new
             * one. In particular, references to the target of these statements,
             * which start out as references to <code>oldInstance</code> are returned
             * as references to the <code>newInstance</code> instead.
             * Executing these statements effects an incremental
             * alignment of the state of the two objects as a series of
             * modifications to the objects in the new environment.
             * By the time the initialize method returns it should be impossible
             * to tell the two instances apart by using their public APIs.
             * Most importantly, the sequence of steps that were used to make
             * these objects appear equivalent will have been recorded
             * by the output stream and will form the actual output when
             * the stream is flushed.
             * <p>
             * The default implementation, calls the <code>initialize</code>
             * method of the type's superclass.
             */
            // @ts-ignore
            protected initialize(type: java.lang.Class, oldInstance: java.lang.Object, newInstance: java.lang.Object, out: java.beans.Encoder): void;
        }
    }
}
