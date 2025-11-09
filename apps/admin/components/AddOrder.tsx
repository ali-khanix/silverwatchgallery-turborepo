"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

const formSchema = z.object({
  amount: z.number().min(1, { message: "مبلغ حداقل باید 1 عدد باشد" }),
  userId: z.string().min(1, { message: "آیدی کاربر الزامی است" }),
  status: z.enum(["درحال ارسال", "در حال پردازش", "موفق", "ناموفق"]),
});

const AddOrder = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <SheetContent side="left">
      <SheetHeader className="">
        <SheetTitle className="mb-4">اضافه کردن سفارش</SheetTitle>
        <SheetDescription asChild>
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name="amount"
                render={(field) => (
                  <FormItem>
                    <FormLabel>مبلغ</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormDescription>مبلغ را وارد کنید.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="userId"
                render={(field) => (
                  <FormItem>
                    <FormLabel>آیدی کاربر</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormDescription>آیدی کاربر را وارد کنید</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={(field) => (
                  <FormItem>
                    <FormLabel>وضعیت</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="یک وضعیت را انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="penidng">درحال ارسال</SelectItem>
                          <SelectItem value="processing">
                            در حال پردازش
                          </SelectItem>
                          <SelectItem value="success">موفق</SelectItem>
                          <SelectItem value="failed">ناموفق</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>وضعیت سفارش را وارد کنید</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button>ثبت</Button>
            </form>
          </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default AddOrder;
