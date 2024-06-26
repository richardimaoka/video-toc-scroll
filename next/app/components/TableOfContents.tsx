"use client";

import Link from "next/link";
import styles from "./TableOfContents.module.css";
import { useEffect, useState } from "react";

interface Props {}

interface Part {
  position: number;
  targetId: string;
  name: string;
  inViewPort: boolean;
}

// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
function isCustomEvent(e: Event): e is CustomEvent<Part> {
  const detail = (e as CustomEvent).detail;

  if (typeof detail !== "object") {
    return false;
  }

  if (typeof detail.targetId !== "string") {
    return false;
  }

  if (typeof detail.inViewPort !== "boolean") {
    return false;
  }

  return true;
}

export function TableOfContents(props: Props) {
  const [parts, setParts] = useState<Part[]>([
    // initially, everything inViewPort = false
    {
      position: 1,
      targetId: "1",
      name: "一、親譲りの無鉄砲",
      inViewPort: false,
    },
    {
      position: 2,
      targetId: "2",
      name: "二、ぶうと云つて汽船がとまる",
      inViewPort: false,
    },
    {
      position: 3,
      targetId: "3",
      name: "三、 愈学校へ出た",
      inViewPort: false,
    },
    {
      position: 4,
      targetId: "4",
      name: "四、但し狸と赤シヤツは例外である",
      inViewPort: false,
    },
    {
      position: 5,
      targetId: "5",
      name: "五、君釣りに行きませんか",
      inViewPort: false,
    },
    {
      position: 6,
      targetId: "6",
      name: "六、野だは大嫌だ",
      inViewPort: false,
    },
  ]);

  useEffect(() => {
    function onIntersection(e: Event) {
      if (isCustomEvent(e)) {
        // Ignore when inViewPort = false, i.e. <h2> drops off the viewport,
        // to keep the current highlight in table-of-contents
        if (!e.detail.inViewPort) {
          // Caveat: Ignoring inViewPort = false has a drawback that scrolling *UP* is not handled correctly.
          // e.g. highlighting id = 4, then scroll up, and ypu see the highlight stays at id = 4,
          //      but it should be id = 3 to be highlighted
          return;
        }
        // From here, porocess CustomEvent only when inViewPort = true

        const updatedParts = [...parts];

        for (const p of updatedParts) {
          if (p.targetId === e.detail.targetId) {
            p.inViewPort = true;
          } else {
            p.inViewPort = false;
          }
        }

        // Find target from state
        setParts(updatedParts);

        console.log(updatedParts);
      }
    }

    document.addEventListener("onIntersection", onIntersection);
    return () => document.removeEventListener("onIntersection", onIntersection);
  }, [parts]);

  return (
    <div className={styles.component}>
      {parts.map((s) => (
        <Link key={s.targetId} href={"#" + s.targetId}>
          <div
            className={
              s.inViewPort
                ? styles.item + " " + styles.highlighted
                : styles.item
            }
          >
            {s.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
