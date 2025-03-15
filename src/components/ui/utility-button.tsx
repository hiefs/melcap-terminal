interface UtilityButtonProps {
  text: string;
}

export const UtilityButton = (props: UtilityButtonProps) => {
  const { text } = props;
  return <button className="button border pl-4 pr-4">{text}</button>;
};
