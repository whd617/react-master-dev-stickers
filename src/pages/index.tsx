import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { StaticImage } from 'gatsby-plugin-image';

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevStickers 👋">
      <StaticImage
        height={200}
        src="https://images.unsplash.com/photo-1667769950532-86759efb6320?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODU3fHxzdGlja2VyfGVufDB8fDB8fHww"
        alt="Stickers on the wall"
      />
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;
