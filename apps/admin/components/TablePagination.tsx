import { Table } from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between rtl p-2 py-4">
      {/* Selected rows info */}
      <div className="text-muted-foreground flex-1 text-sm text-right">
        {table.getFilteredSelectedRowModel().rows.length} از{" "}
        {table.getFilteredRowModel().rows.length} ردیف انتخاب شده.
      </div>

      <div className="flex items-center space-x-6 lg:space-x-8 flex-row-reverse">
        {/* Rows per page */}
        <div className="flex items-center space-x-2 space-x-reverse">
          <p className="text-sm font-medium">تعداد ردیف در هر صفحه</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 25, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Page info */}
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          صفحه {table.getState().pagination.pageIndex + 1} از{" "}
          {table.getPageCount()}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center space-x-2 space-x-reverse">
          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">اولین صفحه</span>
            <ChevronsRight /> {/* swapped */}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">صفحه قبل</span>
            <ChevronRight /> {/* swapped */}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">صفحه بعد</span>
            <ChevronLeft /> {/* swapped */}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">آخرین صفحه</span>
            <ChevronsLeft /> {/* swapped */}
          </Button>
        </div>
      </div>
    </div>
  );
}
