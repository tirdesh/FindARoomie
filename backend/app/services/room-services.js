import Room from '../model/room';

export const create = async (newRoom) => {
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
