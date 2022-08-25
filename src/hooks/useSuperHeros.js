import {useQuery} from "react-query";
import axios from "axios";

export const useSuperHeros = ({onSuccess, onError}) => useQuery("sp-heroes", () => {
    return axios.get('http://localhost:4000/superheroes')
}, {
    // cacheTime: 3000 => thời gian lưu trữ bộ nhớ cache default 5 phút
    // staleTime: 30000 => thowfi gian cũ  defautl: 0
    // refetchOnMount:false => ngăn tìm nạp lại ở mount
    // refetchOnWindowFocus :true => tìm nạp trên cửa sổ
    // refetchInterval: 2000 ti nạp lại dữ liệu liên tục theo mốc thời gian nhất ffinhj
    // refetchIntervalInBackground: true ti trong nền
    enabled: false,//vô hiệu hoá tìm nạp
    onSuccess, onError
    // select: (data) => data.data.map(h => h.name) // đingj danjg laị data
})
