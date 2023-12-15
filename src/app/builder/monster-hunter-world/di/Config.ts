import {container} from "tsyringe";
import {MHWEquipmentAdapter} from "@/app/builder/monster-hunter-world/adapter/MHWEquipmentAdapter";
import {Module} from "@/app/di/Module";

export const MHW_DATA_REPOSITORY: string = "mhw.repository.data"
export const MHW_LOCALIZATION_REPOSITORY: string = "mhw.repository.localization"
export const MHW_API_BASE_URL: string = "mhw.api.url"
export const MHW_EQUIPMENT_ADAPTER: string = "mhw.adapter.equipment"

export const MHWBuilderModule: Module = {
    register() {
        container.register(MHW_EQUIPMENT_ADAPTER, {
            useClass: MHWEquipmentAdapter
        })
    }
}