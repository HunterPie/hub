import {Metadata} from "next";
import Image from "next/image";
import {LinkButton} from "@/components/primitive/buttons/LinkButton";
import HunterPieLatestVersion from "@/app/components/HunterPieLatestVersion";

export const metadata: Metadata = {
    title: "HunterPie - Overlay and Rich Presence",
    description: "HunterPie landing page",
    icons: "/logo.svg"
}

export default function Home() {
    return (
        <main>
            <nav className="fixed w-screen border-b-thin border-gray-50 backdrop-blur-md z-20">
                <div className="flex flex-row md:px-40 px-10 py-5 bg-gray-500 bg-opacity-50">
                    <div className="flex flex-row opacity-70">
                        <Image src="/logo.svg"
                               alt="logo"
                               width="50"
                               height="50"/>
                        <h1 className="font-medium text-2xl self-center p-2">Hunter<span className="font-light">Pie</span></h1>
                    </div>

                    <div className="flex ml-auto gap-3 self-center md:visible invisible mr-2">
                        <LinkButton href="https://docs.hunterpie.com"
                                    className="p-2 text-white-100 transition-opacity hover:opacity-80">Docs</LinkButton>
                        <LinkButton href="https://github.com/HunterPie/HunterPie"
                                    className="p-2 text-white-100 transition-opacity hover:opacity-80">GitHub</LinkButton>
                        <LinkButton href="https://www.patreon.com/HunterPie"
                                    className="p-2 text-white-100 transition-opacity hover:opacity-80">Patreon</LinkButton>
                    </div>
                    <HunterPieLatestVersion />
                </div>
            </nav>

            <div className="h-[100dvh] overflow-hidden relative flex bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-500 to-blue-900 z-10">
                <div className="landing-bg relative ml-auto my-10 lg:visible invisible">
                    <Image src="/landing-background.png"
                           alt="background"
                           width="2560"
                           height="1440"
                           className="opacity-30 w-screen"/>
                </div>

                <div className="absolute flex flex-col gap-4 md:ml-40 md:mt-40 ml-10 mt-28">
                    <h1 className="text-6xl font-bold">
                        Simple, modern and<br/>
                        robust
                    </h1>
                    <h4 className="text-white-300">
                        HunterPie is a highly detailed, customizable and easy to use overlay<br/>
                        for Monster Hunter games.
                    </h4>

                    <LinkButton href="https://www.nexusmods.com/monsterhunterrise/mods/181"
                                className="bg-blue-600 border-thin border-blue-100 rounded-md p-2 px-5 text-white-50 transition-opacity hover:opacity-80">
                        Download
                    </LinkButton>
                </div>
            </div>
        </main>
    )
}
