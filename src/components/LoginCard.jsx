import { useNavigate } from "react-router-dom";

const LoginCard = ({ title }) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();  // prevent page refresh

        // 👉 here you will later add authentication logic

        navigate("/student/profile"); // redirect after login
    };

    return (
        <div className="w-full max-w-md bg-[var(--card)] p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">
                {title}
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>

                <div>
                    <label className="block mb-2 text-sm">
                        User ID
                    </label>
                    <input
                        type="text"
                        placeholder="Enter User ID"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card)] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card)] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Login
                </button>

            </form>
        </div>
    );
};

export default LoginCard;