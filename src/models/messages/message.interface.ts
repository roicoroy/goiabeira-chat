import { User } from '../user/user.interface';

export interface Message {
    User: User;
    date: Date;
    lastMessage:string;
}