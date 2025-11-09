"use client";

import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export type Payment = {
  id: string;
  amount: number;
  fullName: string;
  userId: string;
  email: string;
  status: "در حال ارسال" | "در حال پردازش" | "موفق" | "ناموفق";
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        checked={row.getIsSelected()}
      />
    ),
  },
  {
    accessorKey: "fullName",
    header: "کاربر",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ایمیل
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "status",
    header: "وضعیت",
    cell: ({ row }) => {
      const status = row.getValue("status");

      return (
        <div
          className={cn(
            `p-1 rounded-md w-max text-xs`,
            status === "در حال ارسال" && "bg-yellow-500/40",
            status === "موفق" && "bg-green-500/40",
            status === "ناموفق" && "bg-red-500/40"
          )}
        >
          {status as string}
        </div>
      );
    },
  },

  {
    accessorKey: "amount",
    header: () => <div className="text-right">مقدار (تومان)</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // ✅ Convert Rial → Toman
      const tomanValue = amount / 10;

      // ✅ Format with Persian digits and thousand separators
      const formatted = new Intl.NumberFormat("fa-IR").format(tomanValue);

      return (
        <div className="text-right font-medium">
          {formatted} <span className="text-muted-foreground">تومان</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    size: 40,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-right">
                اقدام ها
              </DropdownMenuLabel>
              <DropdownMenuItem
                className="justify-end"
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                کپی کردن کد پرداخت
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-end">
                <Link href={`/payments/${payment.userId}`}>نمایش مشتری</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>نمایش جزئیات پرداخت</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
