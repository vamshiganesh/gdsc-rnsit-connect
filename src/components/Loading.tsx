
const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="relative w-32 h-32 animate-loading">
        <img
          src="/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png"
          alt="GDSC RNSIT Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Loading;
