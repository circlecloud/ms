declare namespace java {
    namespace awt {
        // @ts-ignore
         class PageAttributes extends java.lang.Object {
            /**
             * Constructs a PageAttributes instance with default values for every
             * attribute.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a PageAttributes instance which is a copy of the supplied
             * PageAttributes.
             */
            // @ts-ignore
            constructor(obj: java.awt.PageAttributes)
            /**
             * Constructs a PageAttributes instance with the specified values for
             * every attribute.
             */
            // @ts-ignore
            constructor(color: java.awt.PageAttributes.ColorType, media: java.awt.PageAttributes.MediaType, orientationRequested: java.awt.PageAttributes.OrientationRequestedType, origin: java.awt.PageAttributes.OriginType, printQuality: java.awt.PageAttributes.PrintQualityType, printerResolution: number)
            /**
             * Creates and returns a copy of this PageAttributes.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Sets all of the attributes of this PageAttributes to the same values as
             * the attributes of obj.
             */
            // @ts-ignore
            public set(obj: java.awt.PageAttributes): void;
            /**
             * Returns whether pages using these attributes will be rendered in
             * color or monochrome. This attribute is updated to the value chosen
             * by the user.
             */
            // @ts-ignore
            public getColor(): java.awt.PageAttributes.ColorType;
            /**
             * Specifies whether pages using these attributes will be rendered in
             * color or monochrome. Not specifying this attribute is equivalent to
             * specifying ColorType.MONOCHROME.
             */
            // @ts-ignore
            public setColor(color: java.awt.PageAttributes.ColorType): void;
            /**
             * Returns the paper size for pages using these attributes. This
             * attribute is updated to the value chosen by the user.
             */
            // @ts-ignore
            public getMedia(): java.awt.PageAttributes.MediaType;
            /**
             * Specifies the desired paper size for pages using these attributes. The
             * actual paper size will be determined by the limitations of the target
             * printer. If an exact match cannot be found, an implementation will
             * choose the closest possible match. Not specifying this attribute is
             * equivalent to specifying the default size for the default locale. The
             * default size for locales in the United States and Canada is
             * MediaType.NA_LETTER. The default size for all other locales is
             * MediaType.ISO_A4.
             */
            // @ts-ignore
            public setMedia(media: java.awt.PageAttributes.MediaType): void;
            /**
             * Sets the paper size for pages using these attributes to the default
             * size for the default locale. The default size for locales in the
             * United States and Canada is MediaType.NA_LETTER. The default size for
             * all other locales is MediaType.ISO_A4.
             */
            // @ts-ignore
            public setMediaToDefault(): void;
            /**
             * Returns the print orientation for pages using these attributes. This
             * attribute is updated to the value chosen by the user.
             */
            // @ts-ignore
            public getOrientationRequested(): java.awt.PageAttributes.OrientationRequestedType;
            /**
             * Specifies the print orientation for pages using these attributes. Not
             * specifying the property is equivalent to specifying
             * OrientationRequestedType.PORTRAIT.
             */
            // @ts-ignore
            public setOrientationRequested(orientationRequested: java.awt.PageAttributes.OrientationRequestedType): void;
            /**
             * Specifies the print orientation for pages using these attributes.
             * Specifying <code>3</code> denotes portrait. Specifying <code>4</code>
             * denotes landscape. Specifying any other value will generate an
             * IllegalArgumentException. Not specifying the property is equivalent
             * to calling setOrientationRequested(OrientationRequestedType.PORTRAIT).
             */
            // @ts-ignore
            public setOrientationRequested(orientationRequested: number): void;
            /**
             * Sets the print orientation for pages using these attributes to the
             * default. The default orientation is portrait.
             */
            // @ts-ignore
            public setOrientationRequestedToDefault(): void;
            /**
             * Returns whether drawing at (0, 0) to pages using these attributes
             * draws at the upper-left corner of the physical page, or at the
             * upper-left corner of the printable area. (Note that these locations
             * could be equivalent.) This attribute cannot be modified by,
             * and is not subject to any limitations of, the implementation or the
             * target printer.
             */
            // @ts-ignore
            public getOrigin(): java.awt.PageAttributes.OriginType;
            /**
             * Specifies whether drawing at (0, 0) to pages using these attributes
             * draws at the upper-left corner of the physical page, or at the
             * upper-left corner of the printable area. (Note that these locations
             * could be equivalent.) Not specifying the property is equivalent to
             * specifying OriginType.PHYSICAL.
             */
            // @ts-ignore
            public setOrigin(origin: java.awt.PageAttributes.OriginType): void;
            /**
             * Returns the print quality for pages using these attributes. This
             * attribute is updated to the value chosen by the user.
             */
            // @ts-ignore
            public getPrintQuality(): java.awt.PageAttributes.PrintQualityType;
            /**
             * Specifies the print quality for pages using these attributes. Not
             * specifying the property is equivalent to specifying
             * PrintQualityType.NORMAL.
             */
            // @ts-ignore
            public setPrintQuality(printQuality: java.awt.PageAttributes.PrintQualityType): void;
            /**
             * Specifies the print quality for pages using these attributes.
             * Specifying <code>3</code> denotes draft. Specifying <code>4</code>
             * denotes normal. Specifying <code>5</code> denotes high. Specifying
             * any other value will generate an IllegalArgumentException. Not
             * specifying the property is equivalent to calling
             * setPrintQuality(PrintQualityType.NORMAL).
             */
            // @ts-ignore
            public setPrintQuality(printQuality: number): void;
            /**
             * Sets the print quality for pages using these attributes to the default.
             * The default print quality is normal.
             */
            // @ts-ignore
            public setPrintQualityToDefault(): void;
            /**
             * Returns the print resolution for pages using these attributes.
             * Index 0 of the array specifies the cross feed direction resolution
             * (typically the horizontal resolution). Index 1 of the array specifies
             * the feed direction resolution (typically the vertical resolution).
             * Index 2 of the array specifies whether the resolutions are in dots per
             * inch or dots per centimeter. <code>3</code> denotes dots per inch.
             * <code>4</code> denotes dots per centimeter.
             */
            // @ts-ignore
            public getPrinterResolution(): number[];
            /**
             * Specifies the desired print resolution for pages using these attributes.
             * The actual resolution will be determined by the limitations of the
             * implementation and the target printer. Index 0 of the array specifies
             * the cross feed direction resolution (typically the horizontal
             * resolution). Index 1 of the array specifies the feed direction
             * resolution (typically the vertical resolution). Index 2 of the array
             * specifies whether the resolutions are in dots per inch or dots per
             * centimeter. <code>3</code> denotes dots per inch. <code>4</code>
             * denotes dots per centimeter. Note that the 1.1 printing implementation
             * (Toolkit.getPrintJob) requires that the feed and cross feed resolutions
             * be the same. Not specifying the property is equivalent to calling
             * setPrinterResolution(72).
             */
            // @ts-ignore
            public setPrinterResolution(printerResolution: number): void;
            /**
             * Specifies the desired cross feed and feed print resolutions in dots per
             * inch for pages using these attributes. The same value is used for both
             * resolutions. The actual resolutions will be determined by the
             * limitations of the implementation and the target printer. Not
             * specifying the property is equivalent to specifying <code>72</code>.
             */
            // @ts-ignore
            public setPrinterResolution(printerResolution: number): void;
            /**
             * Sets the printer resolution for pages using these attributes to the
             * default. The default is 72 dpi for both the feed and cross feed
             * resolutions.
             */
            // @ts-ignore
            public setPrinterResolutionToDefault(): void;
            /**
             * Determines whether two PageAttributes are equal to each other.
             * <p>
             * Two PageAttributes are equal if and only if each of their attributes are
             * equal. Attributes of enumeration type are equal if and only if the
             * fields refer to the same unique enumeration object. This means that
             * an aliased media is equal to its underlying unique media. Printer
             * resolutions are equal if and only if the feed resolution, cross feed
             * resolution, and units are equal.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a hash code value for this PageAttributes.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns a string representation of this PageAttributes.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
