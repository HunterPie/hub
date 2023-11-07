import { Metadata } from 'next'
import MHWBuilderPage from "@/app/builder/monster-hunter-world/MHWBuilderPage";

export const metadata: Metadata = {
    title: "HunterPie Hub | Monster Hunter World Builder",
    description: "Build creator for Monster Hunter World"
}

export default function Page() {
    return (
        <>
            <MHWBuilderPage />
        </>
    )
}