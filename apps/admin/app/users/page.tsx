import { User, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<User[]> => {
  return [
    {
      id: "728ed521",
      avatar: "/users/1.png",
      status: "فعال",
      fullName: "مهدی بهاری",
      email: "mehdi.bahari@gmail.com",
    },
    {
      id: "728ed522",
      avatar: "/users/2.png",
      status: "غیرفعال",
      fullName: "سارا احمدی",
      email: "sara.ahmadi@gmail.com",
    },
    {
      id: "728ed523",
      avatar: "/users/3.png",
      status: "غیرفعال",
      fullName: "علی رضایی",
      email: "ali.rezaei@gmail.com",
    },
    {
      id: "728ed524",
      avatar: "/users/4.png",
      status: "غیرفعال",
      fullName: "فاطمه مرادی",
      email: "fateme.moradi@gmail.com",
    },
    {
      id: "728ed525",
      avatar: "/users/5.png",
      status: "فعال",
      fullName: "حمید کاظمی",
      email: "hamid.kazemi@gmail.com",
    },
    {
      id: "728ed526",
      avatar: "/users/6.png",
      status: "فعال",
      fullName: "ندا شریفی",
      email: "neda.sharifi@gmail.com",
    },
    {
      id: "728ed527",
      avatar: "/users/7.png",
      status: "فعال",
      fullName: "پریسا محمدی",
      email: "parisa.mohammadi@gmail.com",
    },
    {
      id: "728ed528",
      avatar: "/users/8.png",
      status: "فعال",
      fullName: "رضا کریمی",
      email: "reza.karimi@gmail.com",
    },
    {
      id: "728ed529",
      avatar: "/users/9.png",
      status: "غیرفعال",
      fullName: "الهام قاسمی",
      email: "elham.ghasemi@gmail.com",
    },
    {
      id: "728ed52a",
      avatar: "/users/10.png",
      status: "فعال",
      fullName: "امیر حسینی",
      email: "amir.hosseini@gmail.com",
    },
    {
      id: "728ed52b",
      avatar: "/users/11.png",
      status: "فعال",
      fullName: "نرگس رفیعی",
      email: "narges.rafiei@gmail.com",
    },
    {
      id: "728ed52c",
      avatar: "/users/12.png",
      status: "فعال",
      fullName: "حسین زمانی",
      email: "hossein.zamani@gmail.com",
    },
    {
      id: "728ed52d",
      avatar: "/users/13.png",
      status: "غیرفعال",
      fullName: "زهرا طاهری",
      email: "zahra.taheri@gmail.com",
    },
    {
      id: "728ed52e",
      avatar: "/users/14.png",
      status: "فعال",
      fullName: "محمد قربانی",
      email: "mohammad.ghorbani@gmail.com",
    },
    {
      id: "728ed52f",
      avatar: "/users/15.png",
      status: "فعال",
      fullName: "شقایق نوری",
      email: "shaghayegh.nouri@gmail.com",
    },
    {
      id: "728ed52g",
      avatar: "/users/16.png",
      status: "غیرفعال",
      fullName: "آرمین نادری",
      email: "armin.naderi@gmail.com",
    },
    {
      id: "728ed52h",
      avatar: "/users/17.png",
      status: "فعال",
      fullName: "مریم نیک‌فر",
      email: "maryam.nikfar@gmail.com",
    },
    {
      id: "728ed52i",
      avatar: "/users/18.png",
      status: "فعال",
      fullName: "کامران عباسی",
      email: "kamran.abbasi@gmail.com",
    },
    {
      id: "728ed52j",
      avatar: "/users/19.png",
      status: "غیرفعال",
      fullName: "آزاده توکلی",
      email: "azadeh.tavakoli@gmail.com",
    },
    {
      id: "728ed52k",
      avatar: "/users/20.png",
      status: "فعال",
      fullName: "بهزاد موسوی",
      email: "behzad.mousavi@gmail.com",
    },
    {
      id: "728ed52l",
      avatar: "/users/21.png",
      status: "فعال",
      fullName: "الهام یوسفی",
      email: "elham.yousefi@gmail.com",
    },
    {
      id: "728ed52m",
      avatar: "/users/22.png",
      status: "فعال",
      fullName: "شهرزاد احمدیان",
      email: "shahrzad.ahmadian@gmail.com",
    },
    {
      id: "728ed52n",
      avatar: "/users/23.png",
      status: "غیرفعال",
      fullName: "نسترن ملکی",
      email: "nastaran.maleki@gmail.com",
    },
    {
      id: "728ed52o",
      avatar: "/users/24.png",
      status: "غیرفعال",
      fullName: "پروین فرهادی",
      email: "parvin.farhadi@gmail.com",
    },
    {
      id: "728ed52p",
      avatar: "/users/25.png",
      status: "فعال",
      fullName: "حامد راد",
      email: "hamed.rad@gmail.com",
    },
    {
      id: "728ed52q",
      avatar: "/users/26.png",
      status: "فعال",
      fullName: "نازنین شفیعی",
      email: "nazanin.shafie@gmail.com",
    },
    {
      id: "728ed52r",
      avatar: "/users/27.png",
      status: "فعال",
      fullName: "محسن رضوی",
      email: "mohsen.razavi@gmail.com",
    },
    {
      id: "728ed52s",
      avatar: "/users/28.png",
      status: "غیرفعال",
      fullName: "سعید نجفی",
      email: "saeed.najafi@gmail.com",
    },
    {
      id: "728ed52t",
      avatar: "/users/29.png",
      status: "فعال",
      fullName: "آرزو همتی",
      email: "arezo.hemati@gmail.com",
    },
    {
      id: "728ed52u",
      avatar: "/users/30.png",
      status: "فعال",
      fullName: "رضوان کرمی",
      email: "rezvan.karami@gmail.com",
    },
    {
      id: "728ed52v",
      avatar: "/users/31.png",
      status: "فعال",
      fullName: "مهسا نادری",
      email: "mahsa.naderi@gmail.com",
    },
    {
      id: "728ed52w",
      avatar: "/users/32.png",
      status: "فعال",
      fullName: "احسان رستمی",
      email: "ehsan.rastami@gmail.com",
    },
    {
      id: "728ed52x",
      avatar: "/users/33.png",
      status: "غیرفعال",
      fullName: "الهه کریمی",
      email: "elahe.karimi@gmail.com",
    },
    {
      id: "728ed52y",
      avatar: "/users/34.png",
      status: "فعال",
      fullName: "نوید شریعتی",
      email: "navid.shariati@gmail.com",
    },
    {
      id: "728ed52z",
      avatar: "/users/35.png",
      status: "فعال",
      fullName: "امین خدابنده",
      email: "amin.khodabandeh@gmail.com",
    },
    {
      id: "728ed521f",
      avatar: "/users/36.png",
      status: "فعال",
      fullName: "مهتاب سلیمانی",
      email: "mahtab.soleimani@gmail.com",
    },
  ];
};

const UsersPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">همه ی کاربران</h1>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default UsersPage;
