interface BackgroundProps {
  children: React.ReactNode;
}

export default function BG({ children }: BackgroundProps) {
  return (
    <div className=" min-h-screen bg-gradient-to-r from-purple-400 via-purple-100 bg-purple-300 animate-gradient-xy">
      {children}
    </div>
  );
}
