import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <Drawer >
      <DrawerTrigger render={<Button variant="outline" />}>Phakin Ounruen</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Phakin Ounruen</DrawerTitle>
          <DrawerDescription>Student Information</DrawerDescription>
          <DrawerTitle><p className="bg-amber-100 text-amber-800 hover:bg-amber-100">Hobbies</p> </DrawerTitle>
        </DrawerHeader>
        <div className="p-4">{/* Content here */}</div>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>
            Close
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}


