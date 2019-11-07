// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            abstract class RecursiveTask extends java.util.concurrent.ForkJoinTask {
                // @ts-ignore
                constructor()
                /**
                 * The main computation performed by this task.
                 */
                // @ts-ignore
                protected abstract compute(): java.lang.Object;
                // @ts-ignore
                public getRawResult(): java.lang.Object;
                // @ts-ignore
                protected setRawResult(value: java.lang.Object): void;
                /**
                 * Implements execution conventions for RecursiveTask.
                 */
                // @ts-ignore
                protected exec(): boolean;
            }
        }
    }
}
