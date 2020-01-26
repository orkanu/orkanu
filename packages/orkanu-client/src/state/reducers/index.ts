import { generalReducer, GeneralState, GSA_LOADING } from './generalReducer'

export interface AppState {
    general: GeneralState
}
const mainReducer = ({ general }: AppState, action: any) => {
    // middlewares
    return {
        general: generalReducer(general, action),
    }
}

export { GSA_LOADING, mainReducer }
