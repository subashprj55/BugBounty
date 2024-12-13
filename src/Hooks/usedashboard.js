import { useQuery } from "react-query";
import { axiosAuth } from "Utils/axios";

const useDashboard = () => {
  const getDashboardData = async () => {
    const { data } = await axiosAuth.get("/dashboard/");
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboardData,
    refetchOnWindowFocus: false,
  });

  return { data, error, isLoading };
};

export default useDashboard;
