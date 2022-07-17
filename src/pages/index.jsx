import System from "../components/threeJS/System";

export default function Home() {
    return (
        <>

            <div
                className="h-[90vh] bg-black"
                style={{
                    backgroundImage: `url('https://ak.picdn.net/shutterstock/videos/494608/thumb/1.jpg?ip=x480')`,
                }}
            >
                <System/>
            </div>
        </>
    );
}
