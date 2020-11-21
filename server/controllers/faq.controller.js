const questions = [
  {
    question: "How to be safe buying online?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
    created_at: "2019-11-01",
  },
  {
    question: "Do I have any assurance on my new car?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
    created_at: "2020-11-01",
  },
  {
    question: "How many kilometers a normal car can have?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
    created_at: "2018-11-01",
  },
  {
    question: "How to know the car history?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
    created_at: "2018-11-01",
  },
  {
    question: "How much do I pay a month to use the service?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
    created_at: "2018-11-01",
  },
];

const faq = (req, res) => {
  res.json(questions);
};

export default { faq };
