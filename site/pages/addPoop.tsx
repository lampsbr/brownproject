/**
 * let's try a 60/40 layout. Bigger area for poop type, smaller for datetime.
 * Layout can be a flex that alternates direction in lg screens
 */
export default function AddPoop() {
    return (
        <div className="w-full bg-tumbleweed rounded-full" >
            <div id="poopTypeSelector"></div>
            <div id="timestampSelector"></div>
        </div>
    );
}