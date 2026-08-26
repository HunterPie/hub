'use client'
import MHWBuilderComponent from "@/app/builder/monster-hunter-world/components/MHWBuilderComponent";
import {EquipmentAdapter} from "@/components/builder/adapter/EquipmentAdapter";
import {GetStaticProps} from "next";
import {container} from "tsyringe";
import {MHW_EQUIPMENT_ADAPTER, MHWBuilderModule} from "@/app/builder/monster-hunter-world/di/Config";
import {ModuleContext} from "@/app/di/component/ModuleContext";

export default function MHWBuilderContainer() {
    return (
        <>
            <ModuleContext module={MHWBuilderModule}/>
            <MHWBuilderComponent />
        </>
    )
}