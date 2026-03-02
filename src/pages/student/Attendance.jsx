const Attendance = () => {
  const subjects = [
    { name: "Data Structures", total: 40, attended: 36 },
    { name: "DBMS", total: 38, attended: 28 },
    { name: "Operating Systems", total: 42, attended: 30 },
    { name: "Computer Networks", total: 35, attended: 20 },
  ];

  const calculatePercentage = (attended, total) =>
    ((attended / total) * 100).toFixed(1);

  const getStatus = (percentage) => {
    if (percentage >= 75) return "Safe";
    if (percentage >= 65) return "Warning";
    return "Shortage";
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "Safe":
        return {
          badge:
            "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
          bar: "bg-gradient-to-r from-emerald-400 to-emerald-600",
        };
      case "Warning":
        return {
          badge:
            "bg-amber-500/10 text-amber-400 border border-amber-500/20",
          bar: "bg-gradient-to-r from-amber-400 to-amber-600",
        };
      default:
        return {
          badge:
            "bg-rose-500/10 text-rose-400 border border-rose-500/20",
          bar: "bg-gradient-to-r from-rose-400 to-rose-600",
        };
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-100 to-gray-200 
                    dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 
                    transition-colors duration-300">
      
      {/* Page Title */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">
          Subject-wise Attendance
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Track your attendance status for each subject
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjects.map((subject, index) => {
          const percentage = calculatePercentage(
            subject.attended,
            subject.total
          );
          const status = getStatus(percentage);
          const styles = getStatusStyles(status);

          return (
            <div
              key={index}
              className="relative bg-white/70 dark:bg-gray-900/70 
                         backdrop-blur-xl 
                         border border-gray-200 dark:border-gray-800 
                         rounded-2xl p-6 
                         shadow-md hover:shadow-xl 
                         transition-all duration-300 
                         hover:-translate-y-1"
            >
              {/* Subject Name */}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {subject.name}
              </h3>

              {/* Class Info */}
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <p>Total Classes: {subject.total}</p>
                <p>Attended: {subject.attended}</p>
              </div>

              {/* Percentage + Status */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  {percentage}%
                </span>

                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${styles.badge}`}
                >
                  {status}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-5 w-full h-2.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${styles.bar} transition-all duration-700`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Attendance;