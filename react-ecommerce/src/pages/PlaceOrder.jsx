import React from "react";
import Title from "../components/Title";
import { useShop } from "../context/GlobalContext";
import { assets } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const { currency, subtotal, shippingFee } = useShop();
  const total = subtotal + shippingFee;
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            name="firstName"
            required
            placeholder="First name"
            className="border border-gray-300 py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            name="lastName"
            required
            placeholder="Last name"
            className="border border-gray-300 py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="border border-gray-300 py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          name="address"
          required
          placeholder="Address"
          className="border border-gray-300 py-1.5 px-3.5 w-full"
        />
        <div className="flex gap-3">
          <input
            type="text"
            name="city"
            required
            placeholder="City"
            className="border border-gray-300 py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            name="state"
            required
            placeholder="State"
            className="border border-gray-300 py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            name="zipCode"
            required
            placeholder="ZipCode"
            className="border border-gray-300 py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            name="country"
            required
            placeholder="Country"
            className="border border-gray-300 py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="number"
          name="number"
          required
          placeholder="Phone"
          className="border border-gray-300 py-1.5 px-3.5 w-full"
        />
      </div>
      {/* Left side end */}
      {/* Right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <div className="w-full">
            <div className="text-2xl">
              <Title text1={"CART"} text2={"TOTALS"} />
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>
                  {currency}
                  {subtotal.toFixed(2)}
                </p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p>
                  {currency} {shippingFee.toFixed(2)}
                </p>
              </div>
              <hr />
              <div className="flex justify-between">
                <b>Total</b>
                <b>
                  {currency}
                  {total.toFixed(2)}
                </b>
              </div>
            </div>
            <div className="mt-12">
              <div className="text-2xl">
                <Title text1={"PAYMENT"} text2={"METHOD"} />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                <div onClick={()=>{toast.error('Stripe is disabled in demo, use COD')}} className="flex items-center p-2 x-3 gap-3 border cursor-pointer">
                  <p className="min-w-3.5 min-h-3.5 rounded-full border"></p>
                  <img src={assets.stripe_logo} alt="" />
                </div>
                <div onClick={()=>{toast.error('Razorpay is disabled in demo, use COD')}} className="flex items-center p-2 x-3 gap-3 border cursor-pointer">
                  <p className="min-w-3.5 min-h-3.5 rounded-full border"></p>
                  <img src={assets.razorpay_logo} alt="" />
                </div>
                <div className="flex items-center p-2 x-3 gap-3 border cursor-pointer">
                  <p className="min-w-3.5 min-h-3.5 rounded-full border bg-green-500"></p>
                  <p className="text-gray-500 text-sm font-medium mx-4">
                    CASH ON DELIVERY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-end mt-8"><button type="submit" className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button></div>
      </div>
      {/* Right side end */}
    </div>
  );
};

export default PlaceOrder;
