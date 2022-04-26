import { css } from '@emotion/react';
import Layout from 'components/Layout';
import { GetStaticProps } from 'next';

type Plan = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  plan: string;
  summary: string;
  price: number;
  description: string[];
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
    padding: 0 15% 2rem;
    margin-bottom: 2rem;
    @media (max-width: 599px) {
      padding: 2rem;
    }
  `;

  const pricingCardContainerStyle = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 100%;
    @media (max-width: 599px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

  const pricingCardStyle = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    box-shadow: 0.25rem 0.25rem 0.5rem #333;
    border-radius: 1rem;
    background-color: #fff;
    position: relative;
    &:nth-child(2) {
      &:before {
        content: 'Recommend';
        position: absolute;
        top: 5%;
        right: 5%;
        transform: rotateZ(30deg);
        color: magenta;
      }
    }
  `;

  const headerStyle = css`
    margin-bottom: 2rem;
  `;

  const planNameStyle = css`
    margin-bottom: 1rem;
  `;

  const planSummaryStyle = css`
    color: #666;
    min-height: 8rem;
    margin-bottom: 1rem;
    font-size: 0.875rem;
    line-height: 1.5rem;
  `;

  const planDescriptionStyle = css`
    margin-top: 1rem;
  `;

  const planDescListStyle = css`
    list-style: none;
    margin-left: 1.5rem;
  `;

  const planDescListItemStyle = css`
    line-height: 2rem;
    position: relative;
    &:before {
      content: '';
      width: 0.75rem;
      height: 0.75rem;
      background-color: #333;
      border-radius: 50%;
      position: absolute;
      top: 0.55rem;
      left: -1.5rem;
    }
  `;

  return (
    <Layout
      pageTitle="Pricing Plan ｜ Tomoki Saijo"
      pageDescription="ホームページ制作・Webフロントエンド開発の料金プランです。"
      pagePath="https://portfolio.tomokiqi.com/pricing"
    >
      <section css={containerStyle}>
        <h1 css={headerStyle}>Pricing Plan</h1>
        <div css={pricingCardContainerStyle}>
          {plans.map((plan) => (
            <div css={pricingCardStyle} key={plan.plan}>
              <h2 css={planNameStyle}>{plan.plan}</h2>
              <p css={planSummaryStyle}>{plan.summary}</p>
              <h3>
                ¥{' '}
                {String(plan.price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
              </h3>
              <hr />
              <div css={planDescriptionStyle}>
                <ul css={planDescListStyle}>
                  {plan.description.map((item) => (
                    <li css={planDescListItemStyle} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<PricingProps> = async () => {
  const response = await fetch(process.env.ENDPOINT ?? '/', {
    headers: {
      'X-MICROCMS-API-KEY': process.env.API_KEY ?? '',
    },
  });
  const responseJson = await response.json();

  const before = '<li>';
  const after = '</li>';
  const regexp = new RegExp('(?<=' + before + ').*?(?=' + after + ')', 'g');

  const plans = responseJson.contents.map(
    (content: Omit<Plan, 'description'> & { description: string }) => ({
      ...content,
      description: content.description.match(regexp) ?? [],
    })
  );

  return {
    props: {
      plans,
    },
  };
};

export default Pricing;
