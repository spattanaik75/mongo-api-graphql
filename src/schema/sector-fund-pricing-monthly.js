import { SectorFundPricingMonthlyTC } from '../models/sector-fund-pricing-monthly';

const SectorFundPricingMonthlyQuery = {
    sectorFundPricingMonthlyById: SectorFundPricingMonthlyTC.getResolver(
        'findById'
    ),
    sectorFundPricingMonthlyByIds: SectorFundPricingMonthlyTC.getResolver(
        'findByIds'
    ),
    sectorFundPricingMonthlyOne: SectorFundPricingMonthlyTC.getResolver(
        'findOne'
    ),
    sectorFundPricingMonthlyMany: SectorFundPricingMonthlyTC.getResolver(
        'findMany'
    ),
    sectorFundPricingMonthlyCount: SectorFundPricingMonthlyTC.getResolver(
        'count'
    ),
    sectorFundPricingMonthlyConnection: SectorFundPricingMonthlyTC.getResolver(
        'connection'
    ),
    sectorFundPricingMonthlyPagination: SectorFundPricingMonthlyTC.getResolver(
        'pagination'
    ),
};

const SectorFundPricingMonthlyMutation = {
    sectorFundPricingMonthlyCreateOne: SectorFundPricingMonthlyTC.getResolver(
        'createOne'
    ),
    sectorFundPricingMonthlyCreateMany: SectorFundPricingMonthlyTC.getResolver(
        'createMany'
    ),
    sectorFundPricingMonthlyUpdateById: SectorFundPricingMonthlyTC.getResolver(
        'updateById'
    ),
    sectorFundPricingMonthlyUpdateOne: SectorFundPricingMonthlyTC.getResolver(
        'updateOne'
    ),
    sectorFundPricingMonthlyUpdateMany: SectorFundPricingMonthlyTC.getResolver(
        'updateMany'
    ),
    sectorFundPricingMonthlyRemoveById: SectorFundPricingMonthlyTC.getResolver(
        'removeById'
    ),
    sectorFundPricingMonthlyRemoveOne: SectorFundPricingMonthlyTC.getResolver(
        'removeOne'
    ),
    sectorFundPricingMonthlyRemoveMany: SectorFundPricingMonthlyTC.getResolver(
        'removeMany'
    ),
};

export { SectorFundPricingMonthlyQuery, SectorFundPricingMonthlyMutation };
