import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const FundComprehensiveSchema = new Schema(
    {
        _id: String,
        jseFundCode: String,
        fdDescId: String,
        trustNumber: String,
        fundName: String,
        className: String,
        mainFundCode: String,
        principleFundCode: String,
        discoveryFund: Boolean,
        regulatedFund: Boolean,
        currency: String,
        capInd: Boolean,
        sharePortfolioFund: Boolean,
        ageInMonths: String,
        logInDisplay: Boolean,
        discoverySectorCode: String,
        discoverySectorDesc: String,
        aciSectorCode: String,
        aciSectorDesc: String,
        aciSectorGroup: String,
        fundPdfOrder: String,
        structuredFundPerfUrl: String,
        fundFocus: String,
        benchmarkName: String,
        launchDate: Date,
        incomeDistribFreq: String,
        yearlyPerformanceDisclaimer: String,
        historicalRiskCd: String,
        historicalRisk: String,
        historicalReturnCd: String,
        historicalReturn: String,
        sectorRank: String,
        sectorQuartilePct: String,
        sectorRankQuartile: String,
        sectorCount: String,
        world: Boolean,
        ebFund: Boolean,
        ebMapping: String,
        ebFundStatement: String,
        mancoId: String,
        mancoName: String,
        fundManager: {
            type: [
                {
                    fundManagerId: String,
                    fundManagerName: String,
                },
            ],
        },
        commentaries: {
            type: [
                {
                    displayInfo: String,
                    urlLink: String,
                    ordering: String,
                    lastModDt: String,
                    lastModUser: String,
                },
            ],
        },
        fees: {
            type: [
                {
                    initialFeePct: String,
                    annualFeePct: String,
                    minimumAnnualFee: String,
                    maximumAnnualFee: String,
                    totalExpenseRatio: String,
                    transactionCosts: String,
                    totalExpenseRatioExclPP: String,
                    totalExpenseRatioDt: String,
                    initialProtectorPremiumPct: String,
                    annualProtectorPremiumPct: String,
                    compassInitialFee: String,
                },
            ],
        },
        performance: {
            type: [
                {
                    calcDescription: String,
                    calcTypCd: String,
                    periodCd: String,
                    period: String,
                    effDt: String,
                    pct: Number,
                    yearlyReturn: String,
                    sectorRank: String,
                    sectorQuartilePct: Number,
                    sectorRankQuartile: String,
                },
            ],
        },
        sectorPerformance: {
            type: [
                {
                    calcDescription: String,
                    calcTypCd: String,
                    periodCd: String,
                    period: String,
                    effDt: Date,
                    pct: Number,
                },
            ],
        },
        facts: {
            type: [
                {
                    fundSizeAmount: Number,
                    fundSizeUnitCt: String,
                    portfDt: Date,
                },
            ],
        },
        assetAllocation: {
            type: [
                {
                    assetClassCode: String,
                    assetClassDesc: String,
                    percentage: Number,
                    portfolioDate: Date,
                },
            ],
        },
        sectorAllocation: {
            type: [
                {
                    allocDt: String,
                    marketSectorName: String,
                    allocPct: Number,
                },
            ],
        },
        topHoldings: {
            type: [
                {
                    allocDt: String,
                    holdingName: String,
                    holdingSector: String,
                    allocPct: Number,
                },
            ],
        },
        incomeDistribution: {
            type: [
                {
                    periodYear: String,
                    periodMonth: String,
                    value: String,
                },
            ],
        },
        cashSplit: {
            type: [
                {
                    allocDt: String,
                    unitTrustPct: Number,
                    cashPct: Number,
                },
            ],
        },
        productAvailable: {
            type: [
                {
                    code: String,
                    description: String,
                },
            ],
        },
        reg28: {
            type: {
                regulated: Boolean,
                allocDescr: String,
                descCd: String,
                maxFundPct: Number,
                allowedPct: Number,
            },
        },
        fofBreakdown: {
            type: [
                {
                    underlyingFdDescId: String,
                    electPct: Number,
                    prodTypCd: String,
                    benCatCd: String,
                },
            ],
        },
    },
    {
        collection: 'fund_comprehensive',
    }
);

export const FundComprehensive = mongoose.model(
    'FundComprehensive',
    FundComprehensiveSchema
);
export const FundComprehensiveTC = composeWithMongoose(FundComprehensive);
