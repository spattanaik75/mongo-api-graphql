import { PartyTC } from '../models/party';

const PartyQuery = {
    partyById: PartyTC.getResolver('findById'),
    partyByIds: PartyTC.getResolver('findByIds'),
    partyOne: PartyTC.getResolver('findOne'),
    partyMany: PartyTC.getResolver('findMany'),
    partyCount: PartyTC.getResolver('count'),
    partyConnection: PartyTC.getResolver('connection'),
    partyPagination: PartyTC.getResolver('pagination'),
};

const PartyMutation = {
    partyCreateOne: PartyTC.getResolver('createOne'),
    partyCreateMany: PartyTC.getResolver('createMany'),
    partyUpdateById: PartyTC.getResolver('updateById'),
    partyUpdateOne: PartyTC.getResolver('updateOne'),
    partyUpdateMany: PartyTC.getResolver('updateMany'),
    partyRemoveById: PartyTC.getResolver('removeById'),
    partyRemoveOne: PartyTC.getResolver('removeOne'),
    partyRemoveMany: PartyTC.getResolver('removeMany'),
};

export { PartyQuery, PartyMutation };
