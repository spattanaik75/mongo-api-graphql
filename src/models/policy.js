import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const PolicySchema = new Schema(
    {
        _id: {
            type: 'String',
            desc: 'CASE_KEY',
        },
        policyNumber: String,
        umbrellaNumber: String,
        commencementDate: Date,
        productCode: String,
        productName: Number,
        ownerEntityNumber: String,
        ownerName: String,
        ownerFirstnames: String,
        ownerSurname: String,
        ownerEntityType: String,
        brokerEntityNumber: String,
        status: String,
        maturityDate: Date,
        groupName: String,
        annualContributionIncrease: String,
        premiumFrequency: String,
        recurringPremium: String,
        totalSinglePremium: String,
        initialContribution: String,
        adhocContribution: String,
        totalContributions: String,
        totalWithdrawals: String,
        fundValue: String,
        maturityValue: String,
        growthRate: String,
        incomeEscalationRate: String,
        reportingCurrency: String,
        extractDate: Date,
        fundAllocation: [
            {
                type: Schema.Types.ObjectId,
                ref: 'FundAllocation',
            },
        ],
        cessionType: String,
    },
    {
        collection: 'policy',
    }
);

export const Policy = mongoose.model('Policy', PolicySchema);
export const PolicyTC = composeWithMongoose(Policy);
