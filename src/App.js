import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import Info from './pages/Info';
import Products from './pages/Products';
import Product from './pages/Product';
import Form from './pages/Form';
import Header from './components/Header';
import Footer from './components/Footer';
import AppLayout from './components/AppLayout';
import Content from './components/Content';
import ContentWrapper from './components/ContentWrapper';

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Normalize />
        <GlobalStyles />
        <AppLayout flexDirection="column">
          <Header />
          <Content as="main" width={1}>
            <ContentWrapper px={{ b: 3, md: 4 }} my={4}>
              <Route path="/" exact component={Info} />
              <Route path="/products/" component={Products} />
              <Route path="/product/" component={Product} />
              <Route path="/form/" component={Form} />
            </ContentWrapper>
          </Content>
          <Footer />
        </AppLayout>
      </React.Fragment>
    </ThemeProvider>
  </Router>
);

export default App;
