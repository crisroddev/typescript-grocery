import { Router } from 'express';

export const router = Router();

router
    .route('/')
    .get()
    .post()

router
    .route('/:id')
    .get()
    .put()
    .delete()
