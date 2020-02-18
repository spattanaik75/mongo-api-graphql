import { FundPricingTC } from '../models/fund-pricing';

const FundPricingQuery = {
    fundPricingById: FundPricingTC.getResolver('findById'),
    fundPricingByIds: FundPricingTC.getResolver('findByIds'),
    fundPricingOne: FundPricingTC.getResolver('findOne'),
    fundPricingMany: FundPricingTC.getResolver('findMany'),
    fundPricingCount: FundPricingTC.getResolver('count'),
    fundPricingConnection: FundPricingTC.getResolver('connection'),
    fundPricingPagination: FundPricingTC.getResolver('pagination'),
};

const FundPricingMutation = {
    fundPricingCreateOne: FundPricingTC.getResolver('createOne'),
    fundPricingCreateMany: FundPricingTC.getResolver('createMany'),
    fundPricingUpdateById: FundPricingTC.getResolver('updateById'),
    fundPricingUpdateOne: FundPricingTC.getResolver('updateOne'),
    fundPricingUpdateMany: FundPricingTC.getResolver('updateMany'),
    fundPricingRemoveById: FundPricingTC.getResolver('removeById'),
    fundPricingRemoveOne: FundPricingTC.getResolver('removeOne'),
    fundPricingRemoveMany: FundPricingTC.getResolver('removeMany'),
};

export { FundPricingQuery, FundPricingMutation };
