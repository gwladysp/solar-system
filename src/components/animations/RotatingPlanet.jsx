function RotatingPlanet({planet}) {
    const bgImage = '/images/uranus.svg';
    return (
        <>
            <div>
                <div className="planet" style={{ backgroundImage: `url(${bgImage})` }}>
                    <div className="clouds"/>
                </div>
            </div>
        </>
    );
}

export default RotatingPlanet;
