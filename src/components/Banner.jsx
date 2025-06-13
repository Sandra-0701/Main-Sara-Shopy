import BannerImg from '/img/banner/banner8.jpeg';

const Banner = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="hidden lg:block relative w-full h-[420px]">
        <img
          src={BannerImg}
          alt="Banner"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Banner;
