import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import Navbar from '@/components/nav/nav';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import markerSDK from '@marker.io/browser';
import Footer from '@/components/footer/footer';
import Modal from "react-modal";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // useEffect(() => {
  //   async function initializeMarker() {
  //     const widget = await markerSDK.loadWidget({
  //       project: process.env.NEXT_PUBLIC_API_KEY,
  //     });
  //   }

  //   initializeMarker();
  // }, []);

  useEffect(() => {
    // Setup react-modal for accessibility
    Modal.setAppElement('#__next');
  }, []);
  
  return (
    <div className="appWrapper">
      <Head>
        <title>Phoenique Life</title>
        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5HMTBMF351"></script>
        <script type="text/javascript" src="https://www.bugherd.com/sidebarv2.js?apikey=6chxm6sb4lrhrex4yq6ocg" async="true"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5HMTBMF351');
            `,
          }}
        />
      </Head>
      <Navbar />
      <div className="contentWrapper">
        <TransitionGroup>
          <CSSTransition key={router.route} classNames="page" timeout={800}>
            <div>
              <Component {...pageProps} />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Footer />
    </div>
  );
}
