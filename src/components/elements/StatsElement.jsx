function StatsElement(props) {
    const { element } = props;
    return (
        <>
            <div className="px-4 py-5 sm:p-6 bg-gray-400">
                <dt className="text-base font-normal text-gray-200">
                    <span className="planet-info-title block">{element.title}</span>
                </dt>
                <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                    <div className="flex items-baseline text-2xl font-semibold text-dark-blue">
                        {element.value} {element.sup ? <sup>{element.sup}</sup> : "" } { " " + element.unity}
                        {(element.conversion && element.conversion_unity) ? " (" + element.conversion + " " + element.conversion_unity + ")" : ""}
                    </div>
                </dd>
            </div>
        </>
    );
}

export default StatsElement;
