import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from './Header';
import Footer from './Footer';
import ScrollTo from '../../utils/ScrollTo';

const Main = (props) => {
  return (
    <HelmetProvider>
      <ScrollTo />
      <Helmet 
          titleTemplate="%s | Webs Youtube" 
          defaultTitle="Webs Youtube" 
          defer={false}
      >
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
    <Header />
    <main id="main" role="main">
      {props.children}
    </main>
    <Footer />
    </HelmetProvider>
  );
};

export default Main;