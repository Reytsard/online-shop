import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Providers from "../feature/Providers";

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Providers>
  );
}
