import { useQuery } from "react-query";
import { axiosAuth } from "Utils/axios";

const useHunterData = (id) => {
  const getHunterData = async () => {
    const { data } = await axiosAuth.get(`/hunters/${id}/profile/`);
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["hunterInfo"],
    queryFn: getHunterData,
    refetchOnWindowFocus: false,
  });

  return { data, error, isLoading };
};

export default useHunterData;
