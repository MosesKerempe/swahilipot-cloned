import Head from 'next/head';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
}

/**
 * A component to manage the meta tags in the HTML document.
 * This includes the title, description, image, and other metadata that can be used by search engines and social media platforms.
 * The component takes in a MetaTagsProps object which can be used to customize the metadata.
 * @param {string} [title=SwahiliPot Hub - Empowering Innovation in Coastal Region] The title of the page.
 * @param {string} [description=SwahiliPot Hub is a collaborative space for technology, arts, and culture in Mombasa, Kenya.] The description of the page.
 * @param {string} [image=/images/logo.png] The URL of the image to be used as the thumbnail when sharing the page on social media platforms.
 * @returns {JSX.Element} The HTML element that contains the meta tags.
 */
export default function MetaTags({
  title = 'SwahiliPot Hub - Empowering Innovation in Coastal Regions',
  description = 'SwahiliPot Hub is a collaborative space for technology, arts, and culture in Mombasa, Kenya.',
  image = '/images/logo.png',
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