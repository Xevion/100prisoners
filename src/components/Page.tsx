import Link from "next/link";
import type {FunctionComponent} from "react";
import React from "react";
import DarkModeSwitch from "@/components/DarkModeSwitch";

interface PageProps {
    children: React.ReactNode;
}

const Page: FunctionComponent<PageProps> = ({children}: PageProps) => {
    return (
        <>
            <main className="flex w-full flex-col items-center bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300">
                <DarkModeSwitch className="fixed top-5 right-5" />
                <div className="mt-8 px-3 max-w-screen-md w-[90%]">
                    <h1 className="text-3xl font-rokkitt text-zinc-800 dark:text-zinc-100 sm:text-5xl mb-2">
                        <Link href={"/"}>100Prisoners.com</Link>
                    </h1>

                    {children}
                    <div className="flex flex-col items-center">
                        <div className="grid py-1 grid-cols-1 gap-x-1 whitespace-nowrap divide-x-2">
                            <div className="col-span-1 p-2">
                                Created by <Link href={"https://xevion.dev"} about="_blank">
                                <span className="font-bold">
                                    Ryan Walters
                                </span>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Page;
