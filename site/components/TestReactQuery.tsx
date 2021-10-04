import { useEffect } from "react";
import { useQuery } from "react-query";

export default function TestReactQuery(){
    const {isLoading, data } = useQuery('test', async () => {
        const res = await fetch('http://localhost:3000')
        if(!res.ok){
            console.error(res);
            throw new Error('Network response not ok')
        }
        return res.json()
    });

    useEffect(() => {
        console.log('isLoading changed: ', isLoading)
    }, [isLoading])
    useEffect(() => {
        console.log('data changed: ', data)
    }, [data])
    return (
        <h3>{isLoading && 'loading'}{data && data.test}</h3>
    );
}