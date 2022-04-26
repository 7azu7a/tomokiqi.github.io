import { css } from '@emotion/react';
import { GetStaticProps } from 'next';

type Plan = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  plan: string;
  price: number;
  description: string;
};

type PricingProps = {
  plans: Plan[];
};

const Pricing: React.VFC<PricingProps> = ({ plans }) => {
  const containerStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  `;

  const pricingCardContainerStyle = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 100%;
  `;

  const pricingCardStyle = css`
    display: grid;
    justify-content: center;
    width: 100%;
    padding: 2rem;
    box-shadow: 0.25rem 0.25rem 0.5rem #333;
    border-radius: 1rem;
  `;

  return (
    <section css={containerStyle}>
      <h1
        css={css`
          font-family: 'FuturaPT';
          font-weight: 100;
        `}
      >
        Pricing Plan
      </h1>
      <h1
        css={css`
          font-family: 'FuturaPTLight';
        `}
      >
        Pricing Plan
      </h1>
      <div css={pricingCardContainerStyle}>
        {plans.map((plan) => (
          <div css={pricingCardStyle}>
            <h2>{plan.plan}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps<PricingProps> = async () => {
  const response = await fetch(process.env.ENDPOINT ?? '/', {
    headers: {
      'X-MICROCMS-API-KEY': process.env.API_KEY ?? '',
    },
  });

  const responseJson = await response.json();
  return {
    props: {
      plans: responseJson.contents,
    },
  };
};

export default Pricing;
