export const Layout = ({ styleClass, children }) => {
  return (
    <div
      className={`bg-neutral-800 text-neutral-200 p-4 min-h-screen w-full ${styleClass}`}
    >
      {children}
    </div>
  );
};
