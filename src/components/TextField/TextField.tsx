import type { ComponentProps } from "react";
import * as styles from "./TextField.css";

interface TextFieldProps extends ComponentProps<"input"> {
  label: string;
}

function TextField({ label, ...restProps }: TextFieldProps) {
  return (
    <label className={styles.field}>
      {label}
      <input className={styles.input} {...restProps} />
    </label>
  );
}

export default TextField;
