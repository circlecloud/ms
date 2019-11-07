// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace ref {
            // @ts-ignore
            abstract class Reference extends java.lang.Object {
                /**
                 * Make the referent null.  This does not force the reference object to be enqueued.
                 */
                // @ts-ignore
                public clear(): void;
                /**
                 * Force the reference object to be enqueued if it has been associated with a queue.
                 */
                // @ts-ignore
                public enqueue(): boolean;
                /**
                 * Return the referent of the reference object.
                 */
                // @ts-ignore
                public get(): java.lang.Object;
                /**
                 * Return whether the reference object has been enqueued.
                 */
                // @ts-ignore
                public isEnqueued(): boolean;
            }
        }
    }
}
