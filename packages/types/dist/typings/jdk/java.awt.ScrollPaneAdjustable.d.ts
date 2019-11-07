// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class ScrollPaneAdjustable extends java.lang.Object {
            /**
             * Returns the orientation of this scrollbar.
             */
            // @ts-ignore
            public getOrientation(): number;
            /**
             * This method should <strong>NOT</strong> be called by user code.
             * This method is public for this class to properly implement
             * <code>Adjustable</code> interface.
             */
            // @ts-ignore
            public setMinimum(min: number): void;
            // @ts-ignore
            public getMinimum(): number;
            /**
             * This method should <strong>NOT</strong> be called by user code.
             * This method is public for this class to properly implement
             * <code>Adjustable</code> interface.
             */
            // @ts-ignore
            public setMaximum(max: number): void;
            // @ts-ignore
            public getMaximum(): number;
            // @ts-ignore
            public setUnitIncrement(u: number): void;
            // @ts-ignore
            public getUnitIncrement(): number;
            // @ts-ignore
            public setBlockIncrement(b: number): void;
            // @ts-ignore
            public getBlockIncrement(): number;
            /**
             * This method should <strong>NOT</strong> be called by user code.
             * This method is public for this class to properly implement
             * <code>Adjustable</code> interface.
             */
            // @ts-ignore
            public setVisibleAmount(v: number): void;
            // @ts-ignore
            public getVisibleAmount(): number;
            /**
             * Sets the <code>valueIsAdjusting</code> property.
             */
            // @ts-ignore
            public setValueIsAdjusting(b: boolean): void;
            /**
             * Returns true if the value is in the process of changing as a
             * result of actions being taken by the user.
             */
            // @ts-ignore
            public getValueIsAdjusting(): boolean;
            /**
             * Sets the value of this scrollbar to the specified value.
             * <p>
             * If the value supplied is less than the current minimum or
             * greater than the current maximum, then one of those values is
             * substituted, as appropriate.
             */
            // @ts-ignore
            public setValue(v: number): void;
            // @ts-ignore
            public getValue(): number;
            /**
             * Adds the specified adjustment listener to receive adjustment
             * events from this <code>ScrollPaneAdjustable</code>.
             * If <code>l</code> is <code>null</code>, no exception is thrown
             * and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addAdjustmentListener(l: java.awt.event.AdjustmentListener): void;
            /**
             * Removes the specified adjustment listener so that it no longer
             * receives adjustment events from this <code>ScrollPaneAdjustable</code>.
             * If <code>l</code> is <code>null</code>, no exception is thrown
             * and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeAdjustmentListener(l: java.awt.event.AdjustmentListener): void;
            /**
             * Returns an array of all the adjustment listeners
             * registered on this <code>ScrollPaneAdjustable</code>.
             */
            // @ts-ignore
            public getAdjustmentListeners(): java.awt.event.AdjustmentListener[];
            /**
             * Returns a string representation of this scrollbar and its values.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a string representing the state of this scrollbar.
             * This method is intended to be used only for debugging purposes,
             * and the content and format of the returned string may vary
             * between implementations.  The returned string may be empty but
             * may not be <code>null</code>.
             */
            // @ts-ignore
            public paramString(): string;
        }
    }
}
