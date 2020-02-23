declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class BinaryStream extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(buffer: number)
                // @ts-ignore
                constructor(buffer: number, offset: number)
                // @ts-ignore
                public offset: number;
                // @ts-ignore
                public reset(): cn.nukkit.utils.BinaryStream;
                // @ts-ignore
                public setBuffer(buffer: number): void;
                // @ts-ignore
                public setBuffer(buffer: number, offset: number): void;
                // @ts-ignore
                public getOffset(): number;
                // @ts-ignore
                public setOffset(offset: number): void;
                // @ts-ignore
                public getBuffer(): number[];
                // @ts-ignore
                public getCount(): number;
                // @ts-ignore
                public get(): number[];
                // @ts-ignore
                public get(len: number): number[];
                // @ts-ignore
                public put(bytes: number): void;
                // @ts-ignore
                public getLong(): number;
                // @ts-ignore
                public putLong(l: number): void;
                // @ts-ignore
                public getInt(): number;
                // @ts-ignore
                public putInt(i: number): void;
                // @ts-ignore
                public getLLong(): number;
                // @ts-ignore
                public putLLong(l: number): void;
                // @ts-ignore
                public getLInt(): number;
                // @ts-ignore
                public putLInt(i: number): void;
                // @ts-ignore
                public getShort(): number;
                // @ts-ignore
                public putShort(s: number): void;
                // @ts-ignore
                public getLShort(): number;
                // @ts-ignore
                public putLShort(s: number): void;
                // @ts-ignore
                public getFloat(): number;
                // @ts-ignore
                public getFloat(accuracy: number): number;
                // @ts-ignore
                public putFloat(v: number): void;
                // @ts-ignore
                public getLFloat(): number;
                // @ts-ignore
                public getLFloat(accuracy: number): number;
                // @ts-ignore
                public putLFloat(v: number): void;
                // @ts-ignore
                public getTriad(): number;
                // @ts-ignore
                public putTriad(triad: number): void;
                // @ts-ignore
                public getLTriad(): number;
                // @ts-ignore
                public putLTriad(triad: number): void;
                // @ts-ignore
                public getBoolean(): boolean;
                // @ts-ignore
                public putBoolean(bool: boolean): void;
                // @ts-ignore
                public getByte(): number;
                // @ts-ignore
                public putByte(b: number): void;
                /**
                 * Reads a list of Attributes from the stream.
                 */
                // @ts-ignore
                public getAttributeList(): cn.nukkit.entity.Attribute[];
                /**
                 * Writes a list of Attributes to the packet buffer using the standard format.
                 */
                // @ts-ignore
                public putAttributeList(attributes: cn.nukkit.entity.Attribute): void;
                // @ts-ignore
                public putUUID(uuid: java.util.UUID): void;
                // @ts-ignore
                public getUUID(): java.util.UUID;
                // @ts-ignore
                public putSkin(skin: cn.nukkit.entity.data.Skin): void;
                // @ts-ignore
                public getSkin(): cn.nukkit.entity.data.Skin;
                // @ts-ignore
                public putImage(image: cn.nukkit.utils.SerializedImage): void;
                // @ts-ignore
                public getImage(): cn.nukkit.utils.SerializedImage;
                // @ts-ignore
                public getSlot(): cn.nukkit.item.Item;
                // @ts-ignore
                public putSlot(item: cn.nukkit.item.Item): void;
                // @ts-ignore
                public getRecipeIngredient(): cn.nukkit.item.Item;
                // @ts-ignore
                public putRecipeIngredient(ingredient: cn.nukkit.item.Item): void;
                // @ts-ignore
                public getByteArray(): number[];
                // @ts-ignore
                public putByteArray(b: number): void;
                // @ts-ignore
                public getString(): string;
                // @ts-ignore
                public putString(string: string): void;
                // @ts-ignore
                public getUnsignedVarInt(): number;
                // @ts-ignore
                public putUnsignedVarInt(v: number): void;
                // @ts-ignore
                public getVarInt(): number;
                // @ts-ignore
                public putVarInt(v: number): void;
                // @ts-ignore
                public getVarLong(): number;
                // @ts-ignore
                public putVarLong(v: number): void;
                // @ts-ignore
                public getUnsignedVarLong(): number;
                // @ts-ignore
                public putUnsignedVarLong(v: number): void;
                // @ts-ignore
                public getBlockVector3(): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public getSignedBlockPosition(): cn.nukkit.math.BlockVector3;
                // @ts-ignore
                public putSignedBlockPosition(v: cn.nukkit.math.BlockVector3): void;
                // @ts-ignore
                public putBlockVector3(v: cn.nukkit.math.BlockVector3): void;
                // @ts-ignore
                public putBlockVector3(x: number, y: number, z: number): void;
                // @ts-ignore
                public getVector3f(): cn.nukkit.math.Vector3f;
                // @ts-ignore
                public putVector3f(v: cn.nukkit.math.Vector3f): void;
                // @ts-ignore
                public putVector3f(x: number, y: number, z: number): void;
                // @ts-ignore
                public putGameRules(gameRules: cn.nukkit.level.GameRules): void;
                /**
                 * Reads and returns an EntityUniqueID
                 */
                // @ts-ignore
                public getEntityUniqueId(): number;
                /**
                 * Writes an EntityUniqueID
                 */
                // @ts-ignore
                public putEntityUniqueId(eid: number): void;
                /**
                 * Reads and returns an EntityRuntimeID
                 */
                // @ts-ignore
                public getEntityRuntimeId(): number;
                /**
                 * Writes an EntityUniqueID
                 */
                // @ts-ignore
                public putEntityRuntimeId(eid: number): void;
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace;
                // @ts-ignore
                public putBlockFace(face: cn.nukkit.math.BlockFace): void;
                // @ts-ignore
                public putEntityLink(link: cn.nukkit.network.protocol.types.EntityLink): void;
                // @ts-ignore
                public getEntityLink(): cn.nukkit.network.protocol.types.EntityLink;
                // @ts-ignore
                public feof(): boolean;
            }
        }
    }
}
