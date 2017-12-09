import { Message } from '../../models/messages/message.interface';
import { USER_LIST } from '../profile/profile';

const userList = USER_LIST;
const messageList: Message[] = [];

userList.forEach((user) => {
    messageList.push({ User: user, date: new Date(), lastMessage:"hello" })
})

export const MESSAGE_LIST = messageList;