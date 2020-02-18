import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const FundSchema = new Schema(
    {
        _id: String,
        fundCode: String,
        principleFundCode: String,
        mainFundCode: String,
        isinCode: String,
        trustNumber: Number,
        longName: String,
        className: String,
        currency: String,
        discoveryFund: String,
        fundCap: String,
        specialCap: String,
        regulatedFund: String,
        principleClass: String,
        webDisplay: String,
        sharePortfolioFund: String,
        aciSectorCode: String,
        aciSectorGroup: String,
        assetManager: String,
        discoverySectorCode: String,
        discoverySectorDesc: String,
        ageInMonths: String,
        assetAllocations: {
            type: [
                {
                    assetClassCode: String,
                    percentage: Number,
                    lastModDate: Date,
                    portfolioDate: Date,
                    assetClassDescription: String,
                },
            ],
        },
    },
    {
        collection: 'funds',
    }
);

export const Fund = mongoose.model('Fund', FundSchema);
export const FundTC = composeWithMongoose(Fund);
