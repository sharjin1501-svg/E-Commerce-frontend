import ThemeToggle from "../ThemeToggle";

const Topbar = () => {
  return (
    <div className="bg-[var(--card)] p-4 flex justify-between items-center shadow">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <ThemeToggle />
    </div>
  );
};

export default Topbar;