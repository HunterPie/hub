import {Metadata} from "next";
import Image from "next/image";
import {LinkButton} from "@/components/primitive/buttons/LinkButton";
import HunterPieLatestVersion from "@/app/components/HunterPieLatestVersion";
import {
    FireIcon,
    BoltIcon,
    SparklesIcon,
    DocumentChartBarIcon,
    ChatBubbleLeftRightIcon,
    SwatchIcon,
    StarIcon,
    HeartIcon,
    CheckCircleIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "HunterPie - Monster Hunter Overlay & Companion",
    description: "HunterPie is a clean, modern and robust overlay for Monster Hunter games",
    icons: "/logo.svg"
}

export default function Home() {
    return (
        <main className="bg-gray-500 text-white-50 font-sans">
            {/* Navigation */}
            <nav className="fixed w-screen border-b-thin border-gray-50 backdrop-blur-md z-50">
                <div className="flex flex-row md:px-40 px-6 py-4 bg-gray-500/80">
                    <div className="flex flex-row items-center gap-2">
                        <Image src="/logo.svg"
                               alt="HunterPie Logo"
                               width="40"
                               height="40"/>
                        <h1 className="font-medium text-xl">Hunter<span className="font-light">Pie</span></h1>
                    </div>

                    <div className="flex ml-auto gap-6 items-center md:visible invisible mr-4">
                        <LinkButton href="https://docs.hunterpie.com"
                                    className="text-white-200 hover:text-white-0 transition-colors text-sm">Docs</LinkButton>
                        <LinkButton href="https://github.com/HunterPie/HunterPie"
                                    className="text-white-200 hover:text-white-0 transition-colors text-sm">GitHub</LinkButton>
                        <LinkButton href="https://www.patreon.com/HunterPie"
                                    className="text-white-200 hover:text-white-0 transition-colors text-sm">Patreon</LinkButton>
                    </div>
                    <HunterPieLatestVersion />
                </div>
            </nav>

            {/* Hero Section with Dynamic Background */}
            <section className="min-h-screen overflow-hidden relative flex animated-gradient-bg">
                {/* Grid with Light Sweep */}
                <div className="grid-bg"></div>
                <div className="light-sweep"></div>
                
                <div className="relative z-10 flex flex-col justify-center md:px-40 px-6 max-w-5xl pt-24">
                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-0 border-thin border-green-500/40 rounded-xl text-sm font-medium">
                            Free & Open Source
                        </span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white-0 leading-tight">
                        A Monster Hunter<br/>
                        <span className="bg-gradient-to-r from-blue-0 to-[#10B9DE] bg-clip-text text-transparent">Overlay</span>
                    </h1>
                    
                    <p className="text-lg text-white-200 mb-10 max-w-2xl leading-relaxed">
                        Elevate your hunting experience with real-time damage tracking, monster health displays, 
                        Discord rich presence, and many customization options.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <LinkButton href="https://www.nexusmods.com/monsterhunterrise/mods/181"
                                    className="bg-blue-0 hover:from-blue-50 hover:to-blue-0 border-thin border-blue-100 rounded-md py-3 px-8 text-white-0 font-medium transition-all text-center">
                            Download HunterPie
                        </LinkButton>
                        <LinkButton href="https://docs.hunterpie.com"
                                    className="bg-gray-100 hover:bg-gray-50 border-thin border-gray-0 rounded-md py-3 px-8 text-white-100 font-medium transition-all text-center">
                            View Documentation
                        </LinkButton>
                    </div>
                </div>
            </section>

            {/* Supported Games Section */}
            <section className="py-20 bg-gray-500 border-y-thin border-gray-50">
                <div className="max-w-6xl mx-auto px-6 md:px-40">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white-0 mb-3">Supported Games</h2>
                        <p className="text-white-400 text-lg">HunterPie works with many Monster Hunter titles</p>
                    </div>
                    
                    <div className="flex flex-col gap-8">
                        {/* Monster Hunter Wilds - Image Left */}
                        <div className="bg-gray-300 border-thin border-orange-0/30 rounded-lg overflow-hidden hover:border-orange-0/60 transition-all group">
                            <div className="flex flex-col md:flex-row">
                                <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: "url('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2246340/ac2357a6167bf543b72c7a69ba7fa647013e1f62/hero_capsule.jpg?t=1770710697')" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-300 hidden md:block" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-300 to-transparent md:hidden" />
                                </div>
                                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className="text-2xl font-bold text-white-0">Monster Hunter Wilds</h3>
                                    </div>
                                    <p className="text-white-400 text-sm mb-5">Available widgets and features for Monster Hunter Wilds:</p>
                                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-orange-0 flex-shrink-0" />
                                            Monster Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-orange-0 flex-shrink-0" />
                                            Abnormalities Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-orange-0 flex-shrink-0" />
                                            Damage Meter Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-orange-0 flex-shrink-0" />
                                            Specialized Tools Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-orange-0 flex-shrink-0" />
                                            Clock Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-orange-0 flex-shrink-0" />
                                            Activities Widget
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Monster Hunter World - Image Right */}
                        <div className="bg-gray-300 border-thin border-blue-0/30 rounded-lg overflow-hidden hover:border-blue-0/60 transition-all group">
                            <div className="flex flex-col md:flex-row-reverse">
                                <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: "url('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/582010/hero_capsule.jpg?t=1768871319')" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-gray-300 hidden md:block" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-300 to-transparent md:hidden" />
                                </div>
                                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className="text-2xl font-bold text-white-0">Monster Hunter World</h3>
                                    </div>
                                    <p className="text-white-400 text-sm mb-5">Available widgets and features for Monster Hunter World:</p>
                                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-blue-0 flex-shrink-0" />
                                            Player Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-blue-0 flex-shrink-0" />
                                            Abnormalities Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-blue-0 flex-shrink-0" />
                                            Damage Meter Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-blue-0 flex-shrink-0" />
                                            Specialized Tools Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-blue-0 flex-shrink-0" />
                                            Clock Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-blue-0 flex-shrink-0" />
                                            Weapons Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-blue-0 flex-shrink-0" />
                                            Activities Widget
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Monster Hunter Rise - Image Left */}
                        <div className="bg-gray-300 border-thin border-violet-0/30 rounded-lg overflow-hidden hover:border-violet-0/60 transition-all group">
                            <div className="flex flex-col md:flex-row">
                                <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: "url('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1446780/hero_capsule.jpg?t=1768870444')" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-300 hidden md:block" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-300 to-transparent md:hidden" />
                                </div>
                                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className="text-2xl font-bold text-white-0">Monster Hunter Rise</h3>
                                    </div>
                                    <p className="text-white-400 text-sm mb-5">Available widgets and features for Monster Hunter Rise:</p>
                                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-violet-0 flex-shrink-0" />
                                            Player Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-violet-0 flex-shrink-0" />
                                            Abnormalities Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-violet-0 flex-shrink-0" />
                                            Damage Meter Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-violet-0 flex-shrink-0" />
                                            Chat Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-violet-0 flex-shrink-0" />
                                            Wirebug Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-violet-0 flex-shrink-0" />
                                            Clock Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-violet-0 flex-shrink-0" />
                                            Weapons Widget
                                        </li>
                                        <li className="flex items-center gap-2 text-white-200 text-sm">
                                            <CheckCircleIcon className="w-4 h-4 text-violet-0 flex-shrink-0" />
                                            Activities Widget
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gray-400 relative overflow-hidden border-b-thin border-gray-50">
                <div className="max-w-6xl mx-auto px-6 md:px-40">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-white-0">
                            Features
                        </h2>
                        <p className="text-white-300 text-lg max-w-2xl mx-auto">
                            Everything you need to become a more effective hunter with detailed insights and beautiful overlays.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-300 border-thin border-gray-50 rounded-lg p-6 hover:border-violet-300 transition-all group">
                            <div className="w-12 h-12 bg-violet-500/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-500/50 transition-colors">
                                <FireIcon className="w-6 h-6 text-violet-0" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white-50">Monster Information</h3>
                            <p className="text-white-300 leading-relaxed text-sm">
                                Track monster health, ailments, part damage, and enrage states with fully customizable displays.
                            </p>
                        </div>

                        <div className="bg-gray-300 border-thin border-gray-50 rounded-lg p-6 hover:border-blue-300 transition-all group">
                            <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/50 transition-colors">
                                <BoltIcon className="w-6 h-6 text-blue-0" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white-50">Damage Tracking</h3>
                            <p className="text-white-300 leading-relaxed text-sm">
                                Real-time damage meters with detailed statistics, DPS calculations, and damage breakdowns for you and your party.
                            </p>
                        </div>

                        <div className="bg-gray-300 border-thin border-gray-50 rounded-lg p-6 hover:border-green-300 transition-all group">
                            <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/50 transition-colors">
                                <SparklesIcon className="w-6 h-6 text-green-0" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white-50">Abnormalities Tracking</h3>
                            <p className="text-white-300 leading-relaxed text-sm">
                                Monitor your active buffs, debuffs, and consumable timers to optimize your uptime and maximize effectiveness.
                            </p>
                        </div>

                        <div className="bg-gray-300 border-thin border-gray-50 rounded-lg p-6 hover:border-blue-300 transition-all group">
                            <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/50 transition-colors">
                                <DocumentChartBarIcon className="w-6 h-6 text-blue-0" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white-50">Quest Exports</h3>
                            <p className="text-white-300 leading-relaxed text-sm">
                                Track and export your completed quests to gain detailed insights on your hunts, analyze performance, and improve over time.
                            </p>
                        </div>

                        <div className="bg-gray-300 border-thin border-gray-50 rounded-lg p-6 hover:border-violet-300 transition-all group">
                            <div className="w-12 h-12 bg-violet-500/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-500/50 transition-colors">
                                <ChatBubbleLeftRightIcon className="w-6 h-6 text-violet-0" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white-50">Discord Rich Presence</h3>
                            <p className="text-white-300 leading-relaxed text-sm">
                                Show off your hunting progress to your friends with the built-in Discord integration.
                            </p>
                        </div>

                        <div className="bg-gray-300 border-thin border-gray-50 rounded-lg p-6 hover:border-yellow-300 transition-all group">
                            <div className="w-12 h-12 bg-yellow-500/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/50 transition-colors">
                                <SwatchIcon className="w-6 h-6 text-yellow-0" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white-50">Full Customization</h3>
                            <p className="text-white-300 leading-relaxed text-sm">
                                Personalize every aspect of your overlay with themes, custom positions, colors, and widget configurations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-24 bg-gray-400">
                <div className="max-w-6xl mx-auto px-6 md:px-40 text-center">
                    <h2 className="text-4xl font-bold mb-4 text-white-0">
                        Join the Community
                    </h2>
                    <p className="text-white-300 text-lg mb-12 max-w-2xl mx-auto">
                        Connect with thousands of hunters, share your setups, and contribute to making HunterPie even better.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-300 border-thin border-violet-500/30 rounded-lg p-8 hover:border-violet-300 transition-all">
                            <div className="w-14 h-14 bg-violet-500/30 rounded-lg flex items-center justify-center mx-auto mb-5">
                                <ChatBubbleLeftRightIcon className="w-7 h-7 text-violet-0" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-white-50">Discord</h3>
                            <p className="text-white-400 text-sm mb-6">Need technical support or just want to talk? Join our Discord server!</p>
                            <LinkButton href="https://discord.gg/5pdDq4Q"
                                        className="bg-violet-500 hover:bg-violet-400 px-5 py-2 rounded-md text-white-50 text-sm transition-colors">
                                Join Server
                            </LinkButton>
                        </div>

                        <div className="bg-gray-300 border-thin border-gray-50 rounded-lg p-8 hover:border-white-600 transition-all">
                            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-5">
                                <StarIcon className="w-7 h-7 text-white-100" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-white-50">GitHub</h3>
                            <p className="text-white-400 text-sm mb-6">Contribute to development, report bugs, and request features.</p>
                            <LinkButton href="https://github.com/HunterPie/HunterPie"
                                        className="bg-gray-100 hover:bg-gray-50 border-thin border-gray-0 px-5 py-2 rounded-md text-white-100 text-sm transition-colors">
                                View Repo
                            </LinkButton>
                        </div>

                        <div className="bg-gray-300 border-thin border-pink-500/30 rounded-lg p-8 hover:border-pink-300 transition-all">
                            <div className="w-14 h-14 bg-pink-500/30 rounded-lg flex items-center justify-center mx-auto mb-5">
                                <HeartIcon className="w-7 h-7 text-pink-0" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-white-50">Patreon</h3>
                            <p className="text-white-400 text-sm mb-6">Support development and help keep HunterPie free for everyone.</p>
                            <LinkButton href="https://www.patreon.com/HunterPie"
                                        className="bg-pink-500 hover:bg-pink-300 px-5 py-2 rounded-md text-white-50 text-sm transition-colors">
                                Support Us
                            </LinkButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 bg-gray-600 border-t-thin border-gray-50">
                <div className="max-w-6xl mx-auto px-6 md:px-40">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-2 mb-6 md:mb-0">
                            <Image src="/logo.svg"
                                   alt="HunterPie Logo"
                                   width="28"
                                   height="28"/>
                            <span className="text-lg font-medium text-white-100">Hunter<span className="font-light">Pie</span></span>
                        </div>
                        
                        <div className="flex gap-8 text-white-400 text-sm">
                            <LinkButton href="https://docs.hunterpie.com" className="hover:text-white-100 transition-colors">Documentation</LinkButton>
                            <LinkButton href="https://github.com/HunterPie/HunterPie" className="hover:text-white-100 transition-colors">GitHub</LinkButton>
                            <LinkButton href="https://discord.gg/5pdDq4Q" className="hover:text-white-100 transition-colors">Discord</LinkButton>
                            <LinkButton href="https://www.patreon.com/HunterPie" className="hover:text-white-100 transition-colors">Patreon</LinkButton>
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t-thin border-gray-50 text-center text-white-500 text-sm">
                        <p className="flex items-center justify-center gap-1">
                            &copy; 2026 HunterPie. Made with <HeartIcon className="w-4 h-4 text-pink-0 inline" /> by Haato.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    )
}
