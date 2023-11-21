import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const roomFilterSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dateOfCreation: {
        type: String,
        required: true
    },
    filterParams: [
        {
            location: {type: String, required: true},
            price_range: {type: String},
            amenities: {type: [String]},
            lease_duration: {type: String},
            room_size:{type: String},
            pet_policy:{type: String},
            available_from:{type: String}
        }
    ]
});

const roomFilterModel = mongoose.model('roomFilter', roomFilterSchema);

export default roomFilterModel;