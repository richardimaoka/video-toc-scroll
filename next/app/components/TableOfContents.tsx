import Link from "next/link";
import styles from "./TableOfContents.module.css";

interface Props {}

export function TableOfContents(props: Props) {
  return (
    <div>
      <Link href="#1">
        <div>一、親譲りの無鉄砲</div>
      </Link>
      <Link href="#2">
        <div>二、ぶうと云つて汽船がとまる</div>
      </Link>
      <Link href="#3">
        <div>三、愈学校へ出た</div>
      </Link>
      <Link href="#4">
        <div>四、但し狸と赤シヤツは例外である</div>
      </Link>
      <Link href="#5">
        <div>五、君釣りに行きませんか</div>
      </Link>
      <Link href="#6">
        <div>六、野だは大嫌だ</div>
      </Link>
    </div>
  );
}
