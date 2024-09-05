import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShop } from "../context/GlobalContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProduct from "../components/RelatedProduct";
import Loading from "../components/Loading";
import { toast } from "react-toastify";

function Product() {
  const { products, currency, addToCart } = useShop();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState(null);
  const [productImg, setProductImg] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    setLoading(true);
    const product = products.find((item) => item._id === id);

    if (product) {
      setProductData(product);
      if (product.image && product.image.length > 0) {
        setProductImg(product.image[0]);
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [id, products]);

  if (loading) return <Loading />;

  if (!productData) {
    return <div className="text-center p-10">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (size) {
      // Prepare the item with size information
      const itemToAdd = {
        ...productData,
        size
      };
   
      addToCart(itemToAdd);
    } else {
     toast.error('select product size')
    }
  };

  return (
    <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product details */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Image gallery and main image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] mb-3 w-full">
            {productData.image && productData.image.length > 0 ? (
              productData.image.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  alt={`Product ${index}`}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  onClick={() => setProductImg(img)}
                />
              ))
            ) : (
              <div className="text-center">No images available</div>
            )}
          </div>
          <div className="w-full sm:w-[80%]">
            {productImg ? (
              <img
                src={productImg}
                alt="Selected product"
                className="w-full h-auto"
              />
            ) : (
              <div className="text-center">No image selected</div>
            )}
          </div>
        </div>
        {/* Product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, i) => (
              <img src={assets.star_icon} alt="" key={i} className="w-3" />
            ))}
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 font-medium text-3xl">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, i) => (
                <button
                  onClick={() => setSize(item)}
                  key={i}
                  className={`px-4 py-2 bg-gray-100 border ${
                    item === size ? "border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className={`bg-black text-white px-8 py-3 text-sm
            }`}
          //disabled={!size} 
          >
            Add to cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description and review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      {/* Display Related Product */}
      <RelatedProduct
        product={productData}
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
}

export default Product;
