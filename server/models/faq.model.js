import mongoose from "mongoose";

const FAQSchema = new mongoose.Schema({
  question: {
    type: {},
    required: true,
    index: true,
  },

  answer: {
    type: {},
    required: true,
    min: 200,
    max: 2000000,
  },
});

const FAQ = mongoose.model("FAQ", FAQSchema);
export default FAQ;
