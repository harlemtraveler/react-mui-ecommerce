import { useEffect } from "react";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material";
// import { ThemeProvider } from "@mui/system";
import { Container, Button } from "@mui/material";

function App() {

  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: '#fff'
        }}
      >
        {
          /*
          Appbar
          Banner
          Promotions
          Title
          Products
          Footer
          Searchbox
          AppDrawer
          */
        }
        <Button variant="contained">Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
