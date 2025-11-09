import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: "728ed521",
      amount: 134000000,
      status: "در حال ارسال",
      fullName: "مهدی بهاری",
      userId: "88",
      email: "mehdi.bahari@gmail.com",
    },
    {
      id: "728ed522",
      amount: 124000000,
      status: "موفق",
      fullName: "سارا احمدی",
      userId: "72",
      email: "sara.ahmadi@gmail.com",
    },
    {
      id: "728ed523",
      amount: 167000000,
      status: "موفق",
      fullName: "علی رضایی",
      userId: "89",
      email: "ali.rezaei@gmail.com",
    },
    {
      id: "728ed524",
      amount: 156000000,
      status: "ناموفق",
      fullName: "فاطمه مرادی",
      userId: "33",
      email: "fateme.moradi@gmail.com",
    },
    {
      id: "728ed525",
      amount: 145000000,
      status: "موفق",
      fullName: "نگین صادقی",
      userId: "82",
      email: "negin.sadeghi@gmail.com",
    },
    {
      id: "728ed526",
      amount: 189000000,
      status: "در حال ارسال",
      fullName: "رضا اکبری",
      userId: "73",
      email: "reza.akbari@gmail.com",
    },
    {
      id: "728ed527",
      amount: 178000000,
      status: "موفق",
      fullName: "الهام نظری",
      userId: "11",
      email: "elham.nazari@gmail.com",
    },
    {
      id: "728ed528",
      amount: 190000000,
      status: "موفق",
      fullName: "امین کریمی",
      userId: "22",
      email: "amin.karimi@gmail.com",
    },
    {
      id: "728ed529",
      amount: 134000000,
      status: "ناموفق",
      fullName: "بهاره موسوی",
      userId: "74",
      email: "bahare.mousavi@gmail.com",
    },
    {
      id: "728ed52a",
      amount: 543000000,
      status: "موفق",
      fullName: "نوید جعفری",
      userId: "64",
      email: "navid.jafari@gmail.com",
    },
  ];
};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">همه ی پرداخت ها</h1>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;
