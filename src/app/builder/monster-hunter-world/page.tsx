import { Metadata } from 'next'
import MHWBuilderComponent from "@/app/builder/monster-hunter-world/components/MHWBuilderComponent";

export const metadata: Metadata = {
    title: "HunterPie Hub | Monster Hunter World Builder",
    description: "Build creator for Monster Hunter World"
}

export default function Page() {
    return (
        <>
            <MHWBuilderComponent />
        </>
    )
}