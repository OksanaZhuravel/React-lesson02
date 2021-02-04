import { ADD_PROFILE } from "../actions/profileActions";

const initialStores = {
    profiles: {
        1: {name: 'Oleg', lastname: 'ivanov', about: '**--**',},
    },
};

export default function profileReducer(store = initialStores, action) {
    switch (action.type) {
        case  ADD_PROFILE: {
            const profileId = Object.keys(store.profiles).length + 1;
            return Object.assign(store, {
                profiles: { $merge: {
                        [profileId]: {
                            name: action.name, lastname: action.lastname, about: []
                        } } },
            });
        }
        default:
            return store;
    }
}