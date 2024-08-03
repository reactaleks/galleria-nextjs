interface PropTypes {
    title: string | undefined;
    artist: string | undefined;
}

export default function SlideShow({title, artist}: PropTypes) {
    return (
        <div className="flex">
            <div>
                <div>{title}</div>
                <div>{artist}</div>
            </div>

            <div className="flex">
            <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fillRule="evenodd"><path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" strokeWidth="2"/><path fill="#D8D8D8" d="M.986.5h-1v22.775h1z"/></g></svg>

            <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fillRule="evenodd"><path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" strokeWidth="2"/><path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z"/></g></svg>
            </div>
        
        </div>
    )
}