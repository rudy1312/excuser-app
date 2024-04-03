function App() {

    const buttonStyle="w-20 rounded-xl h-14 my-2 mx-1 p-1 bg-amber-600 text-gray-700"

    return (
        <div className="App bg-amber-400 text-xl text-amber-700 w-screen h-screen flex justify-center">
            <div>
                <h1 className="text-4xl text-center">Generate an Excuse</h1>

                <div className="Buttons flex justify-center items-center">

                    <button className={buttonStyle}>
                        Family
                    </button>
                    <button className={buttonStyle}>
                        Party
                    </button>
                    <button className={buttonStyle}>
                        Office
                    </button>

                </div>

                <p className="text-center my-2 text-pink-600 mx-1">EXAMPLE EXCUSE</p>

            </div>

        </div>
    );
}

export default App;