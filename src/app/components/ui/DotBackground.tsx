const DotBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.3] relative">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
};

export default DotBackground;
