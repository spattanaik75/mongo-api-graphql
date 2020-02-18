import { SubscriptionTC } from '../models/subscription';

const SubscriptionQuery = {
    subscriptionById: SubscriptionTC.getResolver('findById'),
    subscriptionByIds: SubscriptionTC.getResolver('findByIds'),
    subscriptionOne: SubscriptionTC.getResolver('findOne'),
    subscriptionMany: SubscriptionTC.getResolver('findMany'),
    subscriptionCount: SubscriptionTC.getResolver('count'),
    subscriptionConnection: SubscriptionTC.getResolver('connection'),
    subscriptionPagination: SubscriptionTC.getResolver('pagination'),
};

const SubscriptionMutation = {
    subscriptionCreateOne: SubscriptionTC.getResolver('createOne'),
    subscriptionCreateMany: SubscriptionTC.getResolver('createMany'),
    subscriptionUpdateById: SubscriptionTC.getResolver('updateById'),
    subscriptionUpdateOne: SubscriptionTC.getResolver('updateOne'),
    subscriptionUpdateMany: SubscriptionTC.getResolver('updateMany'),
    subscriptionRemoveById: SubscriptionTC.getResolver('removeById'),
    subscriptionRemoveOne: SubscriptionTC.getResolver('removeOne'),
    subscriptionRemoveMany: SubscriptionTC.getResolver('removeMany'),
};

export { SubscriptionQuery, SubscriptionMutation };
