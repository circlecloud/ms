declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace ScoreText {
                    // @ts-ignore
                     class Builder extends org.spongepowered.api.text.Text.Builder {
                        /**
                         * Returns the current score of this builder.
                         */
                        // @ts-ignore
                        public getScore(): org.spongepowered.api.scoreboard.Score;
                        /**
                         * Sets the score of the text.
                         */
                        // @ts-ignore
                        public score(score: org.spongepowered.api.scoreboard.Score): org.spongepowered.api.text.ScoreText.Builder;
                        /**
                         * Returns the current override of this builder.
                         */
                        // @ts-ignore
                        public getOverride(): any;
                        /**
                         * Overrides the real score and displays a custom text instead.
                         */
                        // @ts-ignore
                        public override(override: string): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public build(): org.spongepowered.api.text.ScoreText;
                        // @ts-ignore
                        public equals(o: any): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public format(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public style(styles: org.spongepowered.api.text.format.TextStyle): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public onClick(clickAction: org.spongepowered.api.text.action.ClickAction): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public onHover(hoverAction: org.spongepowered.api.text.action.HoverAction): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public onShiftClick(shiftClickAction: org.spongepowered.api.text.action.ShiftClickAction): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public append(children: org.spongepowered.api.text.Text): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public append(children: any[] /*java.util.Collection*/): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public append(children: any): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public append(children: any): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public insert(pos: number, children: org.spongepowered.api.text.Text): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public insert(pos: number, children: any[] /*java.util.Collection*/): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public insert(pos: number, children: any): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public insert(pos: number, children: any): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public remove(children: org.spongepowered.api.text.Text): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public remove(children: any[] /*java.util.Collection*/): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public remove(children: any): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public remove(children: any): org.spongepowered.api.text.ScoreText.Builder;
                        // @ts-ignore
                        public removeAll(): org.spongepowered.api.text.ScoreText.Builder;
                    }
                }
            }
        }
    }
}
