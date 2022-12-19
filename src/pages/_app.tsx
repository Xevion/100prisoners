import {type AppType} from "next/app";

import {trpc} from "@/utils/trpc";

import "@/styles/globals.scss";
import {GoogleAnalytics} from "nextjs-google-analytics";

const App: AppType = ({Component, pageProps}) => {
    return <>
        <GoogleAnalytics trackPageViews/>
        <Component {...pageProps} />
    </>
};

export default trpc.withTRPC(App);
