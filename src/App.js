import React from 'react';
import { ThemeProvider } from "@material-ui/core";
import theme from "./config/theme";
import Layout from './components/Layout';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout/>
    </ThemeProvider>
  );
}

export default App;
