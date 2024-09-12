import { assets } from "../assets/forever-assets/assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1="Contact" text2="Us" />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px] "
          src={assets.contact_img}
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 ">
          <p className="font-semibold txt-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54709 Wube Bereha <br /> Suite 350, Addis Ababa , Ethiopia{" "}
          </p>
          <p className="text-gray-500">
            Tel:(251) 926 742 275 <br /> Email: admin@Furniture.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careeres at Furniture
          </p>
          <p className="text-gray-600">
            {" "}
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white  transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetterBox/>
    </div>
  );
};

export default Contact;
