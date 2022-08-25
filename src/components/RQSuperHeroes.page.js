import {useSuperHeros} from "../hooks/useSuperHeros";
import {Link} from "react-router-dom";


export const RQSuperHeroesPage = () => {
    const onSucsess = (data) => {
        console.log("onSucsess", data)
    }
    const onError = (error) => {
        console.log("onError", error)
    }
    const {isLoading, data, isError, error, isFetching, refetch} = useSuperHeros({
        onSuccess: onSucsess,
        onError: onError
    })
    if (isLoading || isFetching) {
        return <h2>loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (<>
        <h2>React Query Super Heroes Page</h2>
        <button onClick={refetch}>Click me!</button>
        {data && data.data.map(hero => {
            return <div key={hero.id}><Link to={`//rq-super-heroes/${hero.id}`}>{hero.name} </Link></div>
        })}
    </>)
}