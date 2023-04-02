export const Layout = ({ styleClass, children }) => {
  return (
    <div
      className={`bg-black text-white p-4 min-h-screen w-full ${styleClass}`}
    >
      {children}
    </div>
  );
};
