import ProductInteraction from "@/components/ProductInteraction";
import { ProductType } from "@/lib/schema";
import Image from "next/image";

// TEMP
const product: ProductType = {
  id: 1,
  name: "کاسیو",
  shortDescription: "MTP-1381L-1AV",
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  price: 5200000,
  offer: 4900000,
  gender: "men",
  colors: ["black", "blue", "red"],
  images: {
    black: "/products/watch-image.png",
    blue: "/products/watch-image-blue.png",
    red: "/products/watch-image-red.png",
  },
};

export const generateMetaData = async ({
  params,
}: {
  params: { id: string };
}) => {
  return {
    title: product.name,
    describe: product.description,
  };
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string }>;
}) => {
  const { color } = await searchParams;
  const selectedColor = color || (product.colors[0] as string);

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12 mx-4">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-3/3 md:aspect-2/3">
        <Image
          src={product.images?.[selectedColor] || ""}
          alt={product.name}
          fill
          className="object-contain rounded-md bg-zinc-50"
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-zinc-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">
          {product.price.toLocaleString()} تومان
        </h2>

        <ProductInteraction product={product} selectedColor={selectedColor} />
      </div>
    </div>
  );
};

export default ProductPage;
