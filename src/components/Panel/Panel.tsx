import type { ReactNode } from "react";
import * as styles from "./Panel.css";

interface PanelProps {
  title: string;
  children: ReactNode;
}

function Panel({ title, children }: PanelProps) {
  return (
    <section className={styles.panel}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
}

export default Panel;
