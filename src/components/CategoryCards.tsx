import { useItemStore } from "@/store/dataStore";
import { categoryOptions } from "@/types/datatypes";
import {
  Utensils,
  Car,
  Book,
  Lightbulb,
  Gamepad2,
  MoreHorizontal,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const iconMap: Record<string, React.ReactNode> = {
  Food: <Utensils className="h-4 w-4" />,
  Transport: <Car className="h-4 w-4" />,
  Education: <Book className="h-4 w-4" />,
  Utilities: <Lightbulb className="h-4 w-4" />,
  Entertainment: <Gamepad2 className="h-4 w-4" />,
  Other: <MoreHorizontal className="h-4 w-4" />,
};

export function CategoryCards() {
  const expenses = useItemStore((state) => state.expenses);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Tabs defaultValue="By Category" className="w-[400px] md:col-span-3">
        <TabsContent value="By Category" className="md:col-span-3">
      {categoryOptions.map((category) => {
        const categoryExpenses = expenses.filter(
          (expense) => expense.category === category.value,
        );
        const categoryTotal = categoryExpenses.reduce(
          (acc, item) => acc + item.amount,
          0,
        );

        return (
          // Use Card component to display values by category
          <Card key={category.value}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {category.label} - ฿{categoryTotal.toFixed(2)}
              </CardTitle>
              {iconMap[category.value]}
            </CardHeader>
          </Card>
        );
      })}
      </TabsContent>
      </Tabs>
    </div>
  );
}
