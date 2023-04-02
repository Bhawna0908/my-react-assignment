export const Select = ({ label, name, options, selected, onChange }) => {
  return (
    <label className="flex flex-col gap-2 capitalize">
      <span>{label}</span>
      <select
        name={name}
        className="bg-neutral-800 border-neutral-400 rounded-md w-full"
        onChange={onChange}
      >
        {options &&
          options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              selected={selected === option.value}
            >
              {option.label}
            </option>
          ))}
      </select>
    </label>
  );
};
