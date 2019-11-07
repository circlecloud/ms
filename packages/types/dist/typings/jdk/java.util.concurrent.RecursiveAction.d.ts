declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            abstract class RecursiveAction extends java.util.concurrent.ForkJoinTask {
                // @ts-ignore
                constructor()
                /**
                 * The main computation performed by this task.
                 */
                // @ts-ignore
                protected abstract compute(): void;
                /**
                 * Always returns {@code null}.
                 */
                // @ts-ignore
                public getRawResult(): java.lang.Void;
                /**
                 * Requires null completion value.
                 */
                // @ts-ignore
                protected setRawResult(mustBeNull: java.lang.Void): void;
                /**
                 * Implements execution conventions for RecursiveActions.
                 */
                // @ts-ignore
                protected exec(): boolean;
            }
        }
    }
}
