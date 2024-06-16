import { ReactNode } from "react";
import styles from "./H2.module.css";

interface Props {
  id: string;
  children: ReactNode;
}

export function H2(props: Props) {
  return (
    <h2 id={props.id} className={styles.component}>
      {props.children}
    </h2>
  );
}
