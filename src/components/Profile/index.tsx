import { css, keyframes } from '@emotion/react';
import { useInView } from 'hooks/useInView';
import Image from 'next/image';

type ProfileProps = {
  index?: number;
};

export const Profile: React.VFC<ProfileProps> = ({ index = 0 }) => {
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
    align-items: flex-end;
    height: 50vh;
    width: 100%;
  `;

  const insertLeftAnimation = keyframes`
    0%, 100% {
      transform: translateY(0rem);
    }
    50% {
      transform: translateY(1rem);
    }
  `;

  const insertLeftImageStyle = css`
    ${imageStyle}
    height: 30vh;
    width: 50%;
    animation-name: ${insertLeftAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  `;

  const insertRightImageStyle = css`
    ${imageStyle}
    height: 10vh;
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
            src="/profile.jpg"
            alt="profile"
            objectFit="contain"
            layout="fill"
            placeholder="blur"
            blurDataURL="/profile.jpg"
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
            <h2 css={titleStyle}>プロフィール</h2>
          </div>
          <p>
            西條友喜（さいじょうともき）。1992年、神奈川県横浜市出身。フロントエンドエンジニア。趣味はイタリアン料理など。幾度と作ったパスタは感覚で100gを計量可能。
          </p>
        </div>
      </div>
      <div css={insertContainerStyle}>
        <div css={insertLeftImageStyle}>
          <Image
            src="/choju_usagi.svg"
            alt="insert"
            objectFit="contain"
            layout="fill"
            placeholder="blur"
            blurDataURL="/choju_usagi.svg"
          />
        </div>
        <div css={insertRightImageStyle}>
          <Image
            src="/choju_kaeru.svg"
            alt="insert"
            objectFit="contain"
            layout="fill"
            placeholder="blur"
            blurDataURL="/choju_kaeru.svg"
          />
        </div>
      </div>
    </section>
  );
};
