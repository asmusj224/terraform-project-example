import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateExampleInput {
  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  isEnabled?: boolean;
}
