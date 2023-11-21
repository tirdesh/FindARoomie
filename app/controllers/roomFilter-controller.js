import * as roomfilterServices from '../services/roomFilterServices.js';
import { setErrorResponse, setResponse } from './response-handler.js';

export const displayRoomFilters = async (request, response) =>{
    try{
        const params = {...request.query};
        const roomfilters = await roomfilterServices.list(params);
        setResponse(roomfilters, response);
    }catch(err){
        setErrorResponse(err, response);
    }
}

export const postRoomFilter = async (request, response) =>{
    try{
        const roomfilterData = {...request.body};
        const roomfilter = await roomfilterServices.save(roomfilterData);
        setResponse(roomfilter, response);
    }catch(err){
        setErrorResponse(err, response);
    }
}

export const getRoomFilter = async (request, response) =>{
    try{    
        const id = request.params.id;
        const roomfilter = await roomfilterServices.findById(id);
        setResponse(roomfilter, response);
    }catch(err){
        setErrorResponse(err, response);
    }
}

export const updateRoomFilter = async (request, response) =>{
    try{
        const id = request.params.id;
        const editedRoomFilter = {...request.body};
        const roomfilter = await roomfilterServices.edit(id, editedRoomFilter);
        setResponse(editedRoomFilter, response);
    }catch(err){
        setErrorResponse(err, response);
    }
}

export const deleteRoomFilter = async (request, response) =>{
    try{
        const id = request.params.id;
        const roomfilter = await roomfilterServices.remove(id);
        setResponse(roomfilter, response);

    }catch(err){
        setErrorResponse(err, response);
    }
}