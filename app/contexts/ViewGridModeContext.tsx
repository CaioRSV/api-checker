"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type viewModeType = "onePerLine" | "manyPerLine";

interface ViewGridModeContextType {
    viewGridMode: viewModeType;
    setViewGridMode: React.Dispatch<React.SetStateAction<viewModeType>>;
};

const ViewGridModeContext = createContext<ViewGridModeContextType | undefined>(undefined);

export function ViewGridModeProvider({ children }: { children: ReactNode }) {
    const [viewGridMode, setViewGridMode] = useState<viewModeType>("onePerLine");

    return (
        <ViewGridModeContext.Provider value={{ viewGridMode, setViewGridMode }}>
            {children}
        </ViewGridModeContext.Provider>
    );
}

export function useViewGridModeContext() {
    const context = useContext(ViewGridModeContext);
    if (context === undefined) {
        throw new Error("useViewGridMode must be used within a ViewGridModeProvider");
    }
    return context;
}
