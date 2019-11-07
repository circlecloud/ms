// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
        abstract class ClassValue extends java.lang.Object {
            /**
             * Sole constructor.  (For invocation by subclass constructors, typically
             * implicit.)
             */
            // @ts-ignore
            constructor()
            /**
             * Computes the given class's derived value for this {@code ClassValue}.
             * <p>
             * This method will be invoked within the first thread that accesses
             * the value with the {@link #get get} method.
             * <p>
             * Normally, this method is invoked at most once per class,
             * but it may be invoked again if there has been a call to
             * {@link #remove remove}.
             * <p>
             * If this method throws an exception, the corresponding call to {@code get}
             * will terminate abnormally with that exception, and no class value will be recorded.
             */
            // @ts-ignore
            protected abstract computeValue(type: java.lang.Class): java.lang.Object;
            /**
             * Returns the value for the given class.
             * If no value has yet been computed, it is obtained by
             * an invocation of the {@link #computeValue computeValue} method.
             * <p>
             * The actual installation of the value on the class
             * is performed atomically.
             * At that point, if several racing threads have
             * computed values, one is chosen, and returned to
             * all the racing threads.
             * <p>
             * The {@code type} parameter is typically a class, but it may be any type,
             * such as an interface, a primitive type (like {@code int.class}), or {@code void.class}.
             * <p>
             * In the absence of {@code remove} calls, a class value has a simple
             * state diagram:  uninitialized and initialized.
             * When {@code remove} calls are made,
             * the rules for value observation are more complex.
             * See the documentation for {@link #remove remove} for more information.
             */
            // @ts-ignore
            public get(type: java.lang.Class): java.lang.Object;
            /**
             * Removes the associated value for the given class.
             * If this value is subsequently {@linkplain #get read} for the same class,
             * its value will be reinitialized by invoking its {@link #computeValue computeValue} method.
             * This may result in an additional invocation of the
             * {@code computeValue} method for the given class.
             * <p>
             * In order to explain the interaction between {@code get} and {@code remove} calls,
             * we must model the state transitions of a class value to take into account
             * the alternation between uninitialized and initialized states.
             * To do this, number these states sequentially from zero, and note that
             * uninitialized (or removed) states are numbered with even numbers,
             * while initialized (or re-initialized) states have odd numbers.
             * <p>
             * When a thread {@code T} removes a class value in state {@code 2N},
             * nothing happens, since the class value is already uninitialized.
             * Otherwise, the state is advanced atomically to {@code 2N+1}.
             * <p>
             * When a thread {@code T} queries a class value in state {@code 2N},
             * the thread first attempts to initialize the class value to state {@code 2N+1}
             * by invoking {@code computeValue} and installing the resulting value.
             * <p>
             * When {@code T} attempts to install the newly computed value,
             * if the state is still at {@code 2N}, the class value will be initialized
             * with the computed value, advancing it to state {@code 2N+1}.
             * <p>
             * Otherwise, whether the new state is even or odd,
             * {@code T} will discard the newly computed value
             * and retry the {@code get} operation.
             * <p>
             * Discarding and retrying is an important proviso,
             * since otherwise {@code T} could potentially install
             * a disastrously stale value.  For example:
             * <ul>
             * <li>{@code T} calls {@code CV.get(C)} and sees state {@code 2N}
             * <li>{@code T} quickly computes a time-dependent value {@code V0} and gets ready to install it
             * <li>{@code T} is hit by an unlucky paging or scheduling event, and goes to sleep for a long time
             * <li>...meanwhile, {@code T2} also calls {@code CV.get(C)} and sees state {@code 2N}
             * <li>{@code T2} quickly computes a similar time-dependent value {@code V1} and installs it on {@code CV.get(C)}
             * <li>{@code T2} (or a third thread) then calls {@code CV.remove(C)}, undoing {@code T2}'s work
             * <li> the previous actions of {@code T2} are repeated several times
             * <li> also, the relevant computed values change over time: {@code V1}, {@code V2}, ...
             * <li>...meanwhile, {@code T} wakes up and attempts to install {@code V0}; <em>this must fail</em>
             * </ul>
             * We can assume in the above scenario that {@code CV.computeValue} uses locks to properly
             * observe the time-dependent states as it computes {@code V1}, etc.
             * This does not remove the threat of a stale value, since there is a window of time
             * between the return of {@code computeValue} in {@code T} and the installation
             * of the the new value.  No user synchronization is possible during this time.
             */
            // @ts-ignore
            public remove(type: java.lang.Class): void;
        }
    }
}
