import * as Mutations from './constants'

export const mutations = {
    [Mutations.SET_SCATTER]:(state, scatter) => state.scatter = scatter,
    [Mutations.SET_MNEMONIC]:(state, mnemonic) => state.mnemonic = mnemonic,
    [Mutations.PUSH_ALERT]:(state, error) => state.alerts.push(error),
    [Mutations.PULL_ALERT]:(state, error) => state.alerts.shift(),
    [Mutations.PUSH_ALERT_RESULT]:(state, alertResult) => state.alertResult = alertResult,
    [Mutations.CLEAR_ALERT_RESULT]:(state) => state.alertResult = null,
};