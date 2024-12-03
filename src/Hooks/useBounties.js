import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useBounties = () => {
  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (values) => {
      return getBounties(values);
    },
  });

  const getBounties = async () => {
    const { data } = await axiosAuth.get("/bounties/");
    return data;
  };

  return { mutate, data, error, isLoading };
};

export default useBounties;
