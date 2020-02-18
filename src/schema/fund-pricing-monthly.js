import { FundPricingMonthlyTC } from '../models/fund-pricing-monthly';

const FundPricingMonthlyQuery = {
    fundPricingMonthlyById: FundPricingMonthlyTC.getResolver('findById'),
    fundPricingMonthlyByIds: FundPricingMonthlyTC.getResolver('findByIds'),
    fundPricingMonthlyOne: FundPricingMonthlyTC.getResolver('findOne'),
    fundPricingMonthlyMany: FundPricingMonthlyTC.getResolver('findMany'),
    fundPricingMonthlyCount: FundPricingMonthlyTC.getResolver('count'),
    fundPricingMonthlyConnection: FundPricingMonthlyTC.getResolver(
        'connection'
    ),
    fundPricingMonthlyPagination: FundPricingMonthlyTC.getResolver(
        'pagination'
    ),
};

const FundPricingMonthlyMutation = {
    fundPricingMonthlyCreateOne: FundPricingMonthlyTC.getResolver('createOne'),
    fundPricingMonthlyCreateMany: FundPricingMonthlyTC.getResolver(
        'createMany'
    ),
    fundPricingMonthlyUpdateById: FundPricingMonthlyTC.getResolver(
        'updateById'
    ),
    fundPricingMonthlyUpdateOne: FundPricingMonthlyTC.getResolver('updateOne'),
    fundPricingMonthlyUpdateMany: FundPricingMonthlyTC.getResolver(
        'updateMany'
    ),
    fundPricingMonthlyRemoveById: FundPricingMonthlyTC.getResolver(
        'removeById'
    ),
    fundPricingMonthlyRemoveOne: FundPricingMonthlyTC.getResolver('removeOne'),
    fundPricingMonthlyRemoveMany: FundPricingMonthlyTC.getResolver(
        'removeMany'
    ),
};

export { FundPricingMonthlyQuery, FundPricingMonthlyMutation };
