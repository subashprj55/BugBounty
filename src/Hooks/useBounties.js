import { useQuery } from "react-query";
import { axiosAuth } from "Utils/axios";

const useBounties = () => {
  const getBounties = async () => {
    const { data } = await axiosAuth.get("/bounties/");
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["bounties"],
    queryFn: getBounties,
  });

  return { data, error, isLoading };
};

export default useBounties;
