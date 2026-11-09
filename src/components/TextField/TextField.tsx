import type { ComponentProps } from "react";
import * as styles from "./TextField.css";

interface TextFieldProps extends ComponentProps<"input"> {
  label: string;
  error?: string | undefined;
}

function TextField({ label, error, ...restProps }: TextFieldProps) {
  return (
    <label className={styles.field}>
      {label}
      <input
        className={error ? styles.inputError : styles.input}
        {...restProps}
      />
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
}

export default TextField;
