import { FundComprehensiveTC } from '../models/fund-comprehensive';

const FundComprehensiveQuery = {
    fundComprehensiveById: FundComprehensiveTC.getResolver('findById'),
    fundComprehensiveByIds: FundComprehensiveTC.getResolver('findByIds'),
    fundComprehensiveOne: FundComprehensiveTC.getResolver('findOne'),
    fundComprehensiveMany: FundComprehensiveTC.getResolver('findMany'),
    fundComprehensiveCount: FundComprehensiveTC.getResolver('count'),
    fundComprehensiveConnection: FundComprehensiveTC.getResolver('connection'),
    fundComprehensivePagination: FundComprehensiveTC.getResolver('pagination'),
};

const FundComprehensiveMutation = {
    fundComprehensiveCreateOne: FundComprehensiveTC.getResolver('createOne'),
    fundComprehensiveCreateMany: FundComprehensiveTC.getResolver('createMany'),
    fundComprehensiveUpdateById: FundComprehensiveTC.getResolver('updateById'),
    fundComprehensiveUpdateOne: FundComprehensiveTC.getResolver('updateOne'),
    fundComprehensiveUpdateMany: FundComprehensiveTC.getResolver('updateMany'),
    fundComprehensiveRemoveById: FundComprehensiveTC.getResolver('removeById'),
    fundComprehensiveRemoveOne: FundComprehensiveTC.getResolver('removeOne'),
    fundComprehensiveRemoveMany: FundComprehensiveTC.getResolver('removeMany'),
};

export { FundComprehensiveQuery, FundComprehensiveMutation };
