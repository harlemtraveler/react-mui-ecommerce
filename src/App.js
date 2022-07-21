import { useEffect } from "react";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material";
// import { ThemeProvider } from "@mui/system";
import { Container, Button } from "@mui/material";
import Appbar from "./components/appbar";
import Banner from "./components/banner";

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
        <Appbar />
        <Banner />
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

      </Container>
    </ThemeProvider>
  );
}

export default App;
