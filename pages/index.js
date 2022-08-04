import { FooterBanner, HeroBanner, Product } from '../src/components';
import { client } from '../src/lib/client';

export default function Home({ products, bannerData }) {
  return (
    <div>
      <HeroBanner heroData={bannerData.length && bannerData[0]} />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const products = await client.fetch('*[_type == "product"]');
  const bannerData = await client.fetch('*[_type == "banner"]');

  return {
    props: { products, bannerData },
  };
};
