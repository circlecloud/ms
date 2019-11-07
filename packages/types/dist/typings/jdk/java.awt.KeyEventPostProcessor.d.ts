// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
        interface KeyEventPostProcessor {
            /**
             * This method is called by the current KeyboardFocusManager, requesting
             * that this KeyEventPostProcessor perform any necessary post-processing
             * which should be part of the KeyEvent's final resolution. At the time
             * this method is invoked, typically the KeyEvent has already been
             * dispatched to and handled by its target. However, if no Component in
             * the application currently owns the focus, then the KeyEvent has not
             * been dispatched to any Component. Typically, KeyEvent post-processing
             * will be used to implement features which require global KeyEvent
             * post-handling, such as menu shortcuts. Note that if a
             * KeyEventPostProcessor wishes to dispatch the KeyEvent, it must use
             * <code>redispatchEvent</code> to prevent the AWT from recursively
             * requesting that this KeyEventPostProcessor perform post-processing
             * of the event again.
             * <p>
             * If an implementation of this method returns <code>false</code>, then the
             * KeyEvent is passed to the next KeyEventPostProcessor in the chain,
             * ending with the current KeyboardFocusManager. If an implementation
             * returns <code>true</code>, the KeyEvent is assumed to have been fully
             * handled (although this need not be the case), and the AWT will take no
             * further action with regard to the KeyEvent. If an implementation
             * consumes the KeyEvent but returns <code>false</code>, the consumed
             * event will still be passed to the next KeyEventPostProcessor in the
             * chain. It is important for developers to check whether the KeyEvent has
             * been consumed before performing any post-processing of the KeyEvent. By
             * default, the current KeyboardFocusManager will perform no post-
             * processing in response to a consumed KeyEvent.
             */
            // @ts-ignore
             postProcessKeyEvent(e: java.awt.event.KeyEvent): boolean;
        }
    }
}
