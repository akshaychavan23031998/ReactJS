import { useEffect, useState } from "react";

const useResMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    //fetch data
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await json.data();
        setResInfo(json);
    }
    return resInfo;
};
export default useResMenu;