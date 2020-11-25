import { InputType, Field } from "type-graphql";

@InputType()
export class CreateExampleInput {
 @Field()
 name: string;

 @Field()
 isEnabled: boolean;
}
