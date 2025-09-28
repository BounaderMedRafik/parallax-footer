import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}

const SectionOne = () => {
  return (
    <div className=" min-h-[80vh] flex items-center justify-center bg-slate-50 text-slate-950 text-6xl font-semibold font-mono">
      Hello there young fella :3
    </div>
  );
};

const SectionTwo = () => {
  return (
    <div className=" min-h-[80vh] relative z-30 flex items-center justify-center bg-blue-100 text-blue-950 text-6xl font-semibold font-mono">
      Scroll more please...
    </div>
  );
};
