import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useQuery } from "react-query";
import { format } from 'date-fns';
import PoopColor from "../PoopColor";

export default function RecentPoops() {
    const [recentData, setRecentData] = useState();
    const {
        user,
        getAccessTokenSilently,
    } = useAuth0();

    const { isLoading, data, error, isRefetching } = useQuery(['recentPoops'], async () => {
        const res = await fetch('http://localhost:7000/poop/recent', {
            headers: new Headers({
                'Authorization': 'Bearer ' + (await getAccessTokenSilently()),
            })
        })
        if (!res.ok) {
            console.error(res);
            throw new Error('Network response not ok')
        }
        const dados = await res.json();
        console.log(dados);
        return dados;
    });

    return (<>
        {isLoading && <span>loading</span>}
        {!isLoading && !error && (
                <table className="my-0 mx-auto w-10/12 md:w-6/12 lg:w-4/12 xxl:w-3/12 table-fixed" >
                    <thead className="justify-between">
                        <tr className="bg-tumbleweed">
                            <th colSpan={2}><span className="text-honeydew">Recent data</span></th>
                        </tr>
                        <tr className="bg-tumbleweed">
                            <th className="w-1/2">
                                <span className="text-honeydew">Date</span>
                            </th>
                            <th className="w-1/2">
                                <span className="text-honeydew">Type</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {data.map((poo, index) => <tr key={poo.id} className="border-b-0">
                            <td>{format(new Date(poo.ts), 'yyyy-MM-dd')}</td>
                            <td className="h-4 p-0" >
                                {poo.type}
                                <PoopColor types={data.map(p => p.type)} index={index} />
                                </td>
                        </tr>)}
                    </tbody>
                </table>
        )}
        {!isLoading && error && <span>error fetching recent poops</span>}
    </>);


}