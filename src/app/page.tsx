import { ArticleCard } from '../components/article-card/ArticleCard';
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
        </div>
      </main>
    </div>
  );
}
