import { useNavigate } from "react-router-dom";

const LoginCard = ({ title }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/student/profile");
  };

  return (
    <div
      className="
      w-full max-w-md
      bg-white
      text-gray-800
      p-8
      rounded-2xl
      shadow-lg
      border border-gray-200

      dark:bg-gray-900
      dark:text-gray-200
      dark:border-gray-700
      "
    >
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
            className="
            w-full
            px-4 py-2
            rounded-lg
            border border-gray-300
            bg-white
            text-gray-800
            placeholder-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            transition

            dark:bg-gray-800
            dark:text-gray-200
            dark:border-gray-600
            dark:placeholder-gray-500
            "
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            className="
            w-full
            px-4 py-2
            rounded-lg
            border border-gray-300
            bg-white
            text-gray-800
            placeholder-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            transition

            dark:bg-gray-800
            dark:text-gray-200
            dark:border-gray-600
            dark:placeholder-gray-500
            "
          />
        </div>

        <button
          type="submit"
          className="
          w-full
          bg-blue-600
          text-white
          py-2
          rounded-lg
          hover:bg-blue-700
          transition
          "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginCard;