function AnchorLink({anchor, text, imageName, imageAlt}) {
    return (
        <>
            <li className="w-full md:w-2/3">
                <a
                    className="flex items-center justify-between text-sm text-gray-500 bg-blue bg-opacity-50 px-2 rounded hover:bg-opacity-25"
                    href={anchor}
                >
                    <img
                        className="h-6 w-6 mr-6 m-1 object-fit text-white"
                        src={`/images/${imageName}`}
                        alt={imageAlt}
                    />
                    {text}
                    <svg className="w-4 h-4 ml-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
            </li>
        </>
    );
}

export default AnchorLink;
