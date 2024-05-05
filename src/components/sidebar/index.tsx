"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { menuOptions } from "@/lib/constants";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator"
import { LucideMousePointerClick, GitBranchIcon, Database } from "lucide-react";

type Props = {};

const MenuOptions = (props: Props) => {
  const pathname = usePathname();

  return (
    <nav className="dark:bg-black h-screen overflow-scroll flex justify-between items-center flex-col gap-10 py-6 px-2">
      <div className="flex flex-col items-center justify-center gap-8">
        <Link className="flex font-bold flex-row" href="/">
          Fuzzie
        </Link>
        <TooltipProvider>
          {menuOptions.map((menuItem) => (
            <ul key={menuItem.name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menuItem.href}
                      className={clsx(
                        "group h-8 w-8 flex justify-center items-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                        {
                          "dark:bg-[#2F006B] bg-[#EEE0FF]":
                            pathname === menuItem.href,
                        }
                      )}
                    >
                      <menuItem.Component
                        selected={pathname === menuItem.href}
                      />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-black/10 backdrop-blur-xl"
                >
                  <p>{menuItem.name}</p>
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
        <Separator/>
        <div className="flex items-center flex-col gap-9 h-56 py-4 px-2 rounded-full overflow-scroll border-[1px] dark:bg-[#353346]/30">
              <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                <LucideMousePointerClick className="dark-text-white" size={18}/>
                <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"/>
              </div>
              <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                <GitBranchIcon className="dark-text-white" size={18}/>
                <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"/>
              </div>
              <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                <Database className="dark-text-white" size={18}/>
                <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"/>
              </div>
              <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                <GitBranchIcon className="dark-text-white" size={18}/>
              </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-8">
                      
      </div>
    </nav>
  );
};

export default MenuOptions;
