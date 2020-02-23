declare namespace cn {
    namespace nukkit {
        namespace math {
            // @ts-ignore
             class NukkitRandom extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(seeds: number)
                // @ts-ignore
                protected seed: number;
                // @ts-ignore
                public setSeed(seeds: number): void;
                // @ts-ignore
                public nextSignedInt(): number;
                // @ts-ignore
                public nextInt(): number;
                // @ts-ignore
                public nextDouble(): number;
                // @ts-ignore
                public nextFloat(): number;
                // @ts-ignore
                public nextSignedFloat(): number;
                // @ts-ignore
                public nextSignedDouble(): number;
                // @ts-ignore
                public nextBoolean(): boolean;
                // @ts-ignore
                public nextRange(): number;
                // @ts-ignore
                public nextRange(start: number): number;
                // @ts-ignore
                public nextRange(start: number, end: number): number;
                // @ts-ignore
                public nextBoundedInt(bound: number): number;
            }
        }
    }
}
