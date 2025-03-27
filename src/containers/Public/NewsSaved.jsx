import { useEffect } from "react";
import ItemRental from "../../components/ItemRental";

function NewSaved() {

    return ( <div className="w-5xl mx-auto max-w-[100%] my-4">
        <h2 className="text-[20px] font-medium">Tin đã lưu</h2>
        <div>
            <ItemRental />
        </div>
    </div> );
}

export default NewSaved;    