import Image from "next/image";

const HeroSections = () => {
  return (
    <>
      <div>
        <div className="relative w-full h-[calc(100vh-64px)]">
          <Image src="/Hero.jpg" alt="Hero" fill className="object-fit" />
        </div>
      </div>
    </>
  );
};

export default HeroSections;
