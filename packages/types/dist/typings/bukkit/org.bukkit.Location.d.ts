declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class Location extends java.lang.Object implements org.bukkit.configuration.serialization.ConfigurationSerializable {
            /**
             * Constructs a new Location with the given coordinates
             */
            // @ts-ignore
            constructor(world: org.bukkit.World, x: number, y: number, z: number)
            /**
             * Constructs a new Location with the given coordinates and direction
             */
            // @ts-ignore
            constructor(world: org.bukkit.World, x: number, y: number, z: number, yaw: number, pitch: number)
            /**
             * Sets the world that this location resides in
             */
            // @ts-ignore
            public setWorld(world: org.bukkit.World): void;
            /**
             * Checks if world in this location is present and loaded.
             */
            // @ts-ignore
            public isWorldLoaded(): boolean;
            /**
             * Gets the world that this location resides in
             */
            // @ts-ignore
            public getWorld(): org.bukkit.World;
            /**
             * Gets the chunk at the represented location
             */
            // @ts-ignore
            public getChunk(): org.bukkit.Chunk;
            /**
             * Gets the block at the represented location
             */
            // @ts-ignore
            public getBlock(): org.bukkit.block.Block;
            /**
             * Sets the x-coordinate of this location
             */
            // @ts-ignore
            public setX(x: number): void;
            /**
             * Gets the x-coordinate of this location
             */
            // @ts-ignore
            public getX(): number;
            /**
             * Gets the floored value of the X component, indicating the block that
             * this location is contained with.
             */
            // @ts-ignore
            public getBlockX(): number;
            /**
             * Sets the y-coordinate of this location
             */
            // @ts-ignore
            public setY(y: number): void;
            /**
             * Gets the y-coordinate of this location
             */
            // @ts-ignore
            public getY(): number;
            /**
             * Gets the floored value of the Y component, indicating the block that
             * this location is contained with.
             */
            // @ts-ignore
            public getBlockY(): number;
            /**
             * Sets the z-coordinate of this location
             */
            // @ts-ignore
            public setZ(z: number): void;
            /**
             * Gets the z-coordinate of this location
             */
            // @ts-ignore
            public getZ(): number;
            /**
             * Gets the floored value of the Z component, indicating the block that
             * this location is contained with.
             */
            // @ts-ignore
            public getBlockZ(): number;
            /**
             * Sets the yaw of this location, measured in degrees.
             * <ul>
             * <li>A yaw of 0 or 360 represents the positive z direction.
             * <li>A yaw of 180 represents the negative z direction.
             * <li>A yaw of 90 represents the negative x direction.
             * <li>A yaw of 270 represents the positive x direction.
             * </ul>
             * Increasing yaw values are the equivalent of turning to your
             * right-facing, increasing the scale of the next respective axis, and
             * decreasing the scale of the previous axis.
             */
            // @ts-ignore
            public setYaw(yaw: number): void;
            /**
             * Gets the yaw of this location, measured in degrees.
             * <ul>
             * <li>A yaw of 0 or 360 represents the positive z direction.
             * <li>A yaw of 180 represents the negative z direction.
             * <li>A yaw of 90 represents the negative x direction.
             * <li>A yaw of 270 represents the positive x direction.
             * </ul>
             * Increasing yaw values are the equivalent of turning to your
             * right-facing, increasing the scale of the next respective axis, and
             * decreasing the scale of the previous axis.
             */
            // @ts-ignore
            public getYaw(): number;
            /**
             * Sets the pitch of this location, measured in degrees.
             * <ul>
             * <li>A pitch of 0 represents level forward facing.
             * <li>A pitch of 90 represents downward facing, or negative y
             * direction.
             * <li>A pitch of -90 represents upward facing, or positive y direction.
             * </ul>
             * Increasing pitch values the equivalent of looking down.
             */
            // @ts-ignore
            public setPitch(pitch: number): void;
            /**
             * Gets the pitch of this location, measured in degrees.
             * <ul>
             * <li>A pitch of 0 represents level forward facing.
             * <li>A pitch of 90 represents downward facing, or negative y
             * direction.
             * <li>A pitch of -90 represents upward facing, or positive y direction.
             * </ul>
             * Increasing pitch values the equivalent of looking down.
             */
            // @ts-ignore
            public getPitch(): number;
            /**
             * Gets a unit-vector pointing in the direction that this Location is
             * facing.
             */
            // @ts-ignore
            public getDirection(): org.bukkit.util.Vector;
            /**
             * Sets the {@link #getYaw() yaw} and {@link #getPitch() pitch} to point
             * in the direction of the vector.
             */
            // @ts-ignore
            public setDirection(vector: org.bukkit.util.Vector): org.bukkit.Location;
            /**
             * Adds the location by another.
             */
            // @ts-ignore
            public add(vec: org.bukkit.Location): org.bukkit.Location;
            /**
             * Adds the location by a vector.
             */
            // @ts-ignore
            public add(vec: org.bukkit.util.Vector): org.bukkit.Location;
            /**
             * Adds the location by another. Not world-aware.
             */
            // @ts-ignore
            public add(x: number, y: number, z: number): org.bukkit.Location;
            /**
             * Subtracts the location by another.
             */
            // @ts-ignore
            public subtract(vec: org.bukkit.Location): org.bukkit.Location;
            /**
             * Subtracts the location by a vector.
             */
            // @ts-ignore
            public subtract(vec: org.bukkit.util.Vector): org.bukkit.Location;
            /**
             * Subtracts the location by another. Not world-aware and
             * orientation independent.
             */
            // @ts-ignore
            public subtract(x: number, y: number, z: number): org.bukkit.Location;
            /**
             * Gets the magnitude of the location, defined as sqrt(x^2+y^2+z^2). The
             * value of this method is not cached and uses a costly square-root
             * function, so do not repeatedly call this method to get the location's
             * magnitude. NaN will be returned if the inner result of the sqrt()
             * function overflows, which will be caused if the length is too long. Not
             * world-aware and orientation independent.
             */
            // @ts-ignore
            public length(): number;
            /**
             * Gets the magnitude of the location squared. Not world-aware and
             * orientation independent.
             */
            // @ts-ignore
            public lengthSquared(): number;
            /**
             * Get the distance between this location and another. The value of this
             * method is not cached and uses a costly square-root function, so do not
             * repeatedly call this method to get the location's magnitude. NaN will
             * be returned if the inner result of the sqrt() function overflows, which
             * will be caused if the distance is too long.
             */
            // @ts-ignore
            public distance(o: org.bukkit.Location): number;
            /**
             * Get the squared distance between this location and another.
             */
            // @ts-ignore
            public distanceSquared(o: org.bukkit.Location): number;
            /**
             * Performs scalar multiplication, multiplying all components with a
             * scalar. Not world-aware.
             */
            // @ts-ignore
            public multiply(m: number): org.bukkit.Location;
            /**
             * Zero this location's components. Not world-aware.
             */
            // @ts-ignore
            public zero(): org.bukkit.Location;
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            // @ts-ignore
            public hashCode(): number;
            // @ts-ignore
            public toString(): string;
            /**
             * Constructs a new {@link Vector} based on this Location
             */
            // @ts-ignore
            public toVector(): org.bukkit.util.Vector;
            // @ts-ignore
            public clone(): org.bukkit.Location;
            /**
             * Check if each component of this Location is finite.
             */
            // @ts-ignore
            public checkFinite(): void;
            /**
             * Safely converts a double (location coordinate) to an int (block
             * coordinate)
             */
            // @ts-ignore
            public static locToBlock(loc: number): number;
            // @ts-ignore
            public serialize(): java.util.Map;
            /**
             * Required method for deserialization
             */
            // @ts-ignore
            public static deserialize(args: java.util.Map): org.bukkit.Location;
            /**
             * Normalizes the given yaw angle to a value between <code>+/-180</code>
             * degrees.
             */
            // @ts-ignore
            public static normalizeYaw(yaw: number): number;
            /**
             * Normalizes the given pitch angle to a value between <code>+/-90</code>
             * degrees.
             */
            // @ts-ignore
            public static normalizePitch(pitch: number): number;
        }
    }
}
