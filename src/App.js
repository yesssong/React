//import logo from "./logo.svg";
import "./App.css";
//import Header from "./pages/Header";
//import Nav from "./pages/Nav";
//import Content from "./pages/Content";
import { Container, Grid } from "@mui/material";
import Sidebar from "./pages/Sidebar";
import Content2 from "./pages/Content2";

function App() {
  return (
    // 예제 1)
    // <Container fixed>
    //   <Header />
    //   <Grid container>
    //     <Grid xs={3}>
    //       <Nav />
    //     </Grid>
    //     <Grid xs={9}>
    //       <Content />
    //     </Grid>
    //   </Grid>
    // </Container>

    // 예제2)
    <div className="App">
      <Container maxWidth={false}>
        <Grid container>
          <Grid item={true} xs={3}>
            <Sidebar />
          </Grid>
          <Grid item={true} xs={9}>
            <Content2 />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default App;
