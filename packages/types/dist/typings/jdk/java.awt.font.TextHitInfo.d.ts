// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
             class TextHitInfo extends java.lang.Object {
                /**
                 * Returns the index of the character hit.
                 */
                // @ts-ignore
                public getCharIndex(): number;
                /**
                 * Returns <code>true</code> if the leading edge of the character was
                 * hit.
                 */
                // @ts-ignore
                public isLeadingEdge(): boolean;
                /**
                 * Returns the insertion index.  This is the character index if
                 * the leading edge of the character was hit, and one greater
                 * than the character index if the trailing edge was hit.
                 */
                // @ts-ignore
                public getInsertionIndex(): number;
                /**
                 * Returns the hash code.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns <code>true</code> if the specified <code>Object</code> is a
                 * <code>TextHitInfo</code> and equals this <code>TextHitInfo</code>.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns <code>true</code> if the specified <code>TextHitInfo</code>
                 * has the same <code>charIndex</code> and <code>isLeadingEdge</code>
                 * as this <code>TextHitInfo</code>.  This is not the same as having
                 * the same insertion offset.
                 */
                // @ts-ignore
                public equals(hitInfo: java.awt.font.TextHitInfo): boolean;
                /**
                 * Returns a <code>String</code> representing the hit for debugging
                 * use only.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Creates a <code>TextHitInfo</code> on the leading edge of the
                 * character at the specified <code>charIndex</code>.
                 */
                // @ts-ignore
                public static leading(charIndex: number): java.awt.font.TextHitInfo;
                /**
                 * Creates a hit on the trailing edge of the character at
                 * the specified <code>charIndex</code>.
                 */
                // @ts-ignore
                public static trailing(charIndex: number): java.awt.font.TextHitInfo;
                /**
                 * Creates a <code>TextHitInfo</code> at the specified offset,
                 * associated with the character before the offset.
                 */
                // @ts-ignore
                public static beforeOffset(offset: number): java.awt.font.TextHitInfo;
                /**
                 * Creates a <code>TextHitInfo</code> at the specified offset,
                 * associated with the character after the offset.
                 */
                // @ts-ignore
                public static afterOffset(offset: number): java.awt.font.TextHitInfo;
                /**
                 * Creates a <code>TextHitInfo</code> on the other side of the
                 * insertion point.  This <code>TextHitInfo</code> remains unchanged.
                 */
                // @ts-ignore
                public getOtherHit(): java.awt.font.TextHitInfo;
                /**
                 * Creates a <code>TextHitInfo</code> whose character index is offset
                 * by <code>delta</code> from the <code>charIndex</code> of this
                 * <code>TextHitInfo</code>. This <code>TextHitInfo</code> remains
                 * unchanged.
                 */
                // @ts-ignore
                public getOffsetHit(delta: number): java.awt.font.TextHitInfo;
            }
        }
    }
}
