import { combineReducers } from 'redux';
import OanTuTiReducer from './OanTuTiReducer';

export const rootReducer = combineReducers({
    StateOanTuTi : OanTuTiReducer
});

