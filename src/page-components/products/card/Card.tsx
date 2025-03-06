import { ProductInfo } from "@/helper/products/types";
import Link from "next/link";





const Card = async (props:ProductInfo) => {
  const {description,image,title ,id} = props
  return (
    <div className="card bg-base-100 w-60 shadow-xl">
      <figure>
        <img
        className="aspect-square w-full"
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2">{title}</h2>
        <p className="line-clamp-2">{description}</p>
        <div className="card-actions justify-end">
          <Link href={`/products/${id}`}  className="btn btn-primary">More Info</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
