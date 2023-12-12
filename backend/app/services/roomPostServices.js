import Room from '../model/roomPost.js';

export const create = async (newRoom) => {
    console.log("checking db for ", newRoom.postId);
    const postExists = await Room.findOne({ postId: newRoom.postId }).exec() ;
    if(postExists){
        throw new Error("PostId Already Exists");
    }
    const room = new Room(newRoom);
    return await room.save();
};

export const getAll = async () => {
    const rooms = await Room.find().exec();
    return rooms;
};

export const getById = async (id) => {
    const room = await Room.findById(id).exec();
    return room;
};

export const update = async (id, updatedRoom) => {
    const room = await Room.findByIdAndUpdate(id, updatedRoom, { new: true }).exec();
    return room;
};

export const remove = async (id) => {
    const room = await Room.findByIdAndDelete(id).exec();
    return room;
};
