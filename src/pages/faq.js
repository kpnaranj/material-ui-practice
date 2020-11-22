import { Fragment } from "react";
import fetch from "isomorphic-fetch";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import Navbar from "../components/Navbar";

function Faq({ questions }) {
  return (
    <Fragment>
      <Navbar />
      <h1>FAQ</h1>
      {questions.map((result, id) => {
        return (
          <Accordion key={id}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{result.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{result.answer}</Typography>
            </AccordionDetails>
          </Accordion>
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
