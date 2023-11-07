'use client'

import {MHWBuilderComponent} from "@/app/builder/monster-hunter-world/MHWBuilderComponent";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Helm} from "@/core/game/gear/Helm";
import axios from "axios";
import {BackdropOverlay} from "@/components/overlay/BackdropOverlay";
import {Armor} from "@/core/game/gear/Armor";
import {BaseGear} from "@/core/game/gear/BaseGear";
import {Equipment} from "@/core/game/gear/Equipment";

const DATA = {
    helms: "https://raw.githubusercontent.com/TanukiSharp/MHWMasterDataUtils/master/MHWMasterDataUtils.Exporter/data/heads.json",
    armor: "https://raw.githubusercontent.com/TanukiSharp/MHWMasterDataUtils/master/MHWMasterDataUtils.Exporter/data/chests.json",
    arms: "https://raw.githubusercontent.com/TanukiSharp/MHWMasterDataUtils/master/MHWMasterDataUtils.Exporter/data/arms.json",
    waist: "https://raw.githubusercontent.com/TanukiSharp/MHWMasterDataUtils/master/MHWMasterDataUtils.Exporter/data/waists.json",
    legs: "https://raw.githubusercontent.com/TanukiSharp/MHWMasterDataUtils/master/MHWMasterDataUtils.Exporter/data/legs.json",
    charms: "https://raw.githubusercontent.com/TanukiSharp/MHWMasterDataUtils/master/MHWMasterDataUtils.Exporter/data/charms.json"
}

export default function MHWBuilderPage() {
    const [helmsData, setHelmsData] = useState<BaseGear[]>([])
    const [armorsData, setArmorsData] = useState<BaseGear[]>([])
    const [armsData, setArmsData] = useState<BaseGear[]>([])
    const [waistData, setWaistData] = useState<BaseGear[]>([])
    const [legsData, setLegsData] = useState<BaseGear[]>([])
    const [charmsData, setCharmsData] = useState<Equipment[]>([])
    const [downloadedDataCount, setDownloadedDataCount] = useState(0)

    useEffect(() => {
        const remoteData: [string, Dispatch<SetStateAction<any>>][] = [
            [DATA.helms, setHelmsData],
            [DATA.armor, setArmorsData],
            [DATA.arms, setArmsData],
            [DATA.waist, setWaistData],
            [DATA.legs, setLegsData],
            [DATA.charms, setCharmsData]
        ]

        remoteData.forEach(([dataUrl, setDataCallback]) => {
            axios.get(dataUrl)
                .then(res => {
                    setDataCallback(res.data)
                    setDownloadedDataCount(current => current + 1)
                })
                .catch(err => console.log(err))
        })
    }, []);

    return (
        <>
            <MHWBuilderComponent helms={helmsData}
                                 armors={armorsData}
                                 arms={armsData}
                                 waist={waistData}
                                 legs={legsData}
                                 charms={charmsData}/>

            <BackdropOverlay isVisible={downloadedDataCount < Object.keys(DATA).length}
                             onClick={() => {}}/>
        </>
    )
}