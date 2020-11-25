import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import {buildSchema} from "type-graphql";
import { ExampleResolver } from "./resolvers/ExampleResolver";
import {typeOrmConfig} from "./config";


const PORT = process.env.PORT || 4000;

async function main() {
  const connection = await createConnection(typeOrmConfig);
  const schema = await buildSchema({resolvers: [ExampleResolver]});
  const server = new ApolloServer({schema});
  await server.listen(PORT);
}

main().then(() => console.log(`Running on Port ${PORT}`)).catch(e => console.log(e));
