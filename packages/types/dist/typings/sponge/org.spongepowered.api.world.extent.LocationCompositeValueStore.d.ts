// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    // @ts-ignore
                    interface LocationCompositeValueStore {
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location.
                         */
                        // @ts-ignore
                         get(coordinates: any /*Vector3i*/, key: org.spongepowered.api.data.key.Key): java.util.Optional;
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location.
                         */
                        // @ts-ignore
                         get(x: number, y: number, z: number, key: org.spongepowered.api.data.key.Key): java.util.Optional;
                        /**
                         * Gets an instance of the given data class for given block at the location.
                         * <p>If there is no pre-existing data that can be represented by the given
                         * {@link DataManipulator} class, {@link Optional#empty()} is returned. </p>
                         */
                        // @ts-ignore
                         get(coordinates: any /*Vector3i*/, manipulatorClass: java.lang.Class): java.util.Optional;
                        /**
                         * Gets an instance of the given data class for given block at the location.
                         * <p>If there is no pre-existing data that can be represented by the given
                         * {@link DataManipulator} class, {@link Optional#empty()} is returned. </p>
                         */
                        // @ts-ignore
                         get(x: number, y: number, z: number, manipulatorClass: java.lang.Class): java.util.Optional;
                        /**
                         * Gets or creates a new {@link DataManipulator} that can be accepted by the
                         * block at the location. In the event that there is no data that can be
                         * represented by the given {@link DataManipulator}, a new
                         * {@link DataManipulator} object is created with default values.
                         * <p>In the event the {@link DataManipulator} can not represent any data
                         * pertaining to the block at the location, {@link Optional#empty()} is
                         * returned.</p>
                         */
                        // @ts-ignore
                         getOrCreate(coordinates: any /*Vector3i*/, manipulatorClass: java.lang.Class): java.util.Optional;
                        /**
                         * Gets or creates a new {@link DataManipulator} that can be accepted by the
                         * block at the location. In the event that there is no data that can be
                         * represented by the given {@link DataManipulator}, a new
                         * {@link DataManipulator} object is created with default values.
                         * <p>In the event the {@link DataManipulator} can not represent any data
                         * pertaining to the block at the location, {@link Optional#empty()} is
                         * returned.</p>
                         */
                        // @ts-ignore
                         getOrCreate(x: number, y: number, z: number, manipulatorClass: java.lang.Class): java.util.Optional;
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location. The data may not exist, or may not be compatible in
                         * which case <code>null</code> may be returned.
                         */
                        // @ts-ignore
                         getOrNull(coordinates: any /*Vector3i*/, key: org.spongepowered.api.data.key.Key): java.lang.Object;
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location. The data may not exist, or may not be compatible in
                         * which case <code>null</code> may be returned.
                         */
                        // @ts-ignore
                         getOrNull(x: number, y: number, z: number, key: org.spongepowered.api.data.key.Key): java.lang.Object;
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location. The data may not exist, or may not be compatible in
                         * which case the default value may be returned.
                         */
                        // @ts-ignore
                         getOrElse(coordinates: any /*Vector3i*/, key: org.spongepowered.api.data.key.Key, defaultValue: java.lang.Object): java.lang.Object;
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location. The data may not exist, or may not be compatible in
                         * which case the default value may be returned.
                         */
                        // @ts-ignore
                         getOrElse(x: number, y: number, z: number, key: org.spongepowered.api.data.key.Key, defaultValue: java.lang.Object): java.lang.Object;
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location. The data may not exist, or may not be compatible in
                         * which case <code>null</code> may be returned.
                         */
                        // @ts-ignore
                         getValue(coordinates: any /*Vector3i*/, key: org.spongepowered.api.data.key.Key): java.util.Optional;
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location.
                         */
                        // @ts-ignore
                         getValue(x: number, y: number, z: number, key: org.spongepowered.api.data.key.Key): java.util.Optional;
                        /**
                         * Checks if the provided {@link Key} to the data is supported by the block
                         * at the provided location.
                         */
                        // @ts-ignore
                         supports(coordinates: any /*Vector3i*/, key: org.spongepowered.api.data.key.Key): boolean;
                        /**
                         * Checks if the provided {@link Key} to the data is supported by the block
                         * at the provided location.
                         */
                        // @ts-ignore
                         supports(x: number, y: number, z: number, key: org.spongepowered.api.data.key.Key): boolean;
                        /**
                         * Checks if the provided {@link BaseValue} is supported by the block at the
                         * provided location.
                         */
                        // @ts-ignore
                         supports(coordinates: any /*Vector3i*/, value: org.spongepowered.api.data.value.BaseValue): boolean;
                        /**
                         * Checks if the provided {@link BaseValue} is supported by the block at the
                         * provided location.
                         */
                        // @ts-ignore
                         supports(x: number, y: number, z: number, value: org.spongepowered.api.data.value.BaseValue): boolean;
                        /**
                         * Checks if the given {@link DataManipulator} class is able to represent
                         * data within the block at the given position.
                         */
                        // @ts-ignore
                         supports(coordinates: any /*Vector3i*/, manipulatorClass: java.lang.Class): boolean;
                        /**
                         * Checks if the given {@link DataManipulator} class is able to represent
                         * data within the block at the given position.
                         */
                        // @ts-ignore
                         supports(x: number, y: number, z: number, manipulatorClass: java.lang.Class): boolean;
                        /**
                         * Checks if the given {@link DataManipulator} class is able to represent
                         * data within the block at the given position.
                         */
                        // @ts-ignore
                         supports(coordinates: any /*Vector3i*/, manipulator: org.spongepowered.api.data.manipulator.DataManipulator): boolean;
                        /**
                         * Checks if the given {@link DataManipulator} class is able to represent
                         * data within the block at the given position.
                         */
                        // @ts-ignore
                         supports(x: number, y: number, z: number, manipulator: org.spongepowered.api.data.manipulator.DataManipulator): boolean;
                        /**
                         * Gets an {@link ImmutableSet} of {@link Key}s for the block at the given
                         * location.
                         */
                        // @ts-ignore
                         getKeys(coordinates: any /*Vector3i*/): java.util.Set;
                        /**
                         * Gets an {@link ImmutableSet} of {@link Key}s for the block at the given
                         * location.
                         */
                        // @ts-ignore
                         getKeys(x: number, y: number, z: number): java.util.Set;
                        /**
                         * Gets an {@link ImmutableSet} of {@link ImmutableValue}s for the block at
                         * the given location.
                         */
                        // @ts-ignore
                         getValues(coordinates: any /*Vector3i*/): java.util.Set;
                        /**
                         * Gets an {@link ImmutableSet} of {@link ImmutableValue}s for the block at
                         * the given location.
                         */
                        // @ts-ignore
                         getValues(x: number, y: number, z: number): java.util.Set;
                        /**
                         * Applies a transformation on the pre-existing value of the data keyed by
                         * the provided {@link Key} and returns a {@link DataTransactionResult} of
                         * said transformation.
                         */
                        // @ts-ignore
                         transform(coordinates: any /*Vector3i*/, key: org.spongepowered.api.data.key.Key, func: java.util.function$.Function): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Applies a transformation on the pre-existing value of the data keyed by
                         * the provided {@link Key} and returns a {@link DataTransactionResult} of
                         * said transformation.
                         */
                        // @ts-ignore
                         transform(x: number, y: number, z: number, key: org.spongepowered.api.data.key.Key, func: java.util.function$.Function): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Offers the given <code>E</code> value that is keyed by the provided
                         * {@link Key} to the block at the provided location.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         */
                        // @ts-ignore
                         offer(coordinates: any /*Vector3i*/, key: org.spongepowered.api.data.key.Key, value: java.lang.Object): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Offers the given <code>E</code> value that is keyed by the provided
                         * {@link Key} to the block at the provided location.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         */
                        // @ts-ignore
                         offer(x: number, y: number, z: number, key: org.spongepowered.api.data.key.Key, value: java.lang.Object): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Offers the given {@link BaseValue} to the block at the given position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         */
                        // @ts-ignore
                         offer(coordinates: any /*Vector3i*/, value: org.spongepowered.api.data.value.BaseValue): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Offers the given {@link BaseValue} to the block at the given position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         */
                        // @ts-ignore
                         offer(x: number, y: number, z: number, value: org.spongepowered.api.data.value.BaseValue): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Offers the given {@link DataManipulator} to the block at the given
                         * position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         */
                        // @ts-ignore
                         offer(coordinates: any /*Vector3i*/, manipulator: org.spongepowered.api.data.manipulator.DataManipulator): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Offers the given {@link DataManipulator} to the block at the given
                         * position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         */
                        // @ts-ignore
                         offer(x: number, y: number, z: number, manipulator: org.spongepowered.api.data.manipulator.DataManipulator): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Offers the given {@link DataManipulator} to the block at the given
                         * position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         */
                        // @ts-ignore
                         offer(coordinates: any /*Vector3i*/, manipulator: org.spongepowered.api.data.manipulator.DataManipulator, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Offers the given {@link DataManipulator} to the block at the given
                         * position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         */
                        // @ts-ignore
                         offer(x: number, y: number, z: number, manipulator: org.spongepowered.api.data.manipulator.DataManipulator, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Offers the provided {@link DataManipulator}s to the block at the given
                         * position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected, replaced, and
                         * successfully offered data.</p>
                         */
                        // @ts-ignore
                         offer(coordinates: any /*Vector3i*/, manipulators: java.lang.Iterable): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Offers the provided {@link DataManipulator}s to the block at the given
                         * position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected, replaced, and
                         * successfully offered data.</p>
                         */
                        // @ts-ignore
                         offer(x: number, y: number, z: number, manipulators: java.lang.Iterable): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Offers the provided {@link DataManipulator}s to the block at the given
                         * position. If there's any overlaps of data, the provided
                         * {@link MergeFunction} is used to delegate the merges. It is possible to
                         * recycle {@link MergeFunction}s provided that the {@link MergeFunction} is
                         * aware of being usable in multiple environments.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected, replaced, and
                         * successfully offered data.</p>
                         */
                        // @ts-ignore
                         offer(blockPosition: any /*Vector3i*/, values: java.lang.Iterable, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Attempts to remove the given {@link DataManipulator} represented by the
                         * block at the given location if possible.
                         * <p>Certain {@link DataManipulator}s can not be removed due to certain
                         * dependencies relying on the particular data to function.</p>
                         */
                        // @ts-ignore
                         remove(coordinates: any /*Vector3i*/, manipulatorClass: java.lang.Class): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Attempts to remove the given {@link DataManipulator} represented by the
                         * block at the given location if possible.
                         * <p>Certain {@link DataManipulator}s can not be removed due to certain
                         * dependencies relying on the particular data to function.</p>
                         */
                        // @ts-ignore
                         remove(x: number, y: number, z: number, manipulatorClass: java.lang.Class): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Attempts to remove the data associated with the provided {@link Key} from
                         * the block at the provided location.
                         */
                        // @ts-ignore
                         remove(coordinates: any /*Vector3i*/, key: org.spongepowered.api.data.key.Key): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Attempts to remove the data associated with the provided {@link Key} from
                         * the block at the provided location.
                         */
                        // @ts-ignore
                         remove(x: number, y: number, z: number, key: org.spongepowered.api.data.key.Key): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Attempts to undo a {@link DataTransactionResult}. Specifically, all
                         * {@link ImmutableValue}s that were successfully added are removed, and all
                         * replaced {@link ImmutableValue}s are offered.
                         */
                        // @ts-ignore
                         undo(coordinates: any /*Vector3i*/, result: org.spongepowered.api.data.DataTransactionResult): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Attempts to undo a {@link DataTransactionResult}. Specifically, all
                         * {@link ImmutableValue}s that were successfully added are removed, and all
                         * replaced {@link ImmutableValue}s are offered.
                         */
                        // @ts-ignore
                         undo(x: number, y: number, z: number, result: org.spongepowered.api.data.DataTransactionResult): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Attempts to copy all the relevant data from the provided
                         * {@link DataHolder} to the block at the provided coordinates.
                         */
                        // @ts-ignore
                         copyFrom(to: any /*Vector3i*/, from: org.spongepowered.api.data.DataHolder): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Attempts to copy all the relevant data from the provided
                         * {@link DataHolder} to the block at the provided coordinates.
                         */
                        // @ts-ignore
                         copyFrom(xTo: number, yTo: number, zTo: number, from: org.spongepowered.api.data.DataHolder): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Attempts to copy all the relevant data from the provided
                         * {@link DataHolder} to the block at the provided coordinates.
                         */
                        // @ts-ignore
                         copyFrom(coordinatesTo: any /*Vector3i*/, coordinatesFrom: any /*Vector3i*/): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Attempts to copy all {@link ImmutableValue}s from the provided block to
                         * provided block to the provided block coordinates.
                         */
                        // @ts-ignore
                         copyFrom(xTo: number, yTo: number, zTo: number, xFrom: number, yFrom: number, zFrom: number): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Attempts to copy all {@link ImmutableValue}s from the provided block to
                         * provided block to the provided block coordinates. Any conflicting data is
                         * handled through the provided {@link MergeFunction}.
                         */
                        // @ts-ignore
                         copyFrom(to: any /*Vector3i*/, from: org.spongepowered.api.data.DataHolder, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Attempts to copy all {@link ImmutableValue}s from the provided block to
                         * provided block to the provided block coordinates. Any conflicting data is
                         * handled through the provided {@link MergeFunction}.
                         */
                        // @ts-ignore
                         copyFrom(xTo: number, yTo: number, zTo: number, from: org.spongepowered.api.data.DataHolder, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Attempts to copy all {@link ImmutableValue}s from the provided block to
                         * provided block to the provided block coordinates. Any conflicting data is
                         * handled through the provided {@link MergeFunction}.
                         */
                        // @ts-ignore
                         copyFrom(coordinatesTo: any /*Vector3i*/, coordinatesFrom: any /*Vector3i*/, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Attempts to copy all {@link ImmutableValue}s from the provided block to
                         * provided block to the provided block coordinates. Any conflicting data is
                         * handled through the provided {@link MergeFunction}.
                         */
                        // @ts-ignore
                         copyFrom(xTo: number, yTo: number, zTo: number, xFrom: number, yFrom: number, zFrom: number, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult;
                        /**
                         * Gets an copied collection of all known {@link DataManipulator}s belonging
                         * to the block at the given position. An individual {@link DataManipulator}
                         * can be used for creating new data to replace on the block at the given
                         * position.
                         */
                        // @ts-ignore
                         getManipulators(coordinates: any /*Vector3i*/): java.util.Collection;
                        /**
                         * Gets an copied collection of all known {@link DataManipulator}s belonging
                         * to the block at the given position. An individual {@link DataManipulator}
                         * can be used for creating new data to replace on the block at the given
                         * position.
                         */
                        // @ts-ignore
                         getManipulators(x: number, y: number, z: number): java.util.Collection;
                        /**
                         * Validates the container with known data required to set the raw data to
                         * the block at the given position. If the container is incomplete or
                         * contains invalid data, <code>false</code> is returned.
                         * <p>This validation should be checked prior to calling
                         * {@link #setRawData(Vector3i, DataView)} to avoid exceptions.</p>
                         */
                        // @ts-ignore
                         validateRawData(position: any /*Vector3i*/, container: org.spongepowered.api.data.DataView): boolean;
                        /**
                         * Validates the container with known data required to set the raw data to
                         * the block at the given position. If the container is incomplete or
                         * contains invalid data, <code>false</code> is returned.
                         * <p>This validation should be checked prior to calling
                         * {@link #setRawData(Vector3i, DataView)} to avoid exceptions.</p>
                         */
                        // @ts-ignore
                         validateRawData(x: number, y: number, z: number, container: org.spongepowered.api.data.DataView): boolean;
                        /**
                         * Attempts to set all data of the block at the given position according to
                         * the {@link DataContainer}'s held information. Using this to modify known
                         * {@link DataManipulator}s is unsupported and if the data is invalid, an
                         * {@link InvalidDataException} is thrown.
                         * <p>This setter is used to provide setting custom data that is not
                         * represented by the Data API, including forge mods and other unknown data.
                         * Attempts at validating known {@link DataManipulator}s contained in the
                         * data container are made with the assumption that all necessary data
                         * exists.</p>
                         */
                        // @ts-ignore
                         setRawData(position: any /*Vector3i*/, container: org.spongepowered.api.data.DataView): void;
                        /**
                         * Attempts to set all data of the block at the given position according to
                         * the {@link DataContainer}'s held information. Using this to modify known
                         * {@link DataManipulator}s is unsupported and if the data is invalid, an
                         * {@link InvalidDataException} is thrown.
                         * <p>This setter is used to provide setting custom data that is not
                         * represented by the Data API, including forge mods and other unknown data.
                         * Attempts at validating known {@link DataManipulator}s contained in the
                         * data container are made with the assumption that all necessary data
                         * exists.</p>
                         */
                        // @ts-ignore
                         setRawData(x: number, y: number, z: number, container: org.spongepowered.api.data.DataView): void;
                    }
                }
            }
        }
    }
}
