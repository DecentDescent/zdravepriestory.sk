import Head from "next/head";
const HeadComponent = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>Zdravé priestory</title>
    <meta
      name="description"
      content="Zaisťujeme dlhodobú dezinfekčnú ochranu proti baktériám a vírusom. Vrátane koronavírusov. Používame dezinfekčnú ochranu GCA Antivir, ktorá si poradí s väčšinou baktérií a vírusov – vrátane koronavírusov a vaše okolie ochránime až na 120 dní."
    />
    <meta property="og:title" content="Zdravé priestory" />
    <meta
      property="og:description"
      content="Zaisťujeme dlhodobú dezinfekčnú ochranu proti baktériám a vírusom. Vrátane koronavírusov. Používame dezinfekčnú ochranu GCA Antivir, ktorá si poradí s väčšinou baktérií a vírusov – vrátane koronavírusov a vaše okolie ochránime až na 120 dní."
    />
    <meta property="og:image" content="/static/graphics/og.jpg" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta property="og:type" content="website" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/static/favicon/safari-pinned-tab.svg"
      color="#e33a5b"
    />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff"></meta>
  </Head>
);

export default HeadComponent;
