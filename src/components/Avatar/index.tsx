import React from 'react';

type TAvatar = {
    styles?: string,
    children: React.ReactNode,
}

export const Avatar = ({styles, children}: TAvatar) => {
    return (
        <div className={`rounded-full w-[140px] h-[140px] bg-lightBlue flex justify-center items-center ${styles}`}>
            {children}
        </div>
    );
};
