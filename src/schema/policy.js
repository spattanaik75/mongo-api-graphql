import { PolicyTC } from '../models/policy';

const PolicyQuery = {
    policyById: PolicyTC.getResolver('findById'),
    policyByIds: PolicyTC.getResolver('findByIds'),
    policyOne: PolicyTC.getResolver('findOne'),
    policyMany: PolicyTC.getResolver('findMany'),
    policyCount: PolicyTC.getResolver('count'),
    policyConnection: PolicyTC.getResolver('connection'),
    policyPagination: PolicyTC.getResolver('pagination'),
};

const PolicyMutation = {
    policyCreateOne: PolicyTC.getResolver('createOne'),
    policyCreateMany: PolicyTC.getResolver('createMany'),
    policyUpdateById: PolicyTC.getResolver('updateById'),
    policyUpdateOne: PolicyTC.getResolver('updateOne'),
    policyUpdateMany: PolicyTC.getResolver('updateMany'),
    policyRemoveById: PolicyTC.getResolver('removeById'),
    policyRemoveOne: PolicyTC.getResolver('removeOne'),
    policyRemoveMany: PolicyTC.getResolver('removeMany'),
};

export { PolicyQuery, PolicyMutation };
