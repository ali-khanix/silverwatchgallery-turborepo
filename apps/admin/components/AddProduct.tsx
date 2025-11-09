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
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

// دسته‌بندی‌ها
const cateogries = ["ساعت مچی مردانه", "ساعت مچی زنانه"] as const;

// رنگ‌ها: انگلیسی برای مقدار، فارسی برای نمایش
const colors = [
  { name: "blue", fa: "آبی" },
  { name: "green", fa: "سبز" },
  { name: "red", fa: "قرمز" },
  { name: "yellow", fa: "زرد" },
  { name: "purple", fa: "بنفش" },
  { name: "orange", fa: "نارنجی" },
  { name: "pink", fa: "صورتی" },
  { name: "brown", fa: "قهوه‌ای" },
  { name: "gray", fa: "خاکستری" },
  { name: "black", fa: "مشکی" },
  { name: "white", fa: "سفید" },
] as const;

// طرح اعتبارسنجی Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "اسم محصول الزامیست" }),
  shortDescription: z
    .string()
    .min(10, { message: "توضیح مختصر محصول الزامیست" })
    .max(80, { message: "حداکثر حروف باید ۸۰ باشد" }),
  description: z.string().min(1, { message: "توضیح کامل محصول الزامیست" }),
  price: z.string().min(1, { message: "قیمت الزامیست" }),
  category: z.enum(cateogries),
  colors: z.array(z.enum(colors.map((c) => c.name) as [string, ...string[]])),
  images: z.record(z.string(), z.string()).optional(),
});

const AddProduct = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <SheetContent side="left" className="text-right" dir="rtl">
      <ScrollArea className="h-screen">
        <SheetHeader className="sticky bg-red-400">
          <SheetTitle className="mb-4 font-bold text-lg">
            اضافه کردن محصول
          </SheetTitle>

          <SheetDescription asChild>
            <Form {...form}>
              <form
                className="space-y-8 [&_label]:text-right text-right"
                dir="rtl"
              >
                {/* اسم محصول */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>اسم محصول</FormLabel>
                      <FormControl>
                        <Input placeholder="مثلاً ساعت مچی کلاسیک" {...field} />
                      </FormControl>
                      <FormDescription>اسم محصول را وارد کنید</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* توضیح مختصر */}
                <FormField
                  control={form.control}
                  name="shortDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>توضیح مختصر</FormLabel>
                      <FormControl>
                        <Input placeholder="توضیح کوتاه محصول" {...field} />
                      </FormControl>
                      <FormDescription>
                        توضیح مختصر محصول را وارد کنید
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* توضیح کامل */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>توضیح محصول</FormLabel>
                      <FormControl>
                        <Textarea placeholder="توضیحات کامل محصول" {...field} />
                      </FormControl>
                      <FormDescription>
                        توضیح محصول را وارد کنید
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* قیمت */}
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>قیمت</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="مثلاً 4500000"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>قیمت محصول را وارد کنید</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* دسته‌بندی */}
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>دسته‌بندی</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="یک دسته‌بندی انتخاب کنید" />
                          </SelectTrigger>
                          <SelectContent>
                            {cateogries.map((cat) => (
                              <SelectItem key={cat} value={cat}>
                                {cat}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>دسته‌بندی را وارد کنید</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* رنگ‌ها */}
                <FormField
                  control={form.control}
                  name="colors"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>رنگ</FormLabel>
                      <FormControl>
                        <div className="space-y-4">
                          <div className="grid grid-cols-3 gap-4 my-2">
                            {colors.map((color) => (
                              <div
                                key={color.name}
                                className="flex items-center gap-2"
                              >
                                <Checkbox
                                  id={color.name}
                                  checked={field.value?.includes(color.name)}
                                  onCheckedChange={(checked) => {
                                    const current = field.value || [];
                                    if (checked) {
                                      field.onChange([...current, color.name]);
                                    } else {
                                      field.onChange(
                                        current.filter((v) => v !== color.name)
                                      );
                                    }
                                  }}
                                />
                                <label
                                  htmlFor={color.name}
                                  className="text-xs flex items-center gap-2"
                                >
                                  <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: color.name }}
                                  />
                                  {color.fa}
                                </label>
                              </div>
                            ))}
                          </div>

                          {field.value && field.value.length > 0 && (
                            <div className="mt-4 space-y-4">
                              <p>عکس برای رنگ‌های انتخاب‌شده بارگذاری کنید:</p>
                              {field.value.map((colorName) => {
                                const colorFa =
                                  colors.find((c) => c.name === colorName)
                                    ?.fa ?? colorName;
                                return (
                                  <div className="mt-3" key={colorName}>
                                    <div className="flex items-center gap-2 mb-2">
                                      <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: colorName }}
                                      />
                                      <span>{colorFa}</span>
                                    </div>
                                    <Input type="file" accept="image/*" />
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </FormControl>
                      <FormDescription>
                        رنگ‌های موجود را انتخاب کنید
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* دکمه ثبت */}
                <Button type="submit" className="w-full">
                  ثبت محصول
                </Button>
              </form>
            </Form>
          </SheetDescription>
        </SheetHeader>
      </ScrollArea>
    </SheetContent>
  );
};

export default AddProduct;
