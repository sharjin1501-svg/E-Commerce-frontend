const StatCard = ({ title, value, icon }) => {
  return (
    <div className="
      bg-[var(--card)]
      p-5
      rounded-2xl
      shadow-md
      hover:shadow-lg
      transition
      flex items-center justify-between
    ">
      <div>
        <p className="text-sm text-[var(--muted)]">
          {title}
        </p>
        <h3 className="text-2xl font-bold mt-1">
          {value}
        </h3>
      </div>

      <div className="
        w-12 h-12
        flex items-center justify-center
        rounded-full
        bg-gray-100 dark:bg-gray-700
      ">
        {icon}
      </div>
    </div>
  );
};

export default StatCard;