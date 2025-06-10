export default function EmptyWishlist() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-10">
      <i className="far fa-heart text-[#888888] text-5xl mb-5"></i>
      <h3 className="font-semibold text-xl mb-4">Your wishlist is empty</h3>
      <p className="text-[#888888] mb-6">
        Browse our products and add items to your wishlist to save them for
        later!
      </p>
      <a
        href="/products"
        className="bg-[#ffd400] text-[#020202] font-semibold border-none px-6 py-2 rounded-md transition-all hover:bg-[#e6bf00] inline-block"
      >
        Shop Now
      </a>
    </div>
  );
}
