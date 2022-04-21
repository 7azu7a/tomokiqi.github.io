import { css, keyframes } from '@emotion/react';
import { useInView } from 'hooks/useInView';
import Image from 'next/image';

type WorkProps = {
  index?: number;
};

export const Work: React.VFC<WorkProps> = ({ index = 0 }) => {
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
    width: 100%;
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

  const insertAnimation = keyframes`
    0%, 100% {
      transform: rotateZ(-5deg);
    }
    50%{
      transform: rotateZ(5deg);
    }
`;

  const insertImageStyle = css`
    ${imageStyle}
    height: 33vh;
    width: 100%;
    animation-name: ${insertAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
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
            src="/work.jpg"
            alt="work"
            objectFit="contain"
            layout="fill"
            placeholder="blur"
            blurDataURL="/work.jpg"
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
            <h2 css={titleStyle}>作ってきたもの</h2>
          </div>
          <p>
            最近は知人の紹介で写真展のHPを作成しました。LINEで会話しながらUIデザインからサイト制作、文言作成、画像編集まで対応し、とても喜んでいただけました。
          </p>
        </div>
      </div>
      <div css={insertContainerStyle}>
        <div css={insertImageStyle}>
          <Image
            src="/choju_working.svg"
            alt="insert"
            objectFit="contain"
            layout="fill"
            placeholder="blur"
            blurDataURL="/choju_working.svg"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};
