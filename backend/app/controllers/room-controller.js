import * as roomServices from '../services/room-services.js';
import { setErrorResponse, setResponse } from './response-handler.js';

export const createRoom = async (req, res) => {
    try {
        const roomData = { ...req.body };
        const room = await roomServices.create(roomData);
        setResponse(room, res, "Created room successfully");
    } catch (err) {
        setErrorResponse(err, res);
    }
};

export const getAllRooms = async (req, res) => {
    try {
        const rooms = await roomServices.getAll();
        setResponse(rooms, res, "Retrieved all rooms successfully");
    } catch (err) {
        setErrorResponse(err, res);
    }
};

export const getRoomById = async (req, res) => {
    try {
        const id = req.params.roomId;
        const room = await roomServices.getById(id);
        setResponse(room, res, "Retrieved room successfully");
    } catch (err) {
        setErrorResponse(err, res);
    }
};

export const updateRoom = async (req, res) => {
    try {
        const id = req.params.roomId;
        const updatedRoom = { ...req.body };
        const room = await roomServices.update(id, updatedRoom);
        setResponse(room, res, "Updated room successfully");
    } catch (err) {
        setErrorResponse(err, res);
    }
};

export const deleteRoom = async (req, res) => {
    try {
        const id = req.params.roomId;
        const deletedRoom = await roomServices.remove(id);
        setResponse(deletedRoom, res, "Deleted room successfully");
    } catch (err) {
        setErrorResponse(err, res);
    }
};
