import { Link } from "react-router-dom";
import ListProductSlider from "../ListProductSlider";

const ListProductCard = ({ listImage, title, price, id }) => {
  console.log(listImage);
  const imgs = listImage.split(', ')
  
  return (
    <div className="">
      <div className="group relative overflow-hidden">
        <ListProductSlider listImage={imgs} />
      </div>
      <div className="text-[#213875]">
        <Link
          className="relative py-4 before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-sky-200/60 before:scale-x-0 hover:before:scale-x-[100%] before:origin-right hover:before:origin-left before:transition-transform before:duration-[700ms] before:ease-[cubic-bezier(0.19,1,0.22,1)] before:delay-0 before:z-0"
          to={`/${id}`}
        >
          <p className="relative my-2 text-xl">{title}</p>
        </Link>
        <p className="text-md font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default ListProductCard;
