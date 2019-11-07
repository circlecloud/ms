// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
        interface KeyEventDispatcher {
            /**
             * This method is called by the current KeyboardFocusManager requesting
             * that this KeyEventDispatcher dispatch the specified event on its behalf.
             * This KeyEventDispatcher is free to retarget the event, consume it,
             * dispatch it itself, or make other changes. This capability is typically
             * used to deliver KeyEvents to Components other than the focus owner. This
             * can be useful when navigating children of non-focusable Windows in an
             * accessible environment, for example. Note that if a KeyEventDispatcher
             * dispatches the KeyEvent itself, it must use <code>redispatchEvent</code>
             * to prevent the current KeyboardFocusManager from recursively requesting
             * that this KeyEventDispatcher dispatch the event again.
             * <p>
             * If an implementation of this method returns <code>false</code>, then
             * the KeyEvent is passed to the next KeyEventDispatcher in the chain,
             * ending with the current KeyboardFocusManager. If an implementation
             * returns <code>true</code>, the KeyEvent is assumed to have been
             * dispatched (although this need not be the case), and the current
             * KeyboardFocusManager will take no further action with regard to the
             * KeyEvent. In such a case,
             * <code>KeyboardFocusManager.dispatchEvent</code> should return
             * <code>true</code> as well. If an implementation consumes the KeyEvent,
             * but returns <code>false</code>, the consumed event will still be passed
             * to the next KeyEventDispatcher in the chain. It is important for
             * developers to check whether the KeyEvent has been consumed before
             * dispatching it to a target. By default, the current KeyboardFocusManager
             * will not dispatch a consumed KeyEvent.
             */
            // @ts-ignore
             dispatchKeyEvent(e: java.awt.event.KeyEvent): boolean;
        }
    }
}
