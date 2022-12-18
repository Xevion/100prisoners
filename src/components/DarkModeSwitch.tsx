import React, {FunctionComponent, useEffect, useState} from "react";

import {SunIcon} from "@heroicons/react/24/outline";
import {MoonIcon} from "@heroicons/react/24/solid";
import {classNames} from "@/utils/helpers";

function setMode(dark: boolean) {
    if (dark)
        document.documentElement.classList.add('dark')
    else
        document.documentElement.classList.remove('dark')
}

function prefersDark(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
}

interface SwitchProps {
    className?: string;
}

const DarkModeSwitch: FunctionComponent<SwitchProps> = ({className}: SwitchProps) => {
    const [dark, setDark] = useState<boolean | null>(null);
    useEffect(() => {
        if (prefersDark()) {
            setDark(true);
            setMode(true);
        }
    }, [])

    return <button
        className={classNames(className, "rounded p-1.5 text-zinc-500 shadow dark:shadow-none dark:border border-zinc-800 font-inter")}
        onClick={() => {
            setDark((wasDark) => {
                // On page load or when changing themes, best to add inline in `head` to avoid FOUC
                if (wasDark === null && prefersDark() || !wasDark) {
                    setMode(true);
                    return true;
                }
                setMode(false);
                return false;
            })
        }

        }>
        {dark ? <MoonIcon className="w-5 h-5"/> : <SunIcon className="w-5 h-5"/>}
    </button>
}

export default DarkModeSwitch;