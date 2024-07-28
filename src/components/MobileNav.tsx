"use client";


import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {AlignJustify, Menu} from "lucide-react";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";

export default function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
                <div className='flex flex-col items-center justify-between h-full py-8'>
                    <div className='flex flex-col items-center gap-y-32'>
                        <Logo />
                        <Nav
                            containerStyles='flex flex-col items-center gap-y-6'
                            linkStyles='text-2xl'
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
