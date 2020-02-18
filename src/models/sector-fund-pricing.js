import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const SectorFundPricingSchema = new Schema(
    {
        _id: String,
        aciSectorCode: String,
        triPrice: Number,
        pricedDt: Date,
        avgReturn: Number,
    },
    {
        collection: 'sector_fund_pricing',
    }
);

export const SectorFundPricing = mongoose.model(
    'SectorFundPricing',
    SectorFundPricingSchema
);
export const SectorFundPricingTC = composeWithMongoose(SectorFundPricing);
