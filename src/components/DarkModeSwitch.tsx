import React, {FunctionComponent, useEffect, useState} from "react";


interface SwitchProps {
}

function setMode(dark: boolean) {
    if (dark)
        document.documentElement.classList.add('dark')
    else
        document.documentElement.classList.remove('dark')
}

function prefersDark(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const DarkModeSwitch: FunctionComponent<SwitchProps> = ({}: SwitchProps) => {
    const [, setDark] = useState<boolean | null>(null);
    useEffect(() => {
        setMode(prefersDark())
    })

    return <button
        className={"rounded px-3 py-1.5 bg-slate-600 dark:bg-zinc-200 text-zinc-50 dark:text-gray-800 shadow font-inter"}
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

        }>Toggle Mode</button>
}

export default DarkModeSwitch;