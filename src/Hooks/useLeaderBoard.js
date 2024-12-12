import { useQuery } from "react-query";
import { axiosAuth } from "Utils/axios";

const useLeaderBoard = () => {
  const getLeaderBoard = async () => {
    const { data } = await axiosAuth.get("/leaderboard/");
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["leaderBoard"],
    queryFn: getLeaderBoard,
    refetchOnWindowFocus: false,
  });

  return { data, error, isLoading };
};

export default useLeaderBoard;
