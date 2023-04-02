export const Input = ({
  type = 'text',
  label,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <label className="flex flex-col gap-2">
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="border border-neutral-500 bg-neutral-800 h-12 rounded-lg p-2"
      />
    </label>
  );
};
