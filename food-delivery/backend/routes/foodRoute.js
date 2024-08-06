import express from 'express';
import multer from 'multer';
import { addFood, listFood, removeFood} from '../controllers/foodController.js';


const foodRouter = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`); 
    }
});


const upload = multer({ storage: storage });

// Define routes
foodRouter.post('/add', upload.single('image'), addFood);
foodRouter.get('/list',listFood)
foodRouter.post('/remove',removeFood)


export default foodRouter;
