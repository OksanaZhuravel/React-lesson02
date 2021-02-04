export const ADD_PROFILE = '@@profile/ADD_PROFILE';
export const addProfile =(name) => ({
    type: ADD_PROFILE,
    name,
});