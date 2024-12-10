import { useQuery } from "react-query";
import { axiosAuth } from "Utils/axios";

const useBugDetails = (id) => {
  const getBounties = async () => {
    const { data } = await axiosAuth.get(`/bugs/${id}/`);
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["bug", id],
    queryFn: getBounties,
    refetchOnWindowFocus: false,
  });

  return { data, error, isLoading };
};

export default useBugDetails;
