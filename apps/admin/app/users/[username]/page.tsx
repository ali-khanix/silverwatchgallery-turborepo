import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Progress } from "@/components/ui/progress";

import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LineChartMultiple from "@/components/LineChartMultiple";

const SingeUserPage = () => {
  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">داشبورد</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">کاربران</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>علیرضا محمدی</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/*  CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* USER BADGES CONTAINER*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">برچست های کاربر</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h2 className="font-bold mb-2">کاربر اهراز هویت شده</h2>
                  <p className="text"></p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-500/30 border border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h2 className="font-bold mb-2">کاربر اهراز هویت شده</h2>
                  <p className="text"></p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h2 className="font-bold mb-2">کاربر اهراز هویت شده</h2>
                  <p className="text"></p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-red-500/30 border border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h2 className="font-bold mb-2">کاربر اهراز هویت شده</h2>
                  <p className="text"></p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">مشخصات کاربر</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>ویرایش</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-foreground">مشخصات تکمیلی کاربر</p>
                <Progress value={66} />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">نام کاربری:</span>
                <span className="">علیرضا محمدی</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">ایمیل:</span>
                <span className="">alireza@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">شماره موبایل:</span>
                <span className="">09121234567</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">نقش:</span>
                <Badge>ادمین</Badge>
              </div>
              <p className="text-muted-foreground">
                عضو شده در تاریخ 1404/10/10
              </p>
            </div>
          </div>

          {/* CARD LIST CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="آخرین تراکنش ها" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* USER CARD CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <h1 className="text-xl font-semibold">علیرضا محمدی</h1>
            </div>
            <p className="text-muted-foreground  text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </div>

          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-4">
            <h2>فعالیت های کاربر</h2>
            <LineChartMultiple />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingeUserPage;
