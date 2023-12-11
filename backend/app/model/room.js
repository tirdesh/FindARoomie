// Import the Mongoose library
const mongoose = require('mongoose');

// Define a Mongoose schema for room-related data
const roomSchema = new mongoose.Schema({
  // Posttype represents whether the entry is for "Looking for a Room" or "Posting for a Room"
  Posttype: {
    type: String,
    enum: ['Roomate', 'Room'],
    required: true, // It is a required field, and the value must be one of the specified enums.
  },
  // Section for details of a person looking for a room
  lookingForRoom: {
    name: {
      type: String,
      required: true, // Name is required.
    },
    locationAddress: {
      type: String,
      required: false, // Location address is optional.
    },
    proximity: {
      type: String,
      required: false, // Proximity information is optional.
    },
    description: {
      type: String,
      required: true, // Description is required.
    },
  },
  // Section for pricing and lease details of the room
  pricingAndLeaseDetails: {
    monthlyRent: {
      type: Number,
      required: false, // Monthly rent is optional.
    },
    utilitiesIncluded: {
      type: Boolean,
      required: false, // Information about utilities being included is optional.
    },
    startDate: {
      type: Date,
      required: true, // Start date is required.
    },
    leaseDuration: {
      type: String,
      required: true, // Lease duration is required.
    },
    securityDeposit: {
      type: Number,
      required: false, // Security deposit is optional.
    },
  },
  // Section for room and property details
  roomAndPropertyDetails: {
    houseType: {
      type: [String],
      required: false, // House type is optional.
    },
    numBeds: {
      type: String,
      required: false, // Number of beds is optional.
    },
    numBaths: {
      type: String,
      required: false, // Number of baths is optional.
    },
    furnished: {
      type: String,
      required: false, // Furnishing details are optional.
    },
    utilities: {
      type: [String],
      required: false, // Utilities details are optional.
    },
    amenities: {
      type: [String],
      required: false, // Amenities details are optional.
    },
  },
  // Section for user preferences
  preferences: {
    preferences: {
      type: [String],
      required: false, // User preferences are optional.
    },
  },
  // Section for contact information
  contactInfo: {
    contactAvailability: {
      days: {
        type: [String],
        required: false, // Contact availability days are optional.
      },
      time: {
        type: String,
        required: false, // Contact availability time is optional.
      },
    },
    email: {
      type: String,
      required: true, // Email is required.
    },
    phone: {
      type: String,
      required: true, // Phone number is required.
    },
  },
  // Photos of the room or the person (single image)
  photos: {
    type: [String],
    required: true, // Photos are required.
  },
  // Section for nearby attractions (optional)
  nearbyAttractions: {
    type: [String],
    required: false, // Nearby attractions are optional.
  },
});

// Create a Mongoose model named 'Room' based on the defined schema
const Room = mongoose.model('RoomPost', roomSchema);

// Export the Room model for use in other parts of the application
module.exports = Room;
