import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const PartySchema = new Schema(
    {
        entityNumber: String,
        firstname: String,
        surname: String,
        dateOfBirth: String,
        gender: String,
        maritalStatus: String,
        contactEmails: {
            type: [
                {
                    emailType: String,
                    address: String,
                },
            ],
        },
        contactNumbers: {
            type: [
                {
                    numberType: String,
                    number: String,
                },
            ],
        },
        legalIdentities: {
            type: [
                {
                    identityType: String,
                    number: String,
                },
            ],
        },
    },
    {
        collection: 'party',
    }
);

export const Party = mongoose.model('Party', PartySchema);
export const PartyTC = composeWithMongoose(Party);
