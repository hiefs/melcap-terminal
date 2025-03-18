interface UtilityButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const UtilityButton = (props: UtilityButtonProps) => {
  const { text, onClick, disabled } = props;

  const handleClick = () => {
    onClick?.();
  };
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="button border pl-4 pr-4 hover:bg-gray-200 hover:text-black"
    >
      {text}
    </button>
  );
};
