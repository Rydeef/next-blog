import classNames from "classnames";

interface Option {
  label: string;
  value: string;
}

interface Props extends React.HTMLProps<HTMLSelectElement> {
  options: Array<Option>;
}

export const Select = ({ options, className, ...props }: Props) => {
  return (
    <select
      {...props}
      className={`${className} ${classNames({
        "px-2 py-1 duration-150 text-gray-400 border-b-1 border-b-purple-400 outline-none":
          true,
      })}`}
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
