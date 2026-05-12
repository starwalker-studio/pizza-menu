import style from "./Button.module.scss";

interface ButtonProps {
  label: string;
  variant?: "primary" | "outline" | "whatsApp" | "disabled" | "secondary";
  onClick?: () => void;
}

export const Button = ({
  label,
  variant = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${style.btn} ${style[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
