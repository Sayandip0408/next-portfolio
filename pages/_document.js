import { Html, Head, Main, NextScript } from 'next/document';

export const metadata = {
  title: "SayanDip Adhikary",
  description: 'Welcome to the official portfolio of Sayandip Adhikary, a skilled Software Engineer and Frontend Developer with expertise in the MERN stack. Explore my projects, experience, and skills in web development, UI/UX design, and more. Whether you are looking for innovative solutions or engaging user interfaces, I specialize in creating dynamic and responsive websites and web applications. View my work and get in touch for collaboration opportunities.',
  siteUrl: "https://sayandip-adhikary.vercel.app/",
  imageUrl: "https://sayandip-adhikary.vercel.app/Me2.jpeg"
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.siteUrl} />
        <meta name="keywords" content="sayandip, sayandip adhikary, sandy, adhikary, portfolio, sayandip portfolio, sayandip's portfolio, sayandip adhikary portfolio, sayandip adhikary's portfolio, software engineer sayandip adhikary, software developer sayandip adhikary, software engineer sayandip, software developer sayandip, frontend engineer sayandip adhikary, frontend developer sayandip adhikary" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:image" content={metadata.imageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.imageUrl} />

        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SayanDip Adhikary",
            "url": metadata.siteUrl,
            "description": metadata.description,
            "image": metadata.imageUrl,
            "mainEntityOfPage": metadata.siteUrl,
            "publisher": {
              "@type": "Organization",
              "name": "SayanDip Adhikary",
              "logo": metadata.imageUrl
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "adhikarysayandip@gmail.com",
              "contactType": "Job or project offers",
              "areaServed": "IN", // India
              "availableLanguage": "English"
            }
          }, null, 2)}
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}