import {Module} from "@/app/di/Module";
import React from "react";

interface ModuleContextProps {
    module: Module
}

export const ModuleContext: React.FC<ModuleContextProps> = ({
    module
}) => {
    module.register()
    return <></>
}