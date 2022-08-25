import {useQuery, useQueryClient} from "react-query";
import axios from "axios";

export const useSpheroData = (heroId) => {

    const queryClent = useQueryClient()
    return useQuery(["sp-hero", heroId], () => {
        return axios.get(`http://localhost:4000/superheroes/${heroId}`)
    }, {
        initialData: () => {
            const hero = queryClent.getQueryData('sp-heroes').data.find(hero =>hero.id===parseInt(heroId))
            if (hero) {
                return { data: hero }
            } else {
                return undefined
            }
        }
    })
}