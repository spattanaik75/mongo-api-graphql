import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const SectorFundPricingMonthlySchema = new Schema(
    {
        _id: String,
        aciSectorCode: String,
        monthlyReturns: Number,
    },
    {
        collection: 'sector_fund_pricing_monthly',
    }
);

export const SectorFundPricingMonthly = mongoose.model(
    'SectorFundPricingMonthly',
    SectorFundPricingMonthlySchema
);
export const SectorFundPricingMonthlyTC = composeWithMongoose(
    SectorFundPricingMonthly
);
