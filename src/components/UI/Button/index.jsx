import styles from "./Button.module.css";

export const PrimaryButton = ({
  children,
  className = "",
  onClick = () => {},
}) => {
  return (
    <button
      className={`${styles.primaryButton} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
