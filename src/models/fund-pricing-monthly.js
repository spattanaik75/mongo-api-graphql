import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const FundPricingMonthlySchema = new Schema(
    {
        _id: String,
        jseFundCode: String,
        monthlyReturns: Number,
    },
    {
        collection: 'fund_pricing_monthly',
    }
);

export const FundPricingMonthly = mongoose.model(
    'FundPricingMonthly',
    FundPricingMonthlySchema
);
export const FundPricingMonthlyTC = composeWithMongoose(FundPricingMonthly);
