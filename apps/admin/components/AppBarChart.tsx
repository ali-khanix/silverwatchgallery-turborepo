"use client";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardHeader, CardTitle } from "./ui/card";

const chartData = [
  { month: "فروردین", total: 186, successful: 80 },
  { month: "اردیبهشت", total: 305, successful: 200 },
  { month: "خرداد", total: 237, successful: 120 },
  { month: "تیر", total: 173, successful: 130 },
  { month: "مرداد", total: 209, successful: 130 },
  { month: "شهریور", total: 214, successful: 140 },
];

const chartConfig = {
  total: {
    label: "جمع کل",
    color: "var(--chart-1)",
  },
  successful: {
    label: "موفق",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const AppBarChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>مجموع در آمدها</CardTitle>
      </CardHeader>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 10)}
            reversed
          />
          <YAxis
            tickLine={false}
            tickMargin={40}
            axisLine={false}
            orientation="right"
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />

          <Bar dataKey="total" fill="var(--color-total)" radius={4} />
          <Bar dataKey="successful" fill="var(--color-successful)" radius={4} />
        </BarChart>
      </ChartContainer>
    </Card>
  );
};

export default AppBarChart;
