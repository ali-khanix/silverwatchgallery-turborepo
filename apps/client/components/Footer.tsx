import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "دسترسی سریع",
    subTitle: [
      {
        value: "صفحه ی اصلی",
        link: "/",
      },
      {
        value: "محصولات",
        link: "/products",
      },
      {
        value: "برند ها",
        link: "/brands",
      },
      {
        value: "پنل کاربری",
        link: "/user",
      },
    ],
  },
  {
    title: "لینک های کاربران",
    subTitle: [
      {
        value: "ساعت های مردانه",
        link: "/products/mens-watches",
      },
      {
        value: "ساعت های زنانه",
        link: "/products/womens-watches",
      },
      {
        value: "ساعت های ورزشی",
        link: "/products/sports-watches",
      },
      {
        value: "ساعت های اتوماتیک",
        link: "/products/automatic-watches",
      },
      {
        value: "ساعت های داری تخفیف",
        link: "/offers",
      },
    ],
  },
  {
    title: "گالری ساعت سیلور",
    subTitle: [
      {
        value: "درباره ما",
        link: "/about",
      },
      {
        value: "تماس با ما",
        link: "/call",
      },
      {
        value: "شرایط و عودت کالا",
        link: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className=" bg-zinc-950">
      <div className="p-8 flex justify-between items-center sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto text-white">
        <div className="flex flex-col gap-8 sm:gap-4 sm:flex-row w-full justify-between">
          <div className="sm:max-w-[25%] flex flex-col gap-2 border-b sm:border-b-0 pb-2">
            <Link href={"/"}>
              <Image src={"/logo.svg"} width={100} height={100} alt="logo" />
            </Link>
            <h2>شعبه کرج</h2>
            <p className="text-zinc-400">
              فردیس، بین فلکه دوم و کانال غربی، فروشگاه ساعت سیلور
            </p>
          </div>
          {footerLinks.map((section) => (
            <div className="flex flex-col gap-2" key={section.title}>
              <h1>{section.title}</h1>
              <ul className="flex flex-col gap-1">
                {section.subTitle.map((item) => (
                  <li key={item.value}>
                    <Link
                      className="text-zinc-400 hover:text-zinc-500"
                      href={item.link}
                    >
                      {item.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <Link href={"https://enamad.ir"}>
              <Image
                src={"/e-namad-logo.webp"}
                width={140}
                height={140}
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
