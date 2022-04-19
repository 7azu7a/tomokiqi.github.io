import { css } from '@emotion/react';
import { useInView } from 'hooks/useInView';
import Image from 'next/image';

type SkillProps = {
  index?: number;
};

export const Skill: React.VFC<SkillProps> = ({ index = 0 }) => {
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
    width: 70%;
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
            src="/skill.jpg"
            alt="skill"
            objectFit="contain"
            layout="fill"
            placeholder="blur"
            blurDataURL="/skill.jpg"
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
            <h2 css={titleStyle}>力になれること</h2>
          </div>
          <p>
            HP作成やWebアプリ開発など。本職を活かしノーコードツールからJavaScriptまで幅広く扱い、皆様が想いを込めたビジネスやアート等を世に出すお手伝いをします。
          </p>
        </div>
      </div>
      <div css={insertContainerStyle}>
        <div css={insertImageStyle}>
          <Image
            src="/choju_kusa.svg"
            alt="insert"
            objectFit="contain"
            layout="fill"
            placeholder="blur"
            blurDataURL="/choju_kusa.svg"
          />
        </div>
      </div>
    </section>
  );
};
