import { Article } from "./components/Article";
import { TableOfContents } from "./components/TableOfContents";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.component}>
      <div className={styles.columns}>
        <div className={styles.articleColumn}>
          <Article />
        </div>

        <div className={styles.tocColumn}>
          <TableOfContents />
        </div>
      </div>
    </main>
  );
}
