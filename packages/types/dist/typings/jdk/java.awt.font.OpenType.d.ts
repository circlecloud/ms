declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
            interface OpenType {
                // @ts-ignore
                 TAG_CMAP: number;
                // @ts-ignore
                 TAG_HEAD: number;
                // @ts-ignore
                 TAG_NAME: number;
                // @ts-ignore
                 TAG_GLYF: number;
                // @ts-ignore
                 TAG_MAXP: number;
                // @ts-ignore
                 TAG_PREP: number;
                // @ts-ignore
                 TAG_HMTX: number;
                // @ts-ignore
                 TAG_KERN: number;
                // @ts-ignore
                 TAG_HDMX: number;
                // @ts-ignore
                 TAG_LOCA: number;
                // @ts-ignore
                 TAG_POST: number;
                // @ts-ignore
                 TAG_OS2: number;
                // @ts-ignore
                 TAG_CVT: number;
                // @ts-ignore
                 TAG_GASP: number;
                // @ts-ignore
                 TAG_VDMX: number;
                // @ts-ignore
                 TAG_VMTX: number;
                // @ts-ignore
                 TAG_VHEA: number;
                // @ts-ignore
                 TAG_HHEA: number;
                // @ts-ignore
                 TAG_TYP1: number;
                // @ts-ignore
                 TAG_BSLN: number;
                // @ts-ignore
                 TAG_GSUB: number;
                // @ts-ignore
                 TAG_DSIG: number;
                // @ts-ignore
                 TAG_FPGM: number;
                // @ts-ignore
                 TAG_FVAR: number;
                // @ts-ignore
                 TAG_GVAR: number;
                // @ts-ignore
                 TAG_CFF: number;
                // @ts-ignore
                 TAG_MMSD: number;
                // @ts-ignore
                 TAG_MMFX: number;
                // @ts-ignore
                 TAG_BASE: number;
                // @ts-ignore
                 TAG_GDEF: number;
                // @ts-ignore
                 TAG_GPOS: number;
                // @ts-ignore
                 TAG_JSTF: number;
                // @ts-ignore
                 TAG_EBDT: number;
                // @ts-ignore
                 TAG_EBLC: number;
                // @ts-ignore
                 TAG_EBSC: number;
                // @ts-ignore
                 TAG_LTSH: number;
                // @ts-ignore
                 TAG_PCLT: number;
                // @ts-ignore
                 TAG_ACNT: number;
                // @ts-ignore
                 TAG_AVAR: number;
                // @ts-ignore
                 TAG_BDAT: number;
                // @ts-ignore
                 TAG_BLOC: number;
                // @ts-ignore
                 TAG_CVAR: number;
                // @ts-ignore
                 TAG_FEAT: number;
                // @ts-ignore
                 TAG_FDSC: number;
                // @ts-ignore
                 TAG_FMTX: number;
                // @ts-ignore
                 TAG_JUST: number;
                // @ts-ignore
                 TAG_LCAR: number;
                // @ts-ignore
                 TAG_MORT: number;
                // @ts-ignore
                 TAG_OPBD: number;
                // @ts-ignore
                 TAG_PROP: number;
                // @ts-ignore
                 TAG_TRAK: number;
                /**
                 * Returns the version of the <code>OpenType</code> font.
                 * 1.0 is represented as 0x00010000.
                 */
                // @ts-ignore
                 getVersion(): number;
                /**
                 * Returns the table as an array of bytes for a specified tag.
                 * Tags for sfnt tables include items like <i>cmap</i>,
                 * <i>name</i> and <i>head</i>.  The <code>byte</code> array
                 * returned is a copy of the font data in memory.
                 */
                // @ts-ignore
                 getFontTable(sfntTag: number): number[];
                /**
                 * Returns the table as an array of bytes for a specified tag.
                 * Tags for sfnt tables include items like <i>cmap</i>,
                 * <i>name</i> and <i>head</i>.  The byte array returned is a
                 * copy of the font data in memory.
                 */
                // @ts-ignore
                 getFontTable(strSfntTag: string): number[];
                /**
                 * Returns a subset of the table as an array of bytes
                 * for a specified tag.  Tags for sfnt tables include
                 * items like <i>cmap</i>, <i>name</i> and <i>head</i>.
                 * The byte array returned is a copy of the font data in
                 * memory.
                 */
                // @ts-ignore
                 getFontTable(sfntTag: number, offset: number, count: number): number[];
                /**
                 * Returns a subset of the table as an array of bytes
                 * for a specified tag.  Tags for sfnt tables include items
                 * like <i>cmap</i>, <i>name</i> and <i>head</i>. The
                 * <code>byte</code> array returned is a copy of the font
                 * data in memory.
                 */
                // @ts-ignore
                 getFontTable(strSfntTag: string, offset: number, count: number): number[];
                /**
                 * Returns the size of the table for a specified tag. Tags for sfnt
                 * tables include items like <i>cmap</i>, <i>name</i> and <i>head</i>.
                 */
                // @ts-ignore
                 getFontTableSize(sfntTag: number): number;
                /**
                 * Returns the size of the table for a specified tag. Tags for sfnt
                 * tables include items like <i>cmap</i>, <i>name</i> and <i>head</i>.
                 */
                // @ts-ignore
                 getFontTableSize(strSfntTag: string): number;
            }
        }
    }
}
