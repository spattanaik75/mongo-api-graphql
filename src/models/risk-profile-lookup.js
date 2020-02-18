import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const RiskProfileLookupSchema = new Schema(
    {
        _id: {
            type: String,
            desc: 'CASE_KEY',
        },
        policyNumber: String,
        product: String,
        productCategory: String,
        riskProfile: String,
        riskProfileCode: String,
        portfolioRiskRatingMin: Number,
        portfolioRiskRatingMax: Number,
        performanceGoal: String,
        inflationPlus: String,
        assetClass: String,
        assetClassCode: String,
        min: Number,
        max: Number,
    },
    {
        collection: 'risk_profile_lookup',
    }
);

export const RiskProfileLookup = mongoose.model(
    'RiskProfileLookup',
    RiskProfileLookupSchema
);
export const RiskProfileLookupTC = composeWithMongoose(RiskProfileLookup);
