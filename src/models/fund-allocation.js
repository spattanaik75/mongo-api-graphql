import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const FundAllocationSchema = new Schema(
    {
        fundId: String,
        shortName: String,
        fundValue: Number,
        percentage: Number,
        priceDate: Date,
        currency: String,
        units: Number,
        currencies: {
            type: String,
            enum: ['USD', 'ZAR', 'GBP'],
            default: 'ZAR',
        },
        effectiveDate: Date,
    },
    {
        collection: 'fund-allocation',
    }
);

export const FundAllocation = mongoose.model(
    'FundAllocation',
    FundAllocationSchema
);
export const FundAllocationTC = composeWithMongoose(FundAllocation);
