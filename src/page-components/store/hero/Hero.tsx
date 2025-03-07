import Link from "next/link";


const Hero: React.FC = async () => {
  return (
    <>
      <div
        className="hero h-[calc(100vh-52px)]"
        style={{
          backgroundImage:
            "url(/Hero.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Black Snow</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            
            <Link href={"/products"} className="btn btn-primary">Products</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
