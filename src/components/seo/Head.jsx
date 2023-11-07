import React from "react";
import useSeoData from "../../hooks/useSeoData";

export default function Head() {
  const { title, author, lang, description, keywords, siteUrl } = useSeoData();

  return (
    <>
      {/* General Tags */}
      <html lang={lang} />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" content="text/html" />
      <meta name="google-site-verification" content="q8yR-dQtcpS226CtIxSP3iAwC1cT1UTpI1DcqkFvibQ" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(",")} />
      <meta
        name="image"
        content="https://media.licdn.com/dms/image/C4D03AQGO3MR_R0e7Tg/profile-displayphoto-shrink_800_800/0/1633511356625?e=1704931200&v=beta&t=Jz-7-TqitVqx39waSjLsehBRDuZ-7vqOABOEPEHmQ7k"
      />
      <meta name="author" content={author} />

      {/* OpenGraph aka Facebook Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={description} />
      <meta
        name="og:image"
        content="https://media.licdn.com/dms/image/C4D03AQGO3MR_R0e7Tg/profile-displayphoto-shrink_800_800/0/1633511356625?e=1704931200&v=beta&t=Jz-7-TqitVqx39waSjLsehBRDuZ-7vqOABOEPEHmQ7k"
      />

      {/* Twitter Tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://media.licdn.com/dms/image/C4D03AQGO3MR_R0e7Tg/profile-displayphoto-shrink_800_800/0/1633511356625?e=1704931200&v=beta&t=Jz-7-TqitVqx39waSjLsehBRDuZ-7vqOABOEPEHmQ7k"
      />
      <meta name="twitter:card" content={description} />

      <link rel="canonical" href={siteUrl} />

      <script type="application/ld+json">
        {`
          {
              "@context": "http://schema.org/",
              "@type": "Person",
              "name": "Kevin Adam",
              "image": "https://media.licdn.com/dms/image/C4D03AQGO3MR_R0e7Tg/profile-displayphoto-shrink_800_800/0/1633511356625?e=1704931200&v=beta&t=Jz-7-TqitVqx39waSjLsehBRDuZ-7vqOABOEPEHmQ7k",
              "url": "https://www.kevelopment.dev",
              "jobTitle": "Freelance Software Developmer",
              "worksFor": {
                "@type": "Organization",
                "name": "Kevelopment · Software Development and Consulting"
              },
              "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Müggenweg 15",
                  "addressLocality": "Oldenburg",
                  "addressRegion": "Lower Saxony",
                  "postalCode": "26133",
                  "addressCountry": "Germany"
              }
          }
        `}
      </script>
    </>
  );
}
