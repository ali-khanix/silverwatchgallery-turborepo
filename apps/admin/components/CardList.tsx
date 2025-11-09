import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularProducts = [
  {
    id: 1,
    name: "کاسیو",
    shortDescription: "MTP-1381L-1AV",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    price: 4900000,
    offer: 5200000,
    gender: "men",
    colors: ["black", "blue", "red"],
    images: {
      black: "/products/watch-image.png",
      blue: "/products/watch-image-blue.png",
      red: "/products/watch-image-red.png",
    },
  },
  {
    id: 2,
    name: "WWOOR",
    shortDescription: "Quartz",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    price: 13200000,
    offer: 14000000,
    gender: "men",
    colors: ["blue"],
    images: {
      blue: "/products/WWOOr-quartz.webp",
    },
  },
  {
    id: 3,
    name: "Apple Watch ",
    shortDescription: "Series 10",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    price: 19300000,
    offer: 20000000,
    gender: "men",
    colors: ["black"],
    images: {
      black:
        "/products/Apple-Watch-Series-10-watch-face-Flux-240909_inline.jpg.large.jpg",
    },
  },
  {
    id: 4,
    name: "Ben Nevis",
    shortDescription: "مینیمال",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    price: 19300000,
    offer: 20000000,
    gender: "men",
    colors: ["brown"],
    images: {
      brown: "/products/ben-nevis-mens-watches-minimalist.jpg",
    },
  },
  {
    id: 5,
    name: "Sunday",
    shortDescription: "MTP-1381L-1AV",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    price: 19300000,
    offer: 20000000,
    gender: "men",
    colors: ["gold"],
    images: {
      gold: "/products/stylish-golden-watch-white-surface.jpg",
    },
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "پرداخت سفارش",
    badge: "علیرضا محمدی",
    image:
      "https://img.freepik.com/free-photo/close-up-portrait-attractive-man-with-afro-hairstyle-stubble-wears-orange-anorak_273609-8595.jpg?semt=ais_hybrid&w=740&q=80",
    count: 1400,
  },
  {
    id: 2,
    title: "پرداخت سفارش",
    badge: "زهرا صادقی",
    image:
      "https://img.freepik.com/free-psd/medium-shot-smiley-man-posing_23-2150454306.jpg?semt=ais_hybrid&w=740&q=80",
    count: 2100,
  },
  {
    id: 3,
    title: "پرداخت سفارش",
    badge: "مهدی خانی",
    image:
      "https://img.freepik.com/free-psd/portrait-man-teenager-isolated_23-2151745771.jpg?semt=ais_hybrid&w=740&q=80",
    count: 1300,
  },
  {
    id: 4,
    title: "پرداخت سفارش",
    badge: "درسا طاهری",
    image:
      "https://img.freepik.com/premium-psd/white-tshirt-mockup-tee-design-merch-showcase-template-unisex-streetwear-aesthetic-branding_883241-55444.jpg?semt=ais_hybrid&w=740&q=80",
    count: 2500,
  },
  {
    id: 5,
    title: "پرداخت سفارش",
    badge: "درسا طاهری",
    image:
      "https://img.freepik.com/premium-psd/white-tshirt-mockup-tee-design-merch-showcase-template-unisex-streetwear-aesthetic-branding_883241-55444.jpg?semt=ais_hybrid&w=740&q=80",
    count: 1400,
  },
];

const CardList = ({ title }: { title: string }) => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {title === "محصولات محبوب"
          ? popularProducts.map((item) => (
              <Card
                key={item.id}
                className="flex flex-row p-2 items-center justify-between"
              >
                <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                  <Image
                    src={Object.values(item.images)[0] || ""}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-sm font-medium flex flex-col gap-2">
                    <span>{item.name}</span>
                  </CardTitle>
                </CardContent>
                <CardFooter>{item.price.toLocaleString()} تومان</CardFooter>
              </Card>
            ))
          : latestTransactions.map((item) => (
              <Card
                key={item.id}
                className="flex flex-row p-2 items-center justify-between"
              >
                <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                  <Image
                    src={item.image || ""}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-sm font-medium flex flex-col gap-2">
                    <span>{item.title}</span>
                  </CardTitle>
                  <Badge variant={"secondary"}>{item.badge}</Badge>
                </CardContent>
                <CardFooter>{item.count / 1000}k</CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default CardList;
