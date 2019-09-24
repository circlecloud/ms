declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class Location implements org.bukkit.configuration.serialization.ConfigurationSerializable {
            /**
             * Constructs a new Location with the given coordinates
             */
            constructor(world: org.bukkit.World, x: number, y: number, z: number)
            /**
             * Constructs a new Location with the given coordinates and direction
             */
            constructor(world: org.bukkit.World, x: number, y: number, z: number, yaw: number, pitch: number)
            /**
             * Sets the world that this location resides in
             */
            public setWorld(world: org.bukkit.World): void;
            /**
             * Checks if world in this location is present and loaded.
             */
            public isWorldLoaded(): boolean;
            /**
             * Gets the world that this location resides in
             */
            public getWorld(): org.bukkit.World;
            /**
             * Gets the chunk at the represented location
             */
            public getChunk(): org.bukkit.Chunk;
            /**
             * Gets the block at the represented location
             */
            public getBlock(): org.bukkit.block.Block;
            /**
             * Sets the x-coordinate of this location
             */
            public setX(x: number): void;
            /**
             * Gets the x-coordinate of this location
             */
            public getX(): number;
            /**
             * Gets the floored value of the X component, indicating the block that
             * this location is contained with.
             */
            public getBlockX(): number;
            /**
             * Sets the y-coordinate of this location
             */
            public setY(y: number): void;
            /**
             * Gets the y-coordinate of this location
             */
            public getY(): number;
            /**
             * Gets the floored value of the Y component, indicating the block that
             * this location is contained with.
             */
            public getBlockY(): number;
            /**
             * Sets the z-coordinate of this location
             */
            public setZ(z: number): void;
            /**
             * Gets the z-coordinate of this location
             */
            public getZ(): number;
            /**
             * Gets the floored value of the Z component, indicating the block that
             * this location is contained with.
             */
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
            public getPitch(): number;
            /**
             * Gets a unit-vector pointing in the direction that this Location is
             * facing.
             */
            public getDirection(): org.bukkit.util.Vector;
            /**
             * Sets the {@link #getYaw() yaw} and {@link #getPitch() pitch} to point
             * in the direction of the vector.
             */
            public setDirection(vector: org.bukkit.util.Vector): org.bukkit.Location;
            /**
             * Adds the location by another.
             */
            public add(vec: org.bukkit.Location): org.bukkit.Location;
            /**
             * Adds the location by a vector.
             */
            public add(vec: org.bukkit.util.Vector): org.bukkit.Location;
            /**
             * Adds the location by another. Not world-aware.
             */
            public add(x: number, y: number, z: number): org.bukkit.Location;
            /**
             * Subtracts the location by another.
             */
            public subtract(vec: org.bukkit.Location): org.bukkit.Location;
            /**
             * Subtracts the location by a vector.
             */
            public subtract(vec: org.bukkit.util.Vector): org.bukkit.Location;
            /**
             * Subtracts the location by another. Not world-aware and
             * orientation independent.
             */
            public subtract(x: number, y: number, z: number): org.bukkit.Location;
            /**
             * Gets the magnitude of the location, defined as sqrt(x^2+y^2+z^2). The
             * value of this method is not cached and uses a costly square-root
             * function, so do not repeatedly call this method to get the location's
             * magnitude. NaN will be returned if the inner result of the sqrt()
             * function overflows, which will be caused if the length is too long. Not
             * world-aware and orientation independent.
             */
            public length(): number;
            /**
             * Gets the magnitude of the location squared. Not world-aware and
             * orientation independent.
             */
            public lengthSquared(): number;
            /**
             * Get the distance between this location and another. The value of this
             * method is not cached and uses a costly square-root function, so do not
             * repeatedly call this method to get the location's magnitude. NaN will
             * be returned if the inner result of the sqrt() function overflows, which
             * will be caused if the distance is too long.
             */
            public distance(o: org.bukkit.Location): number;
            /**
             * Get the squared distance between this location and another.
             */
            public distanceSquared(o: org.bukkit.Location): number;
            /**
             * Performs scalar multiplication, multiplying all components with a
             * scalar. Not world-aware.
             */
            public multiply(m: number): org.bukkit.Location;
            /**
             * Zero this location's components. Not world-aware.
             */
            public zero(): org.bukkit.Location;
            public equals(obj: any): boolean;
            public hashCode(): number;
            public toString(): string;
            /**
             * Constructs a new {@link Vector} based on this Location
             */
            public toVector(): org.bukkit.util.Vector;
            public clone(): org.bukkit.Location;
            /**
             * Check if each component of this Location is finite.
             */
            public checkFinite(): void;
            /**
             * Safely converts a double (location coordinate) to an int (block
             * coordinate)
             */
            public static locToBlock(loc: number): number;
            public serialize(): Map<any, any> /*java.util.Map*/;
            /**
             * Required method for deserialization
             */
            public static deserialize(args: Map<any, any> /*java.util.Map*/): org.bukkit.Location;
            /**
             * Normalizes the given yaw angle to a value between <code>+/-180</code>
             * degrees.
             */
            public static normalizeYaw(yaw: number): number;
            /**
             * Normalizes the given pitch angle to a value between <code>+/-90</code>
             * degrees.
             */
            public static normalizePitch(pitch: number): number;
        }
    }
}
