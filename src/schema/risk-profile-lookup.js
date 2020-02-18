import { RiskProfileLookupTC } from '../models/risk-profile-lookup';

const RiskProfileLookupQuery = {
    riskProfileLookupById: RiskProfileLookupTC.getResolver('findById'),
    riskProfileLookupByIds: RiskProfileLookupTC.getResolver('findByIds'),
    riskProfileLookupOne: RiskProfileLookupTC.getResolver('findOne'),
    riskProfileLookupMany: RiskProfileLookupTC.getResolver('findMany'),
    riskProfileLookupCount: RiskProfileLookupTC.getResolver('count'),
    riskProfileLookupConnection: RiskProfileLookupTC.getResolver('connection'),
    riskProfileLookupPagination: RiskProfileLookupTC.getResolver('pagination'),
};

const RiskProfileLookupMutation = {
    riskProfileLookupCreateOne: RiskProfileLookupTC.getResolver('createOne'),
    riskProfileLookupCreateMany: RiskProfileLookupTC.getResolver('createMany'),
    riskProfileLookupUpdateById: RiskProfileLookupTC.getResolver('updateById'),
    riskProfileLookupUpdateOne: RiskProfileLookupTC.getResolver('updateOne'),
    riskProfileLookupUpdateMany: RiskProfileLookupTC.getResolver('updateMany'),
    riskProfileLookupRemoveById: RiskProfileLookupTC.getResolver('removeById'),
    riskProfileLookupRemoveOne: RiskProfileLookupTC.getResolver('removeOne'),
    riskProfileLookupRemoveMany: RiskProfileLookupTC.getResolver('removeMany'),
};

export { RiskProfileLookupQuery, RiskProfileLookupMutation };
