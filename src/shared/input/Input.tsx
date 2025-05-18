import classNames from "classnames";

export const Input = (props: React.HTMLProps<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={classNames({
        "px-2 py-1 duration-150 placeholder-gray-400 border-b-1 border-b-purple-400 outline-none":
          true,
      })}
    />
  );
};
