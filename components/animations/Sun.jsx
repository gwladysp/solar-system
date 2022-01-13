function Sun({size}) {
    return (
        <>
           <div className="sun-glowing rounded-full"
                style={{
                    backgroundImage: `url("/images/sun.svg")`,
                    width: `${size}vw`,
                    height: `${size}vw`
                }}/>
        </>
    );
}

export default Sun;
