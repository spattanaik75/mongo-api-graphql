import { SectorFundPricingTC } from '../models/sector-fund-pricing';

const SectorFundPricingQuery = {
    sectorFundPricingById: SectorFundPricingTC.getResolver('findById'),
    sectorFundPricingByIds: SectorFundPricingTC.getResolver('findByIds'),
    sectorFundPricingOne: SectorFundPricingTC.getResolver('findOne'),
    sectorFundPricingMany: SectorFundPricingTC.getResolver('findMany'),
    sectorFundPricingCount: SectorFundPricingTC.getResolver('count'),
    sectorFundPricingConnection: SectorFundPricingTC.getResolver('connection'),
    sectorFundPricingPagination: SectorFundPricingTC.getResolver('pagination'),
};

const SectorFundPricingMutation = {
    sectorFundPricingCreateOne: SectorFundPricingTC.getResolver('createOne'),
    sectorFundPricingCreateMany: SectorFundPricingTC.getResolver('createMany'),
    sectorFundPricingUpdateById: SectorFundPricingTC.getResolver('updateById'),
    sectorFundPricingUpdateOne: SectorFundPricingTC.getResolver('updateOne'),
    sectorFundPricingUpdateMany: SectorFundPricingTC.getResolver('updateMany'),
    sectorFundPricingRemoveById: SectorFundPricingTC.getResolver('removeById'),
    sectorFundPricingRemoveOne: SectorFundPricingTC.getResolver('removeOne'),
    sectorFundPricingRemoveMany: SectorFundPricingTC.getResolver('removeMany'),
};

export { SectorFundPricingQuery, SectorFundPricingMutation };
