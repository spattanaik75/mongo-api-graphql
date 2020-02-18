import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const SubscriptionSchema = new Schema(
    {
        _id: String,
        entityNumber: {
            type: 'String',
            desc: 'Entity number to whom the subscription belongs to',
        },
        percentage: {
            type: 'Number',
            desc: 'Subscription percentage',
        },
        amount: Number,
        role: String,
        relationship: String,
        policyNumber: String,
        policyOwnerEntityNumber: String,
        productName: String,
        productTypeCode: String,
        policyCommencementDate: Date,
        effectiveDate: Date,
    },
    {
        collection: 'subscription',
    }
);

export const Subscription = mongoose.model('Subscription', SubscriptionSchema);
export const SubscriptionTC = composeWithMongoose(Subscription);
