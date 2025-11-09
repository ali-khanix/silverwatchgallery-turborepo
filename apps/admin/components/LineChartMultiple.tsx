"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { TrendingUp } from "lucide-react";

const chartData = [
  { month: "فروردین", desktop: 186, mobile: 80 },
  { month: "اردیبهشت", desktop: 305, mobile: 200 },
  { month: "خرداد", desktop: 237, mobile: 120 },
  { month: "تیر", desktop: 73, mobile: 190 },
  { month: "مرداد", desktop: 209, mobile: 130 },
  { month: "شهریور", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "دسکتاپ",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "موبایل",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const LineChartMultiple = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>نمودار خطی - چندگانه</CardTitle>
        <CardDescription>آبان 1404</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              reversed
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={40}
              orientation="right"
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              <TrendingUp className="h-4 w-4 text-green-500" />
              افزایش ۵.۲٪ در این ماه
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              نمایش مجموع بازدیدکنندگان در ۶ ماه گذشته
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LineChartMultiple;
