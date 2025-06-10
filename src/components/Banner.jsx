import BannerImg from '/img/banner/banner8.jpeg';

const Banner = () => {
  return (
    <div className="container mx-auto p-4">
    <div className="relative w-full h-[200px] md:h-[220px] lg:h-[420px] hidden sm:hidden md:hidden lg:block">
      {/* Background Image */}
      <img
        src={BannerImg}
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
      />
    </div>
    </div>
  );
};

export default Banner;
