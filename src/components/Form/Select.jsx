export const Select = ({ label, name, options, value, onChange }) => {
  return (
    <label className="flex flex-col gap-2 capitalize">
      <span>{label}</span>
      <select
        name={name}
        className="bg-neutral-800 border-neutral-400 rounded-md w-full"
        value={value}
        onChange={onChange}
      >
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </label>
  );
};
