"use client";

import { useNotice } from "@/contexts/NoticeContext";
import * as styles from "./NoticeBar.css";

function NoticeBar() {
  const { notice } = useNotice();

  if (!notice) {
    return null;
  }

  return <p className={styles.notice}>{notice}</p>;
}

export default NoticeBar;
