import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const FundPricingSchema = new Schema(
    {
        _id: String,
        jseFundCode: String,
        trustNumber: Number,
        navPrice: Number,
        triPrice: Number,
        pricedDt: Date,
        triNetChange: Number,
        navNetChange: Number,
        week52High: Number,
        week52Low: Number,
    },
    {
        collection: 'fund_pricing',
    }
);

export const FundPricing = mongoose.model('FundPricing', FundPricingSchema);
export const FundPricingTC = composeWithMongoose(FundPricing);
