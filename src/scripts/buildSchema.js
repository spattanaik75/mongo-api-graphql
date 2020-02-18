import fs from 'fs-extra';
import path from 'path';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';

import Schema from '../schema';

async function buildSchema() {
    await fs.ensureFile('../data/schema.graphql.json');
    await fs.ensureFile('../data/schema.graphql');

    fs.writeFileSync(
        path.join(__dirname, '../data/schema.graphql.json'),
        JSON.stringify(await graphql(Schema, introspectionQuery), null, 2)
    );

    fs.writeFileSync(
        path.join(__dirname, '../data/schema.graphql'),
        printSchema(Schema)
    );
}

async function run() {
    await buildSchema();
    console.log('Schema build complete!');
    process.exit(0);
}

run().catch(e => {
    console.log(e);
    process.exit(0);
});
