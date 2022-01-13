function AnchorLink({anchor, text, imageName, imageAlt}) {
    return (
        <>
            <li>
                <a
                    className="p-2 border-b-1 border-white flex items-center"
                    href={anchor}
                >
                    <img
                        className="h-6 w-6 mr-8 rounded-full object-cover text-white"
                        src={`/images/${imageName}`}
                        alt={imageAlt}
                    />
                    {text}
                </a>
            </li>
        </>
    );
}

export default AnchorLink;
