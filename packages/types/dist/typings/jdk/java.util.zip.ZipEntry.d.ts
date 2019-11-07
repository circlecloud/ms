declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
             class ZipEntry extends java.lang.Object {
                /**
                 * Creates a new zip entry with the specified name.
                 */
                // @ts-ignore
                constructor(name: string)
                /**
                 * Creates a new zip entry with fields taken from the specified
                 * zip entry.
                 */
                // @ts-ignore
                constructor(e: java.util.zip.ZipEntry)
                // @ts-ignore
                public static STORED: number;
                // @ts-ignore
                public static DEFLATED: number;
                /**
                 * Returns the name of the entry.
                 */
                // @ts-ignore
                public getName(): string;
                /**
                 * Sets the last modification time of the entry.
                 * <p> If the entry is output to a ZIP file or ZIP file formatted
                 * output stream the last modification time set by this method will
                 * be stored into the {@code date and time fields} of the zip file
                 * entry and encoded in standard {@code MS-DOS date and time format}.
                 * The {@link java.util.TimeZone#getDefault() default TimeZone} is
                 * used to convert the epoch time to the MS-DOS data and time.
                 */
                // @ts-ignore
                public setTime(time: number): void;
                /**
                 * Returns the last modification time of the entry.
                 * <p> If the entry is read from a ZIP file or ZIP file formatted
                 * input stream, this is the last modification time from the {@code
                 * date and time fields} of the zip file entry. The
                 * {@link java.util.TimeZone#getDefault() default TimeZone} is used
                 * to convert the standard MS-DOS formatted date and time to the
                 * epoch time.
                 */
                // @ts-ignore
                public getTime(): number;
                /**
                 * Sets the last modification time of the entry.
                 * <p> When output to a ZIP file or ZIP file formatted output stream
                 * the last modification time set by this method will be stored into
                 * zip file entry's {@code date and time fields} in {@code standard
                 * MS-DOS date and time format}), and the extended timestamp fields
                 * in {@code optional extra data} in UTC time.
                 */
                // @ts-ignore
                public setLastModifiedTime(time: java.nio.file.attribute.FileTime): java.util.zip.ZipEntry;
                /**
                 * Returns the last modification time of the entry.
                 * <p> If the entry is read from a ZIP file or ZIP file formatted
                 * input stream, this is the last modification time from the zip
                 * file entry's {@code optional extra data} if the extended timestamp
                 * fields are present. Otherwise the last modification time is read
                 * from the entry's {@code date and time fields}, the {@link
                 * java.util.TimeZone#getDefault() default TimeZone} is used to convert
                 * the standard MS-DOS formatted date and time to the epoch time.
                 */
                // @ts-ignore
                public getLastModifiedTime(): java.nio.file.attribute.FileTime;
                /**
                 * Sets the last access time of the entry.
                 * <p> If set, the last access time will be stored into the extended
                 * timestamp fields of entry's {@code optional extra data}, when output
                 * to a ZIP file or ZIP file formatted stream.
                 */
                // @ts-ignore
                public setLastAccessTime(time: java.nio.file.attribute.FileTime): java.util.zip.ZipEntry;
                /**
                 * Returns the last access time of the entry.
                 * <p> The last access time is from the extended timestamp fields
                 * of entry's {@code optional extra data} when read from a ZIP file
                 * or ZIP file formatted stream.
                 */
                // @ts-ignore
                public getLastAccessTime(): java.nio.file.attribute.FileTime;
                /**
                 * Sets the creation time of the entry.
                 * <p> If set, the creation time will be stored into the extended
                 * timestamp fields of entry's {@code optional extra data}, when
                 * output to a ZIP file or ZIP file formatted stream.
                 */
                // @ts-ignore
                public setCreationTime(time: java.nio.file.attribute.FileTime): java.util.zip.ZipEntry;
                /**
                 * Returns the creation time of the entry.
                 * <p> The creation time is from the extended timestamp fields of
                 * entry's {@code optional extra data} when read from a ZIP file
                 * or ZIP file formatted stream.
                 */
                // @ts-ignore
                public getCreationTime(): java.nio.file.attribute.FileTime;
                /**
                 * Sets the uncompressed size of the entry data.
                 */
                // @ts-ignore
                public setSize(size: number): void;
                /**
                 * Returns the uncompressed size of the entry data.
                 */
                // @ts-ignore
                public getSize(): number;
                /**
                 * Returns the size of the compressed entry data.
                 * <p> In the case of a stored entry, the compressed size will be the same
                 * as the uncompressed size of the entry.
                 */
                // @ts-ignore
                public getCompressedSize(): number;
                /**
                 * Sets the size of the compressed entry data.
                 */
                // @ts-ignore
                public setCompressedSize(csize: number): void;
                /**
                 * Sets the CRC-32 checksum of the uncompressed entry data.
                 */
                // @ts-ignore
                public setCrc(crc: number): void;
                /**
                 * Returns the CRC-32 checksum of the uncompressed entry data.
                 */
                // @ts-ignore
                public getCrc(): number;
                /**
                 * Sets the compression method for the entry.
                 */
                // @ts-ignore
                public setMethod(method: number): void;
                /**
                 * Returns the compression method of the entry.
                 */
                // @ts-ignore
                public getMethod(): number;
                /**
                 * Sets the optional extra field data for the entry.
                 * <p> Invoking this method may change this entry's last modification
                 * time, last access time and creation time, if the {@code extra} field
                 * data includes the extensible timestamp fields, such as {@code NTFS tag
                 * 0x0001} or {@code Info-ZIP Extended Timestamp}, as specified in
                 * <a href="http://www.info-zip.org/doc/appnote-19970311-iz.zip">Info-ZIP
                 * Application Note 970311</a>.
                 */
                // @ts-ignore
                public setExtra(extra: number): void;
                /**
                 * Returns the extra field data for the entry.
                 */
                // @ts-ignore
                public getExtra(): number[];
                /**
                 * Sets the optional comment string for the entry.
                 * <p>ZIP entry comments have maximum length of 0xffff. If the length of the
                 * specified comment string is greater than 0xFFFF bytes after encoding, only
                 * the first 0xFFFF bytes are output to the ZIP file entry.
                 */
                // @ts-ignore
                public setComment(comment: string): void;
                /**
                 * Returns the comment string for the entry.
                 */
                // @ts-ignore
                public getComment(): string;
                /**
                 * Returns true if this is a directory entry. A directory entry is
                 * defined to be one whose name ends with a '/'.
                 */
                // @ts-ignore
                public isDirectory(): boolean;
                /**
                 * Returns a string representation of the ZIP entry.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Returns the hash code value for this entry.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns a copy of this entry.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
            }
        }
    }
}
