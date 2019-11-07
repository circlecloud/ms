declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class Phaser extends java.lang.Object {
                /**
                 * Creates a new phaser with no initially registered parties, no
                 * parent, and initial phase number 0. Any thread using this
                 * phaser will need to first register for it.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a new phaser with the given number of registered
                 * unarrived parties, no parent, and initial phase number 0.
                 */
                // @ts-ignore
                constructor(parties: number)
                /**
                 * Equivalent to {@link #Phaser(Phaser, int) Phaser(parent, 0)}.
                 */
                // @ts-ignore
                constructor(parent: java.util.concurrent.Phaser)
                /**
                 * Creates a new phaser with the given parent and number of
                 * registered unarrived parties.  When the given parent is non-null
                 * and the given number of parties is greater than zero, this
                 * child phaser is registered with its parent.
                 */
                // @ts-ignore
                constructor(parent: java.util.concurrent.Phaser, parties: number)
                /**
                 * Adds a new unarrived party to this phaser.  If an ongoing
                 * invocation of {@link #onAdvance} is in progress, this method
                 * may await its completion before returning.  If this phaser has
                 * a parent, and this phaser previously had no registered parties,
                 * this child phaser is also registered with its parent. If
                 * this phaser is terminated, the attempt to register has
                 * no effect, and a negative value is returned.
                 */
                // @ts-ignore
                public register(): number;
                /**
                 * Adds the given number of new unarrived parties to this phaser.
                 * If an ongoing invocation of {@link #onAdvance} is in progress,
                 * this method may await its completion before returning.  If this
                 * phaser has a parent, and the given number of parties is greater
                 * than zero, and this phaser previously had no registered
                 * parties, this child phaser is also registered with its parent.
                 * If this phaser is terminated, the attempt to register has no
                 * effect, and a negative value is returned.
                 */
                // @ts-ignore
                public bulkRegister(parties: number): number;
                /**
                 * Arrives at this phaser, without waiting for others to arrive.
                 * <p>It is a usage error for an unregistered party to invoke this
                 * method.  However, this error may result in an {@code
                 * IllegalStateException} only upon some subsequent operation on
                 * this phaser, if ever.
                 */
                // @ts-ignore
                public arrive(): number;
                /**
                 * Arrives at this phaser and deregisters from it without waiting
                 * for others to arrive. Deregistration reduces the number of
                 * parties required to advance in future phases.  If this phaser
                 * has a parent, and deregistration causes this phaser to have
                 * zero parties, this phaser is also deregistered from its parent.
                 * <p>It is a usage error for an unregistered party to invoke this
                 * method.  However, this error may result in an {@code
                 * IllegalStateException} only upon some subsequent operation on
                 * this phaser, if ever.
                 */
                // @ts-ignore
                public arriveAndDeregister(): number;
                /**
                 * Arrives at this phaser and awaits others. Equivalent in effect
                 * to {@code awaitAdvance(arrive())}.  If you need to await with
                 * interruption or timeout, you can arrange this with an analogous
                 * construction using one of the other forms of the {@code
                 * awaitAdvance} method.  If instead you need to deregister upon
                 * arrival, use {@code awaitAdvance(arriveAndDeregister())}.
                 * <p>It is a usage error for an unregistered party to invoke this
                 * method.  However, this error may result in an {@code
                 * IllegalStateException} only upon some subsequent operation on
                 * this phaser, if ever.
                 */
                // @ts-ignore
                public arriveAndAwaitAdvance(): number;
                /**
                 * Awaits the phase of this phaser to advance from the given phase
                 * value, returning immediately if the current phase is not equal
                 * to the given phase value or this phaser is terminated.
                 */
                // @ts-ignore
                public awaitAdvance(phase: number): number;
                /**
                 * Awaits the phase of this phaser to advance from the given phase
                 * value, throwing {@code InterruptedException} if interrupted
                 * while waiting, or returning immediately if the current phase is
                 * not equal to the given phase value or this phaser is
                 * terminated.
                 */
                // @ts-ignore
                public awaitAdvanceInterruptibly(phase: number): number;
                /**
                 * Awaits the phase of this phaser to advance from the given phase
                 * value or the given timeout to elapse, throwing {@code
                 * InterruptedException} if interrupted while waiting, or
                 * returning immediately if the current phase is not equal to the
                 * given phase value or this phaser is terminated.
                 */
                // @ts-ignore
                public awaitAdvanceInterruptibly(phase: number, timeout: number, unit: java.util.concurrent.TimeUnit): number;
                /**
                 * Forces this phaser to enter termination state.  Counts of
                 * registered parties are unaffected.  If this phaser is a member
                 * of a tiered set of phasers, then all of the phasers in the set
                 * are terminated.  If this phaser is already terminated, this
                 * method has no effect.  This method may be useful for
                 * coordinating recovery after one or more tasks encounter
                 * unexpected exceptions.
                 */
                // @ts-ignore
                public forceTermination(): void;
                /**
                 * Returns the current phase number. The maximum phase number is
                 * {@code Integer.MAX_VALUE}, after which it restarts at
                 * zero. Upon termination, the phase number is negative,
                 * in which case the prevailing phase prior to termination
                 * may be obtained via {@code getPhase() + Integer.MIN_VALUE}.
                 */
                // @ts-ignore
                public getPhase(): number;
                /**
                 * Returns the number of parties registered at this phaser.
                 */
                // @ts-ignore
                public getRegisteredParties(): number;
                /**
                 * Returns the number of registered parties that have arrived at
                 * the current phase of this phaser. If this phaser has terminated,
                 * the returned value is meaningless and arbitrary.
                 */
                // @ts-ignore
                public getArrivedParties(): number;
                /**
                 * Returns the number of registered parties that have not yet
                 * arrived at the current phase of this phaser. If this phaser has
                 * terminated, the returned value is meaningless and arbitrary.
                 */
                // @ts-ignore
                public getUnarrivedParties(): number;
                /**
                 * Returns the parent of this phaser, or {@code null} if none.
                 */
                // @ts-ignore
                public getParent(): java.util.concurrent.Phaser;
                /**
                 * Returns the root ancestor of this phaser, which is the same as
                 * this phaser if it has no parent.
                 */
                // @ts-ignore
                public getRoot(): java.util.concurrent.Phaser;
                /**
                 * Returns {@code true} if this phaser has been terminated.
                 */
                // @ts-ignore
                public isTerminated(): boolean;
                /**
                 * Overridable method to perform an action upon impending phase
                 * advance, and to control termination. This method is invoked
                 * upon arrival of the party advancing this phaser (when all other
                 * waiting parties are dormant).  If this method returns {@code
                 * true}, this phaser will be set to a final termination state
                 * upon advance, and subsequent calls to {@link #isTerminated}
                 * will return true. Any (unchecked) Exception or Error thrown by
                 * an invocation of this method is propagated to the party
                 * attempting to advance this phaser, in which case no advance
                 * occurs.
                 * <p>The arguments to this method provide the state of the phaser
                 * prevailing for the current transition.  The effects of invoking
                 * arrival, registration, and waiting methods on this phaser from
                 * within {@code onAdvance} are unspecified and should not be
                 * relied on.
                 * <p>If this phaser is a member of a tiered set of phasers, then
                 * {@code onAdvance} is invoked only for its root phaser on each
                 * advance.
                 * <p>To support the most common use cases, the default
                 * implementation of this method returns {@code true} when the
                 * number of registered parties has become zero as the result of a
                 * party invoking {@code arriveAndDeregister}.  You can disable
                 * this behavior, thus enabling continuation upon future
                 * registrations, by overriding this method to always return
                 * {@code false}:
                 * <pre> {@code
                 * Phaser phaser = new Phaser() {
                 * protected boolean onAdvance(int phase, int parties) { return false; }
                 * }}</pre>
                 */
                // @ts-ignore
                protected onAdvance(phase: number, registeredParties: number): boolean;
                /**
                 * Returns a string identifying this phaser, as well as its
                 * state.  The state, in brackets, includes the String {@code
                 * "phase = "} followed by the phase number, {@code "parties = "}
                 * followed by the number of registered parties, and {@code
                 * "arrived = "} followed by the number of arrived parties.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
