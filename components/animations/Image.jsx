function Image({image, legendText, additionalCSS}) {
    return (
        <>
            <div className={`px-8 mx-auto xl:py-0 relative ${additionalCSS}`}>
                <img src={`/images/${image}`} alt={legendText} className="h-full mx-auto"/>
                <p className="text-sm text-gray-600 text-center mt-2">{legendText}</p>
            </div>
        </>
    );
}

export default Image;
