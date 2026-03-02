import { useMemo } from "react";

const Timetable = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const periods = ["P1", "P2", "P3", "P4", "P5", "P6", "P7"];

  const timetableData = {
    Monday: [
      "Data Structures",
      "Operating Systems",
      "Mathematics",
      "Break",
      "Database Management",
      "Library",
      "Project Lab"
    ],
    Tuesday: [
      "Mathematics",
      "Data Structures",
      "Break",
      "Operating Systems",
      "Sports",
      "Database Management",
      "Seminar"
    ],
    Wednesday: [
      "Database Management",
      "Mathematics",
      "Break",
      "Data Structures",
      "Project Lab",
      "Operating Systems",
      "Library"
    ],
    Thursday: [
      "Operating Systems",
      "Database Management",
      "Break",
      "Mathematics",
      "Seminar",
      "Data Structures",
      "Mentoring"
    ],
    Friday: [
      "Project Lab",
      "Data Structures",
      "Break",
      "Operating Systems",
      "Mentoring",
      "Mathematics",
      "Library"
    ],
    Saturday: [
      "Mathematics",
      "Seminar",
      "Break",
      "Project Discussion",
      "Sports",
      "Library",
      "Activity Hour"
    ]
  };

  const today = useMemo(() => {
    const index = new Date().getDay();
    return days[index - 1];
  }, []);

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          Weekly Timetable
        </h1>

        {today && (
          <span className="px-4 py-1 text-sm rounded-full bg-black text-white dark:bg-white dark:text-black">
            {today}
          </span>
        )}
      </div>

      {/* ===== Desktop View ===== */}
      <div className="hidden lg:block">
        <div className="bg-[var(--card)] p-6 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">

          {/* Period Header */}
          <div className="grid grid-cols-8 gap-4 mb-6 text-sm text-gray-400">
            <div></div>
            {periods.map((p) => (
              <div key={p} className="text-center">
                {p}
              </div>
            ))}
          </div>

          {/* Days */}
          <div className="space-y-3">
            {days.map((day) => (
              <div
                key={day}
                className={`grid grid-cols-8 gap-4 items-center p-4 rounded-2xl transition-all ${
                  today === day
                    ? "bg-gray-100 dark:bg-gray-800"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800/60"
                }`}
              >
                {/* Day */}
                <div className="font-medium text-gray-700 dark:text-gray-200">
                  {day}
                </div>

                {/* Subjects */}
                {timetableData[day].map((subject, index) => (
                  <div
                    key={index}
                    className={`text-xs px-3 py-2 rounded-xl text-center ${
                      subject === "Break"
                        ? "text-gray-400 italic"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {subject}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Mobile View ===== */}
      <div className="lg:hidden space-y-6">
        {days.map((day) => (
          <div
            key={day}
            className={`p-5 rounded-2xl bg-[var(--card)] border border-gray-200 dark:border-gray-700 ${
              today === day ? "ring-1 ring-gray-400" : ""
            }`}
          >
            <h2 className="font-semibold mb-4">
              {day}
            </h2>

            <div className="grid grid-cols-2 gap-3 text-xs">
              {periods.map((period, index) => (
                <div key={period} className="flex flex-col gap-1">
                  <span className="text-gray-400">
                    {period}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-lg text-center ${
                      timetableData[day][index] === "Break"
                        ? "italic text-gray-400"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {timetableData[day][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Timetable;