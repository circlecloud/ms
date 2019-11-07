declare namespace java {
    namespace lang {
        namespace ref {
            // @ts-ignore
             class PhantomReference extends java.lang.ref.Reference {
                /**
                 * Constructs a new instance of this class.
                 */
                // @ts-ignore
                constructor(r: java.lang.Object, q: java.lang.ref.ReferenceQueue)
                /**
                 * Return the referent of the reference object.  Phantom reference
                 * objects referents are inaccessible, and so null is returned.
                 */
                // @ts-ignore
                public get(): java.lang.Object;
            }
        }
    }
}
