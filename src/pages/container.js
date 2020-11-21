import { Container, Box } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

function container() {
  return (
    <Container maxWidth="md">
      <Box bgcolor={blue[400]} width="100%" height="100vh">
        This is a Container
      </Box>
    </Container>
  );
}

export default container;
