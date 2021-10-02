import InlineLoading from "../InlineLoading";

export default function UserMenuLoading() {

    return <li>
        <div className="w-48 h-16 bg-tumbleweed rounded-full flex items-center justify-center shadow-lg">
            <InlineLoading />
        </div>
    </li>;
}