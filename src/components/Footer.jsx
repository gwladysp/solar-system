import {useRouter} from "next/router";

function Footer() {
    // footer has no background in home page
    const router = useRouter();
    return (
        <>
            <div className={`${router.pathname !== "/" ? 'mt-24 w-full' : 'absolute bottom-0 border-none right-0'} border-t-2 border-blue py-4 px-8 flex justify-end items-center`}>
                <a href="https://github.com/gwladysp/solar-system" className="cursor-pointer" target="_blank">
                    <img src="/images/icon-github.png" alt="Github mark" className="opacity-25"/>
                </a>
            </div>
        </>
    );
}

export default Footer;
