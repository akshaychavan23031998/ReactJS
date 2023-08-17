import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    //check status

    const [OnlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    }, []);
    //return status
    return OnlineStatus();
}
export default useOnlineStatus;