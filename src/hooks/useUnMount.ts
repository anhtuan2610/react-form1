import { useEffect } from "react";

export default function useUnMount() {
    useEffect(() => {
        return () => {
            console.log("un mount");
        }
    }, [])
}