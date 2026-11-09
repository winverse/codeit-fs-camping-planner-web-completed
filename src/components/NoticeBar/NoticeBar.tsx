"use client";

import { useNotice } from "@/contexts/NoticeContext";
import * as styles from "./NoticeBar.css";

function NoticeBar() {
  const { notice } = useNotice();

  return (
    <div className={styles.region} role="status">
      {notice && <p className={styles.notice}>{notice}</p>}
    </div>
  );
}

export default NoticeBar;
