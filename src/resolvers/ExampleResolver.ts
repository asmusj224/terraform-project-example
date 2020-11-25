import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Example } from "../entities/Example";
import {CreateExampleInput} from '../inputs/CreateExampleInput';
import {UpdateExampleInput} from '../inputs/UpdateExampleInput';

@Resolver()
export class ExampleResolver {
  @Query(() => [Example])
  examples() {
    return Example.find() 
  }

  @Query(() => Example)
  example(@Arg("id") id: string) {
    return Example.findOne({where: { id }});
  }

  @Mutation(() => Example)
  async createExample(@Arg("data") data: CreateExampleInput) {
   const example = Example.create(data);
   await example.save();
   return example;
  }

  @Mutation(() => Example) 
  async updateExample(@Arg("id") id: string, @Arg("data")data: UpdateExampleInput) {
    const example = await Example.findOne({where: { id }});
    if(!example) throw new Error("Example not found!");
    Object.assign(example, data);
    await example.save();
    return example;
  }

  @Mutation(() => Boolean)
  async deleteExample(@Arg("id") id: string) {
    const example = await Example.findOne({where: { id }});
    if(!example) throw Error("Example not found!")
    await example.remove();
    return true;
  }
}
