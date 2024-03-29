import * as React from "react";
import { Button } from "@/components/ui/button";
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
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { AppbarAuth } from "@/components/AppbarAuth";

export function NavigationMenu() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="bg-transparent border-none">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="w-full flex flex-col items-center text-center">
            <DrawerTitle>QuantumMind</DrawerTitle>
            <DrawerDescription>Choose an option</DrawerDescription>
          </DrawerHeader>

          <div className="p-4 pb-16">
            <div className="flex flex-col items-center justify-center space-y-2">
              <Button size={"lg"} asChild>
                <DrawerClose>
                  <Link
                    href={"http://localhost:3000/new-courses"}
                    target="_blank"
                  >
                    <p className="text-white">Join now</p>
                  </Link>
                </DrawerClose>
              </Button>

              <AppbarAuth isInMenu={true} />
            </div>
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
