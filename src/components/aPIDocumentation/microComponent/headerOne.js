
'use client'
const HeaderOne = ({children, className}) => {
    return (
        <h2 className={`ibm-plex-font text-[16px] lg:text-2xl font-bold  ${className}`}>{children}</h2>
    );
};

export default HeaderOne;