export const Button = ({
  title,
  onClick,
  style,
  loading,
  icon,
  type,
}: {
  title: string;
  onClick?: any;
  style?: string;
  loading?: boolean;
  icon?: string;
  type: string;
}) => {
  let classNames = "";
  switch (type) {
    case "Primary":
      classNames =
        "bg-dark_primary_btn rounded-[10px] px-[25px]  py-[8px] text-base";
      break;

    default:
      classNames = "bg-dark_primary_btn px-[25px] py-[10px] text-base";
      break;
  }
  return <button className={classNames}>{title}</button>;
};
