import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type ChickenDocument = Chicken & Document;

@Schema()
export class Chicken {
    @Prop({required: true})
    name: string;

    @Prop()
    birthday: Date;

    @Prop({required: true})
    weight: number;

    @Prop({default: 0})
    steps: number;

    @Prop({default: false})
    isRunning: boolean;
}

export const ChickenSchema = SchemaFactory.createForClass(Chicken);
