export const Checkbox = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="flex items-center gap-2 capitalize">
      <input
        type="checkbox"
        name={name}
        value={value}
        className="bg-neutral-800 border-neutral-300 w-6 h-6 rounded-md"
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};
