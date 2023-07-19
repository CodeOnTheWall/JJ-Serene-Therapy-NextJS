interface BackgroundProps {
  children: React.ReactNode;
}

export default function BG({ children }: BackgroundProps) {
  return (
    <div className=" h-full bg-gradient-to-r from-purple-500 via-purple-100 bg-purple-400 animate-gradient-xy">
      {children}
    </div>
  );
}
