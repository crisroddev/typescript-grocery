import { Router } from 'express';
import {
    createNewGrocerie,
    showAllGroceries,
    deleteGrocerie,
    showOneGrocerie,
    updateGrocerie
} from './groceries.handlers'

export const router = Router();

router
    .route('/')
    .get(showAllGroceries)
    .post(createNewGrocerie)

router
    .route('/:id')
    .get(showOneGrocerie)
    .put(updateGrocerie)
    .delete(deleteGrocerie)
