import React, { useState, useEffect, useRef } from "react";

const ViewProduct = () => {
  const [mainImage, setMainImage] = useState("../img/products/milma1.webp");
  const thumbnailRef = useRef(null);
  const zoomLensRef = useRef(null);
  const zoomPreviewRef = useRef(null);
  const zoomedImageRef = useRef(null);
  const thumbnailContainerRef = useRef(null);


  const thumbnails = [
    { id: 1, src: "../img/products/milma1.webp", alt: "Product thumbnail" },
    { id: 2, src: "../img/products/milma2.webp", alt: "Product info" },
    { id: 3, src: "../img/products/milma3.webp", alt: "Nutrition facts" },
    { id: 4, src: "../img/products/milma4.webp", alt: "Product details" },
    { id: 5, src: "../img/products/milma5.webp", alt: "Additional info" },
  ];

  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  useEffect(() => {
    const thumbnail = thumbnailRef.current;
    const zoomLens = zoomLensRef.current;
    const zoomPreview = zoomPreviewRef.current;
    const zoomedImage = zoomedImageRef.current;
    const thumbnailContainer = thumbnailContainerRef.current;

    if (
      !thumbnail ||
      !zoomLens ||
      !zoomPreview ||
      !zoomedImage ||
      !thumbnailContainer
    )
      return;

    const zoomLevel = 2;
    const lensSize = 150;

    const setupZoom = () => {
      
      zoomedImage.src = thumbnail.src;
      zoomedImage.style.width = thumbnail.naturalWidth * zoomLevel + "px";
      zoomedImage.style.height = thumbnail.naturalHeight * zoomLevel + "px";
      zoomedImage.style.display = "block";

   
      zoomLens.style.width = lensSize + "px";
      zoomLens.style.height = lensSize + "px";

    
      const handleMouseEnter = () => {
        zoomPreview.style.display = "block";
        zoomLens.style.display = "block";
      };

     
      const handleMouseLeave = () => {
        zoomPreview.style.display = "none";
        zoomLens.style.display = "none";
      };

      
      const handleMouseMove = (e) => {
        const rect = thumbnail.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

   
        let lensX = x - lensSize / 2;
        let lensY = y - lensSize / 2;

        const maxX = rect.width - lensSize;
        const maxY = rect.height - lensSize;

        lensX = Math.max(0, Math.min(lensX, maxX));
        lensY = Math.max(0, Math.min(lensY, maxY));

        zoomLens.style.left = lensX + "px";
        zoomLens.style.top = lensY + "px";

   
        const ratioX = (lensX + lensSize / 2) / rect.width;
        const ratioY = (lensY + lensSize / 2) / rect.height;

        const zoomX = ratioX * zoomedImage.width - zoomPreview.offsetWidth / 2;
        const zoomY =
          ratioY * zoomedImage.height - zoomPreview.offsetHeight / 2;

 
        const maxZoomX = zoomedImage.width - zoomPreview.offsetWidth;
        const maxZoomY = zoomedImage.height - zoomPreview.offsetHeight;

    
        zoomedImage.style.left = -Math.max(0, Math.min(zoomX, maxZoomX)) + "px";
        zoomedImage.style.top = -Math.max(0, Math.min(zoomY, maxZoomY)) + "px";
      };

      thumbnailContainer.addEventListener("mouseenter", handleMouseEnter);
      thumbnailContainer.addEventListener("mouseleave", handleMouseLeave);
      thumbnailContainer.addEventListener("mousemove", handleMouseMove);

      return () => {
        thumbnailContainer.removeEventListener("mouseenter", handleMouseEnter);
        thumbnailContainer.removeEventListener("mouseleave", handleMouseLeave);
        thumbnailContainer.removeEventListener("mousemove", handleMouseMove);
      };
    };

   
    if (thumbnail.complete) {
      const cleanup = setupZoom();
      return cleanup;
    } else {
      thumbnail.onload = () => {
        const cleanup = setupZoom();
        return cleanup;
      };
    }
  }, [mainImage]); 

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
   
        <div className="text-sm text-gray-600 mb-4">
          <span>Home</span> / <span>Milk</span> /{" "}
          <span className="text-gray-800">Milma Pride Toned Fresh Milk</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
         
          <div className="md:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <div className="flex">
                
                <div
                  className="w-full h-[400px] flex justify-center items-center relative overflow-hidden cursor-zoom-in"
                  ref={thumbnailContainerRef}
                >
                  <img
                    src={mainImage}
                    alt="Milma Pride Toned Fresh Milk"
                    className="w-full h-full object-contain"
                    ref={thumbnailRef}
                  />
                  <div className="zoom-lens" ref={zoomLensRef}></div>
                </div>
              </div>
            </div>

          
            <div className="flex space-x-2 overflow-x-auto">
              {thumbnails.map((thumb) => (
                <div
                  key={thumb.id}
                  className={`border rounded p-1 w-16 h-16 cursor-pointer ${
                    mainImage === thumb.src
                      ? "border-2 border-green-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleThumbnailClick(thumb.src)}
                >
                  <img
                    src={thumb.src}
                    alt={thumb.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
       
            <div
              className="w-full h-[400px] bg-gray-50 hidden relative overflow-hidden border-l border-gray-200 z-50"
              ref={zoomPreviewRef}
            >
              <img
                src={mainImage}
                className="zoomed-image"
                ref={zoomedImageRef}
                alt="Zoomed product view"
              />
            </div>

           
            <h1 className="text-2xl font-bold mb-1">
              Milma Pride Toned Fresh Milk
            </h1>

    
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">10 MINS</span>
            </div>

            <div className="mb-4">
              <a
                href="#"
                className="text-green-600 font-medium hover:underline"
              >
                View all by Milma →
              </a>
            </div>

  
            <div className="mb-4">
              <div className="text-sm text-gray-500">520 ml</div>
              <div className="flex items-baseline">
                <span className="text-sm text-gray-500">MRP</span>
                <span className="text-lg font-bold ml-1">₹28</span>
              </div>
              <div className="text-xs text-gray-500">
                (Inclusive of all taxes)
              </div>
            </div>

       
            <div className="mb-8">
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
                ADD
              </button>
            </div>

      
            <div className="border-t pt-4">
              <h3 className="font-bold text-lg mb-4">Why shop from Sara Shopy?</h3>

              <div className="space-y-4">
               
                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-2 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Superfast Delivery</h4>
                    <p className="text-sm text-gray-500">
                      Get your order delivered to your doorstep at the earliest
                      from dark stores near you
                    </p>
                  </div>
                </div>

                
                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-2 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Best Prices & Offers</h4>
                    <p className="text-sm text-gray-500">
                      Best price destination with offers directly from the
                      manufacturers
                    </p>
                  </div>
                </div>

                
                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-2 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Wide Assortment</h4>
                    <p className="text-sm text-gray-500">
                      Choose from 5000+ products across food, personal care,
                      household & other categories
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Product Details</h2>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="mb-4">
                  <div className="font-medium">Toned Milk</div>
                </div>
                <div className="mb-4">
                  <div className="font-medium">Type</div>
                </div>
                <div className="mb-4">
                  <div className="font-medium">Unit</div>
                  <div className="text-gray-600">520 ml</div>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <div className="font-medium">Storage Tips</div>
                  <div className="text-gray-600">Refrigerator</div>
                </div>
                <div className="mb-4">
                  <div className="font-medium">FSSAI License</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .zoom-lens {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.3);
          pointer-events: none;
          display: none;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .zoomed-image {
          position: absolute;
          max-width: none;
          max-height: none;
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ViewProduct;
