import Layout from "../components/Layout";

import axios from "axios";
import { Provider } from "react-redux";

import store from "../redux/store";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
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
