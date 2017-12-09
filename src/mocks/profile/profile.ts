import { Profile } from '../../models/profile/profile.interface';

const userList: Profile[] = [
    { firstName: 'Ricardo', lastName: 'Bento', email: 'roicoroy@yahoo.com.br', avatar:'assets/img/avatar.jpg', dateOfBirth: new Date },
    { firstName: 'Renato', lastName: 'Bento', email: 'renato@yahoo.com.br', avatar:'assets/img/avatar.jpg', dateOfBirth: new Date },
    { firstName: 'Bento', lastName: 'Bento', email: 'beto@yahoo.com.br', avatar:'assets/img/avatar.jpg', dateOfBirth: new Date },
    { firstName: 'Jose', lastName: 'Bento', email: 'jose@yahoo.com.br', avatar:'assets/img/avatar.jpg', dateOfBirth: new Date }
];
export const USER_LIST = userList;
