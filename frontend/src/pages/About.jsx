import { assets } from "../assets/forever-assets/assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="About" text2="Us" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem consequatur tenetur illo id facilis reiciendis
            nostrum accusamus cum omnis quibusdam excepturi maiores corporis
            officiis, debitis provident, autem, totam quidem? Vel?
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            asperiores quo velit aperiam corporis dolorum ea libero minus
            debitis, cum reiciendis doloribus adipisci error deleniti vitae
            quasi nihil. Vitae, nemo.{" "}
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our missionis Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sed, commodi. Quod ratione quae nemo inventore debitis
            aspernatur saepe hic dicta dolores? Deserunt architecto fuga quia
            quas ipsam hic nesciunt similique!{" "}
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1="Why" text2="Choose Us" />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each produt to ensure it meets out
            stringent
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle free ordering and
            checkout process,
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Custormer Service:</b>
          <p className="text-gray-600">
            We meticulously select and vet each produt to ensure it meets out
            stringent{" "}
          </p>
        </div>
      </div>

      <NewsLetterBox/>


    </div>
  );
};

export default About;
