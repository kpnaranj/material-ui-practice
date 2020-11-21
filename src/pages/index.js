import { Fragment } from "react";
import { Button } from "@material-ui/core";
import Link from "next/link";
function Home() {
  return (
    <Fragment>
      <Link href="/container">
        <Button color="secondary" variant="outlined">
          Go to container
        </Button>
      </Link>
      <Link href="/grid">
        <Button color="primary" variant="outlined">
          Go to the grid
        </Button>
      </Link>
    </Fragment>
  );
}
export default Home;
