type TBtnProps = {
  text: string;
  background?: string; // Optional background prop
  border?: string; // Optional border prop
  color?: string; // Optional color prop
  margin?: string;
  width?: string;
};

const CustomBtn = ({
  text,
  background,
  border,
  color,
  margin,
  width,
}: TBtnProps) => {
  return (
    <div
      className={`px-4 h-9 flex justify-center  items-center py-2 rounded cursor-pointer ${
        background ? background : "bg-white"
      } ${border ? border : ""} ${width ? width : ""}  ${
        margin ? margin : ""
      } ${color ? color : "text-black"}`}
    >
      {text}
    </div>
  );
};

export default CustomBtn;
