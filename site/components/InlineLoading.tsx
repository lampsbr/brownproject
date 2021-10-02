export default function InlineLoading() {
    return (
        <div className="transform translate-x-1/2 translate-y-1/2 ">
            <div style={{ borderTopColor: 'transparent' }} className="border-solid animate-spin rounded-full border-4 h-10 w-10 -m-5"></div>
        </div>
    );
}