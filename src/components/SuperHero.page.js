import {useSpheroData} from "../hooks/useSpheroData";
import {useParams} from "react-router-dom";

export const SuperHero = () => {
    const {heroId} = useParams()
    const {isLoading, data, isError, error} = useSpheroData(heroId)
    return <h2>{data.data.id} - {data.data.name}</h2>
}