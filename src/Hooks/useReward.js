import { useQuery } from "react-query";
import { axiosAuth } from "Utils/axios";

const useReward = (id) => {
  const getRewards = async () => {
    const { data } = await axiosAuth.get(`/rewards/summary/`);
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["bounties", id],
    queryFn: getRewards,
    refetchOnWindowFocus: false,
  });

  return { data, error, isLoading };
};

export default useReward;
