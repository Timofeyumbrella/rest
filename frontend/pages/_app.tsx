import axios from "axios";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "redux/store";

import Layout from "components/Layout";

import "styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = "http://localhost:5000";

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
