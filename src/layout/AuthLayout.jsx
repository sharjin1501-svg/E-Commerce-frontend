import ThemeToggle from "../components/ThemeToggle";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <ThemeToggle />
      {children}
    </div>
  );
};

export default AuthLayout;