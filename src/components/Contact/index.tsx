import { css } from '@emotion/react';
import { useInView } from 'hooks/useInView';
import Image from 'next/image';

type ContactProps = {
  index?: number;
};

export const Contact: React.VFC<ContactProps> = ({ index = 0 }) => {
  const [inView] = useInView(index);

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `;

  const contentsStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 50%;
    height: 50%;
    @media (max-width: 960px) {
      width: 90%;
      flex-direction: column;
    }
    opacity: ${inView ? 1 : 0};
    transition: opacity 1s ease;
  `;

  const imageStyle = css`
    display: flex;
    position: relative;
  `;

  const coverImageStyle = css`
    ${imageStyle}
    height: 16rem;
    width: 16rem;
  `;

  const pointImageStyle = css`
    ${imageStyle}
    height: 1.414rem;
    width: 1.414rem;
    margin-right: 0.414rem;
  `;

  const insertContainerStyle = css`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 50vh;
    width: 100%;
  `;

  const insertImageStyle = css`
    ${imageStyle}
    height: 50vh;
    width: 50%;
  `;

  const textStyle = css`
    width: 100%;
  `;

  const titleContainerStyle = css`
    display: flex;
    margin: 0 0 0.414rem;
  `;

  const titleStyle = css`
    margin: 0;
  `;

  return (
    <section css={containerStyle}>
      <div css={contentsStyle}>
        <div css={coverImageStyle}>
          <Image
            src="/contact.jpg"
            alt="contact"
            objectFit="contain"
            layout="fill"
            placeholder="blur"
            blurDataURL="/contact.jpg"
            priority={true}
          />
        </div>
        <div css={textStyle}>
          <span>#{`000${index}`.slice(-3)}</span>
          <div>
            <hr />
          </div>
          <div css={titleContainerStyle}>
            <div css={pointImageStyle}>
              <Image
                src="/ume.svg"
                alt="ume"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2 css={titleStyle}>お問い合わせ</h2>
          </div>
          <p>
            サイト制作のご相談などはInstagram、カジュアル面談のお誘いなどはWantedlyにてご連絡ください。なお、現在サイト制作はご紹介でのみ承っております。
          </p>
        </div>
      </div>
      <div css={insertContainerStyle}>
        <div css={insertImageStyle}>
          <Image
            src="/choju_yama.svg"
            alt="insert"
            objectFit="contain"
            layout="fill"
            placeholder="blur"
            blurDataURL="/choju_yama.svg"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};
