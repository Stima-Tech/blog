import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '前沿研究',
    Svg: require('@site/static/img/undraw_science.svg').default,
    description: (
      <>
        Stima Research 致力於推動人工智能和機器學習領域的前沿研究，
        不斷探索創新技術和應用。
      </>
    ),
  },
  {
    title: '產業應用',
    Svg: require('@site/static/img/undraw_business_analytics.svg').default,
    description: (
      <>
        我們將最新的研究成果轉化為實際應用，為各行各業提供創新解決方案，
        推動技術與產業的融合。
      </>
    ),
  },
  {
    title: '知識分享',
    Svg: require('@site/static/img/undraw_sharing_knowledge.svg').default,
    description: (
      <>
        透過我們的開發和研究報告，我們持續分享最新的研究進展和技術洞察，
        促進學術界和產業界的交流。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
