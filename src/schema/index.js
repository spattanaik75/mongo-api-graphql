import { SchemaComposer } from 'graphql-compose';

import db from '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import {
    FundComprehensiveQuery,
    FundComprehensiveMutation,
} from './fund-comprehensive';
import {
    FundPricingMonthlyQuery,
    FundPricingMonthlyMutation,
} from './fund-pricing-monthly';
import { FundQuery, FundMutation } from './fund';
import { PartyQuery, PartyMutation } from './party';
import { PolicyQuery, PolicyMutation } from './policy';
import {
    RiskProfileLookupQuery,
    RiskProfileLookupMutation,
} from './risk-profile-lookup';
import {
    SectorFundPricingMonthlyQuery,
    SectorFundPricingMonthlyMutation,
} from './sector-fund-pricing-monthly';
import {
    SectorFundPricingQuery,
    SectorFundPricingMutation,
} from './sector-fund-pricing';
import { SubscriptionQuery, SubscriptionMutation } from './subscription';

schemaComposer.Query.addFields({
    ...FundComprehensiveQuery,
    ...FundPricingMonthlyQuery,
    ...FundQuery,
    ...PartyQuery,
    ...PolicyQuery,
    ...RiskProfileLookupQuery,
    ...SectorFundPricingMonthlyQuery,
    ...SectorFundPricingQuery,
    ...SubscriptionQuery,
});

schemaComposer.Mutation.addFields({
    ...FundComprehensiveMutation,
    ...FundPricingMonthlyMutation,
    ...FundMutation,
    ...PartyMutation,
    ...PolicyMutation,
    ...RiskProfileLookupMutation,
    ...SectorFundPricingMonthlyMutation,
    ...SectorFundPricingMutation,
    ...SubscriptionMutation,
});

export default schemaComposer.buildSchema();
