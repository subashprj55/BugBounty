import { useQuery } from "react-query";
import { axiosAuth } from "Utils/axios";

const useBountyDetails = (id) => {
  const getBounties = async () => {
    const { data } = await axiosAuth.get(`/bounties/${id}`);
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["bounties", id],
    queryFn: getBounties,
    refetchOnWindowFocus: false,
  });

  return { data, error, isLoading };
};

export default useBountyDetails;
