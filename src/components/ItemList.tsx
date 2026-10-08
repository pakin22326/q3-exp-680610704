import { useItemStore } from "@/store/dataStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";

export function ItemList() {
  const { expenses } = useItemStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-muted-foreground py-6"
                >
                  No expenses recorded yet.
                </TableCell>
              </TableRow>
            ) : (
              // replace the following hardcoded row with the dynamic mapping of data items
              expenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell className="text-muted-foreground">
                    {expense.date}
                  </TableCell>
                  <TableCell className="font-medium">{expense.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{expense.category}</Badge>
                  </TableCell>
                  <TableCell className="text-right font-semibold">฿{expense.amount.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                  <Button
                    className="text-white bg-red-500 hover:bg-red-600 text-white"
                    variant="ghost"
                    size="sm"
                  >
                    <Trash className="h-4 w-4" />
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              ))
            )}
          </TableBody>  
          
        </Table>
      </CardContent>
    </Card>
  );
}

