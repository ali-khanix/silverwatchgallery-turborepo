import { ChevronDown } from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    name: "دسته بندی",
    icon: <ChevronDown />,
    slug: "products",
  },
  {
    name: "کالکشن ها",
    slug: "collections",
  },
  {
    name: "برند ها",
    icon: <ChevronDown />,
    slug: "brands",
  },
  {
    name: "تخفیف ها",
    slug: "offers",
  },
  {
    name: "تماس با ما",
    slug: "call-us",
  },
];

const Categories = () => {
  return (
    <div className="w-full flex justify-start items-center mx-auto ">
      <ul className="flex gap-12 py-4">
        {menuItems.map((item) => (
          <li key={item.name} className="-translate-x-3">
            <Link href={`/${item?.slug}`} className="hover:text-zinc-400">
              <div className="flex flex-row gap-1">
                {item.name} {item?.icon}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
