
const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-4xl font-google-sans font-bold animate-loading">
        <span className="text-gdsc-blue">&lt;</span>
        <span className="text-gdsc-red">/</span>
        <span className="text-gdsc-yellow">&gt;</span>
      </div>
    </div>
  );
};

export default Loading;
