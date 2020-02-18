import { FundTC } from '../models/fund';

const FundQuery = {
    fundById: FundTC.getResolver('findById'),
    fundByIds: FundTC.getResolver('findByIds'),
    fundOne: FundTC.getResolver('findOne'),
    fundMany: FundTC.getResolver('findMany'),
    fundCount: FundTC.getResolver('count'),
    fundConnection: FundTC.getResolver('connection'),
    fundPagination: FundTC.getResolver('pagination'),
};

const FundMutation = {
    fundCreateOne: FundTC.getResolver('createOne'),
    fundCreateMany: FundTC.getResolver('createMany'),
    fundUpdateById: FundTC.getResolver('updateById'),
    fundUpdateOne: FundTC.getResolver('updateOne'),
    fundUpdateMany: FundTC.getResolver('updateMany'),
    fundRemoveById: FundTC.getResolver('removeById'),
    fundRemoveOne: FundTC.getResolver('removeOne'),
    fundRemoveMany: FundTC.getResolver('removeMany'),
};

export { FundQuery, FundMutation };
