// next
import type { AppProps } from "next/app";
// widgets
import { Header } from "@/widgets/header";
// styles
import "@/app/styles/reset.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header /> <Component {...pageProps} />
    </>
  );
}
