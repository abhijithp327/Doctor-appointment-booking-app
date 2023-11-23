import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../Controller/userController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';



const router = express.Router();


router.get('/:id', authenticate, restrict(['admin']), getSingleUser); 
router.get('/', getAllUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);





export { router as userRoute};     

// export default router