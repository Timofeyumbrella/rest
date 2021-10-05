import axios from "axios";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "../redux/store";

import Layout from "../components/Layout";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = "http://localhost:5000";

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
