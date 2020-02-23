declare namespace cn {
    namespace nukkit {
        // @ts-ignore
         class PlayerFood extends java.lang.Object {
            // @ts-ignore
            constructor(player: cn.nukkit.Player, foodLevel: number, foodSaturationLevel: number)
            // @ts-ignore
            public getPlayer(): cn.nukkit.Player;
            // @ts-ignore
            public getLevel(): number;
            // @ts-ignore
            public getMaxLevel(): number;
            // @ts-ignore
            public setLevel(foodLevel: number): void;
            // @ts-ignore
            public setLevel(foodLevel: number, saturationLevel: number): void;
            // @ts-ignore
            public getFoodSaturationLevel(): number;
            // @ts-ignore
            public setFoodSaturationLevel(fsl: number): void;
            // @ts-ignore
            public useHunger(): void;
            // @ts-ignore
            public useHunger(amount: number): void;
            // @ts-ignore
            public addFoodLevel(food: cn.nukkit.item.food.Food): void;
            // @ts-ignore
            public addFoodLevel(foodLevel: number, fsl: number): void;
            // @ts-ignore
            public sendFoodLevel(): void;
            // @ts-ignore
            public reset(): void;
            // @ts-ignore
            public sendFoodLevel(foodLevel: number): void;
            // @ts-ignore
            public update(tickDiff: number): void;
            // @ts-ignore
            public updateFoodExpLevel(use: number): void;
            // @ts-ignore
            public setFoodLevel(foodLevel: number): void;
            // @ts-ignore
            public setFoodLevel(foodLevel: number, saturationLevel: number): void;
        }
    }
}
