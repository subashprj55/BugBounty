import { useQuery } from "react-query";
import { axiosAuth } from "Utils/axios";

const useUserProfile = () => {
  const getUserProfile = async () => {
    const { data } = await axiosAuth.get("/profile/");
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
    refetchOnWindowFocus: false,
  });

  return { data, error, isLoading };
};

export default useUserProfile;
