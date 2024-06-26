"use client";

import { ReactNode, useEffect, useRef } from "react";
import styles from "./H2.module.css";

interface Props {
  id: string;
  children: ReactNode;
}

export function H2(props: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          const event = new CustomEvent("onIntersection", {
            detail: { targetId: e.target.id, inViewPort: e.isIntersecting },
          });
          document.dispatchEvent(event);
        });
      });

      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <h2 id={props.id} ref={ref} className={styles.component}>
      {props.children}
    </h2>
  );
}
