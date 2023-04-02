export const Radio = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="flex items-center gap-2 capitalize">
      <input
        type="radio"
        name={name}
        value={value}
        className="bg-neutral-800 border-neutral-300 w-6 h-6"
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};
