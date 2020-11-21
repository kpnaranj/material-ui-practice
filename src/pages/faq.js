import { Fragment } from "react";
import fetch from "isomorphic-fetch";
function Faq({ questions }) {
  if (!questions) {
    return <div>Sorry we found questions </div>;
  }

  return (
    <Fragment>
      <h1>FAQ about us</h1>
      {questions.map((result, id) => {
        return (
          <div key={id}>
            <p>{result.question}</p>
            <p>{result.answer}</p>
            <p>{result.created_at}</p>
          </div>
        );
      })}
    </Fragment>
  );
}

Faq.getInitialProps = async () => {
  const results = await fetch("http://localhost:3000/api/faq");
  if (results.status === 200) return { questions: await results.json() };
  return { questions: undefined };
};

export default Faq;
