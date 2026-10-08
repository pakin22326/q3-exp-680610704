import { useItemStore } from "@/store/dataStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function OverviewCards() {
  const expenses = useItemStore((state) => state.expenses);
  const totalItems = expenses.length;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Tabs defaultValue="Overview" className="w-[400px] md:col-span-3">
        <TabsList>
        <TabsTrigger value="Overview">Overview</TabsTrigger>
        <TabsTrigger value="By Category">By Category</TabsTrigger>
      </TabsList>
      <TabsContent value="Overview" className="md:col-span-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-red-500 font-bold">
            ฿
            {expenses
              .reduce((sum, expense) => sum + expense.amount, 0)
              .toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Total Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-blue-500 font-bold">{totalItems}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Average Expense</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-green-700 font-bold">
            ฿
            {totalItems > 0
              ? (
                  expenses.reduce((sum, expense) => sum + expense.amount, 0) /
                  totalItems
                ).toFixed(2)
              : "0.00"}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
    </Tabs>
    </div>
  );
}


