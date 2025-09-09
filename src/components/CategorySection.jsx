import categories from "../data/categories";

const CategorySection = () => {
  return (
    <div className="container mx-auto p-4">
    <div className="overflow-x-auto whitespace-nowrap px-4 scrollbar-hide">
      <div className="flex space-x-4">
        {categories.map((category) => (
          <div key={category.id} className="min-w-[80px] text-center">
            <img
              src={category.image}
              alt={category.name}
              width={80}
              height={80}
              className="mx-auto object-cover w-[90px] h-[90px]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CategorySection;