import { SEND_MESSAGE } from '../actions/messageActions';
import {
    START_CHATS_LOADING,
    SUCCESS_CHATS_LOADING,
    ERROR_CHATS_LOADING,
} from '../actions/chatActions';
import update from 'react-addons-update';

const initialStore = {
        messages: {},
    isLoading: false,
};
export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                messages: { $merge: { [action.messageId]: {text: action.text, sender: action.sender} } },
            });
        }
        case START_CHATS_LOADING: {
            return update(store, {
                isLoading: { $set: true },
            });
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                messages: { $set: action.payload.entities.messages },
            });
        }
        case ERROR_CHATS_LOADING: {
            return update(store, {
                isLoading: { $set: false },
            });
        }
        default:
            return store;
    }
}