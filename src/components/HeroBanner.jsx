import Link from 'next/link';
import { urlFor } from '../lib/client';

export default function HeroBanner({ heroData }) {
  return (
    <div className='hero-banner-container'>
      <div className=''>
        <p className='beats-solo'>{heroData.smallText}</p>
        <h3>{heroData.midText}</h3>
        <h1>{heroData.largeText1}</h1>
        <img
          src={urlFor(heroData.image)}
          alt='headphones'
          className='hero-banner-image'
        />
        <div>
          <Link href={`/product/${heroData.product}`}>
            <button type='button'>{heroData.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>description</h5>
            <p>{heroData.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
