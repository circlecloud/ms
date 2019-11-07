declare namespace java {
    namespace awt {
        // @ts-ignore
        interface Adjustable {
            // @ts-ignore
             HORIZONTAL: number;
            // @ts-ignore
             VERTICAL: number;
            // @ts-ignore
             NO_ORIENTATION: number;
            /**
             * Gets the orientation of the adjustable object.
             */
            // @ts-ignore
             getOrientation(): number;
            /**
             * Sets the minimum value of the adjustable object.
             */
            // @ts-ignore
             setMinimum(min: number): void;
            /**
             * Gets the minimum value of the adjustable object.
             */
            // @ts-ignore
             getMinimum(): number;
            /**
             * Sets the maximum value of the adjustable object.
             */
            // @ts-ignore
             setMaximum(max: number): void;
            /**
             * Gets the maximum value of the adjustable object.
             */
            // @ts-ignore
             getMaximum(): number;
            /**
             * Sets the unit value increment for the adjustable object.
             */
            // @ts-ignore
             setUnitIncrement(u: number): void;
            /**
             * Gets the unit value increment for the adjustable object.
             */
            // @ts-ignore
             getUnitIncrement(): number;
            /**
             * Sets the block value increment for the adjustable object.
             */
            // @ts-ignore
             setBlockIncrement(b: number): void;
            /**
             * Gets the block value increment for the adjustable object.
             */
            // @ts-ignore
             getBlockIncrement(): number;
            /**
             * Sets the length of the proportional indicator of the
             * adjustable object.
             */
            // @ts-ignore
             setVisibleAmount(v: number): void;
            /**
             * Gets the length of the proportional indicator.
             */
            // @ts-ignore
             getVisibleAmount(): number;
            /**
             * Sets the current value of the adjustable object. If
             * the value supplied is less than <code>minimum</code>
             * or greater than <code>maximum</code> - <code>visibleAmount</code>,
             * then one of those values is substituted, as appropriate.
             * <p>
             * Calling this method does not fire an
             * <code>AdjustmentEvent</code>.
             */
            // @ts-ignore
             setValue(v: number): void;
            /**
             * Gets the current value of the adjustable object.
             */
            // @ts-ignore
             getValue(): number;
            /**
             * Adds a listener to receive adjustment events when the value of
             * the adjustable object changes.
             */
            // @ts-ignore
             addAdjustmentListener(l: java.awt.event.AdjustmentListener): void;
            /**
             * Removes an adjustment listener.
             */
            // @ts-ignore
             removeAdjustmentListener(l: java.awt.event.AdjustmentListener): void;
        }
    }
}
