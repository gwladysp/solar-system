function AsteroidBelt({ belt }) {
  return (
    <>
      <div
    className="orbit asteroid-belt"
    style={{
        width: belt === "main" ? "60vw" : "120vw",
        height: belt === "main" ? "60vw" : "120vw",
        marginTop: belt === "main" ? "-30vw" : "-60vw",
        marginLeft: belt === "main" ? "-30vw" : "-60vw",
        animationDuration: "1000s",
        borderWidth: `0`,
        backgroundImage: `url("/images/asteroidBelt.svg")`,
        borderColor: `transparent`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`
    }}
    />
    </>
  );
}

export default AsteroidBelt;
