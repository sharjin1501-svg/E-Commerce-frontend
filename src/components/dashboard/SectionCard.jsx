const SectionCard = ({ title, children }) => {
  return (
    <div className="bg-[var(--card)] p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default SectionCard;