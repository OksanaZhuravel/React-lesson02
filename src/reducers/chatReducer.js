import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from "../actions/chatActions";

const initialStore = {
    chats: {
        1: {title: 'Чат 1', messageList: [1]},
        2: {title: 'Чат 2', messageList: [2]},
        3: {title: 'Чат 3', messageList: []},
    },
};

export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return Object.assign(store, {
                chats: { $merge: { [action.chatId]: {
                            title: store.chats[action.chatId].payload, action,
                            messageList: [...store.chats[action.chatId].messageList, action.messageId]
                        } } },
            });
        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return Object.assign(store, {
                chats: { $merge: {
                        [chatId]: {
                            payload: action.title, messageList: []
                        } } },
            });
        }
        default:
            return store;
    }
}
