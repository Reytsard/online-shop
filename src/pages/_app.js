import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Provider } from "react-redux";
import { store, wrapper } from "../feature/store";

function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default wrapper.withRedux(App);
