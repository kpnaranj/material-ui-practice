import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      trim: true,
      required: true,
      max: 100,
      unique: false,
      index: true,
    },
    make: {
      type: String,
      unique: false,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    year: {
      type: number,
      trim: true,
      required: true,
      max: 4,
    },
    fuelType: {
      type: String,
      trim: true,
      max: 100,
      required: true,
      unique: false,
      lowercase: true,
    },
    details: {
      type: {},
      required: true,
      min: 200,
      max: 2000000,
    },
    kilometers: {
      type: Number,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamp: true }
);

const Car = mongoose.model("Car", CarSchema);
export default Car;
