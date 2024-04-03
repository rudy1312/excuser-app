import Axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const [generatedExcuse, setGeneratedExcuse]=useState("");

    const fetchExcuse=(excuseType)=>{
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}`).then((res)=>{
            setGeneratedExcuse(res.data[0].excuse);
        });
    }

    const buttonStyle="w-20 rounded-xl h-14 my-2 mx-1 p-1 bg-amber-600 text-gray-700"

    useEffect(() => {
        fetchExcuse("");
    }, []);

    return (
        <div className="App bg-amber-400 text-xl text-amber-700 w-screen h-screen flex justify-center">
            <div>
                <h1 className="text-4xl text-center">Generate an Excuse</h1>

                <div className="Buttons flex justify-center items-center">

                    <button className={buttonStyle}
                            onClick={() => fetchExcuse("family")}>
                        Family
                    </button>
                    <button className={buttonStyle}
                            onClick={() => fetchExcuse("party")}>
                        Party
                    </button>
                    <button className={buttonStyle}
                            onClick={() => fetchExcuse("office")}>
                        Office
                    </button>

                </div>

                <p className="text-center my-2 text-pink-600 mx-1">{generatedExcuse}</p>

            </div>

        </div>
    );
}

export default App;