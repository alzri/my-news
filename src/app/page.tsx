import { ArticleCard } from '../components/article-card/ArticleCard';
import { LatesNews } from '../components/lates-news/LatesNews';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>To get started, edit the page.tsx file.</h1>
        </div>
        <div>
          <h1>test</h1>
          <ArticleCard
            title={'A Pocket Pc Is Porta'}
            href={'#'}
            category={'Sport'}
            author={'Test autora'}
            isPaid={true}
          />

          <LatesNews
            articles={[
              {
                title: 'Maintain Your Pc S Performance With Pc Programs',
                time: '14:30',
                href: '/news/test5',
              },
              {
                title: '6 Powerful Tips To Creating Testimonials That Sell Your Products',
                time: '14:30',
                href: '/news/test4',
              },
              {
                title: '5 Reasons To Choose A Notebook Over A Computer Desktop',
                time: '14:30',
                href: '/news/tes3',
              },
              {
                title: 'Cdc Issues Health Alert Notice For Travelers To Usa From Hon',
                time: '14:30',
                href: '/news/test2',
              },
              {
                title: 'Use Your Reset Button',
                time: '14:30',
                href: '/news/test1',
              },
              {
                title: 'Use Your Reset Button',
                time: '14:30',
                href: '/news/test1',
              },
            ]}
          ></LatesNews>
        </div>
      </main>
    </div>
  );
}
