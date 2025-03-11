import Head from 'next/head';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function MetaTags({
  title = 'SwahiliPot Hub - Empowering Innovation in East Africa',
  description = 'SwahiliPot Hub is a collaborative space for technology, arts, and culture in Mombasa, Kenya.',
  image = '/images/og-image.jpg',
}: MetaTagsProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://swahilipothub.co.ke/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://swahilipothub.co.ke/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}