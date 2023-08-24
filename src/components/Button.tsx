interface ButtonProps {
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: boolean;
}

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : `bg-coral-red rounded-full text-white border-coral-red`
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}{" "}
      {iconURL && (
        <img
          className="ml-2 rounded-full w-5 h-5"
          src={iconURL}
          alt="arrow right icon"
        />
      )}
    </button>
  );
};

export default Button;
