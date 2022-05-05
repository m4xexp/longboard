import React from "react";

const statisProducts = [
  {
    id: 1,
    name: "Durock V2 Stabilizers",
    href: "#",
    price: "$17.00",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0291/0778/1710/products/custom_resized_6cd2e6b7-9152-4dd3-a8a6-24da94adfe06.jpg?v=1639400840",
    imageAlt: "Premium PCB Mounted Stabilizers.",
  },
  {
    id: 2,
    name: "Krytox™ GPL 205 GRADE 0",
    href: "#",
    price: "$14.00",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0291/0778/1710/products/DSC06054_1.jpg?v=1639159701",
    imageAlt: "Krytox™ GPL205 Grease is a high-performance lubricant",
    many: true,
  },
  {
    id: 3,
    name: "UwU Switch Puller",
    href: "#",
    price: "$3.50",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0291/0778/1710/products/DSC06341.jpg?v=1639400715",
    imageAlt:
      "The prime example of essentials for Mechanical Keyboard Builder. Comes with a cute UwU design",
  },
  {
    id: 4,
    name: "Krytox™ XHT-BDZ Grease",
    href: "#",
    price: "$18.00",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0291/0778/1710/products/DSC06295_720x.jpg?v=1639159610",
    imageAlt:
      "Krytox™ XHT-BDZ Grease is designed manufactured by THE CHEMOURS COMPANY FC, LLC ",
  },
  // More products...
];

type Props = {};

function HomeProduct({}: Props): JSX.Element {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-medium tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {statisProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  {/*  eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.many && <span>from</span>} {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeProduct;
