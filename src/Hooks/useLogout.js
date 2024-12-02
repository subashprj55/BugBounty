import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useLogout = (onSuccess) => {
  const { mutate, error, isLoading } = useMutation({
    mutationFn: () => {
      return logout();
    },
    onSuccess: (data) => {
      onSuccess(data);
    },
  });

  const logout = async () => {
    const { data } = await axiosAuth.post("/auth/logout/");
    return data;
  };

  return { mutate, error, isLoading };
};

export default useLogout;
