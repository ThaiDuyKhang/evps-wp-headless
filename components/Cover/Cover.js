import Image from "next/image";

export const Cover = ({ children, background }) => {
  return (
    <div className="h-screen bg-slate-500 relative min-h-screen flex justify-center items-center">
      <Image src={background} fill alt="Cover"/>
      {children}
    </div>
  );
};
