import { useEffect } from "react";
import { Box, Typography, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
// import { ThemeProvider } from "@mui/system";
import { Container, Button } from "@mui/material";
import { UIProvider } from "./context/ui";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import SearchBox from "./components/search"

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
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <SearchBox />
          <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
            <Typography variant="h4">Our Products</Typography>
          </Box>
          <Products />
          <Footer />
          <AppDrawer />
        </UIProvider>
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
