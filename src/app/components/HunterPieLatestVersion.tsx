'use client'

import React, {useEffect, useState} from "react";
import axios from "axios";

export default function HunterPieLatestVersion() {
    const [version, setVersion] = useState<string | undefined>(undefined)

    useEffect(() => {
        axios.get("https://api.hunterpie.com/v1/version")
            .then(res => setVersion(`v${res.data["latest_version"]}`))
    }, []);

    return (
        <div className="self-center border-thin px-2 py-1 rounded-md">
            <h3 className="text-white-400 text-xs">Latest</h3>
            {
                <h6 className="text-white-100 text-sm">{version ?? 'fetching...'}</h6>
            }
        </div>
    )
}