import type { ComponentProps } from "react";
import * as styles from "./Button.css";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
}

function Button({ variant, ...restProps }: ButtonProps) {
  return <button className={styles.button({ variant })} {...restProps} />;
}

export default Button;
