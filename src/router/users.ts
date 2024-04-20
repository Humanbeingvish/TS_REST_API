import express from 'express';

import { deleteUser, getAllusers, updateUser } from '../controllers/users';
import { isAuthenticated ,isOwner} from '../middlewares/index';

export default(router:express.Router)=>{
    router.get('/users',isAuthenticated,getAllusers);
    router.delete('/users/:id',isAuthenticated,isOwner ,deleteUser);
    router.patch('/users/:id',isAuthenticated,isOwner,updateUser)
};