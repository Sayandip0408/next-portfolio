import { Html, Head, Main, NextScript } from 'next/document';

export const metadata = {
  title: "SayanDip Adhikary",
  description: "Welcome to the official portfolio of Sayandip Adhikary, a skilled Software Engineer and Frontend Developer with expertise in the MERN stack. Explore my projects, experience, and skills in web development, UI/UX design, and more. Whether you are looking for innovative solutions or engaging user interfaces, I specialize in creating dynamic and responsive websites and web applications. View my work and get in touch for collaboration opportunities.",
  siteUrl: "https://sayandip-adhikary.vercel.app/",
  imageUrl: "https://opengraph.b-cdn.net/production/images/2fd46aa6-4eed-465a-8a94-b907c3d348f1.jpg?token=8ZYhQ58S0YF7c5bBe7oU8UbJgsuM2jafy_dYJ84xtRI&height=801&width=1200&expires=33270147613"
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.siteUrl} />
        <meta name="keywords" content="sayandip, sayandip adhikary, sandy, adhikary, portfolio, sayandip portfolio, sayandip adhikary portfolio, sayandip adhikary portfolio, software engineer sayandip adhikary, software developer sayandip adhikary, software engineer sayandip, software developer sayandip, frontend engineer sayandip adhikary, frontend developer sayandip adhikary" />

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

        {/* <script type="application/ld+json">
          {JSON.stringify(
            {
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
                "areaServed": "IN",
                "availableLanguage": "English"
              }
            }, null, 2)}
        </script> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: "SayanDip Adhikary",
                url: metadata.siteUrl,
                description: metadata.description,
                image: metadata.imageUrl,
                mainEntityOfPage: metadata.siteUrl,
                publisher: {
                  "@type": "Organization",
                  name: "SayanDip Adhikary",
                  logo: metadata.imageUrl,
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "adhikarysayandip@gmail.com",
                  contactType: "Job or project offers",
                  areaServed: "IN",
                  availableLanguage: "English",
                },
              },
              null,
              2
            ),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}