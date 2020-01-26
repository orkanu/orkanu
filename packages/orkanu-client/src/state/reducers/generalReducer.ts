// ACTIONS
export const GSA_LOADING = 'GSA_LOADING'

//
export interface GeneralState {}
export const generalReducer = (generalState: GeneralState, action: any) => {
    switch (action.type) {
        case GSA_LOADING:
            return {
                ...generalState,
                loading: action.loading,
            }

        default:
            return generalState
    }
}
