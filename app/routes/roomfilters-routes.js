import express from 'express';
import * as roomfilterControllers from '../controllers/roomFilter-controller.js';

const router = express.Router();

router.route('/')
    .get(roomfilterControllers.displayRoomFilters)
    .post(roomfilterControllers.postRoomFilter);

router.route('/:id')
    .get(roomfilterControllers.getRoomFilter)
    .put(roomfilterControllers.updateRoomFilter)
    .delete(roomfilterControllers.deleteRoomFilter);


export default router;