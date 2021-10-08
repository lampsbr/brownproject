import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useQuery } from "react-query";

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
        {!isLoading && (
                <table className="my-0 mx-auto w-10/12 md:w-6/12 lg:w-4/12 xxl:w-3/12 table-fixed" >
                    <thead className="justify-between">
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
                        {data.map(poo => <tr key={poo.id}>
                            <td>{poo.ts}</td>
                            <td>{poo.type}</td>
                        </tr>)}
                    </tbody>
                </table>
        )}
    </>);


}