import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useLogout = (onSuccess, onError) => {
  const { mutate, error, isLoading } = useMutation({
    mutationFn: () => {
      return logout();
    },
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (error) => {
      onError(error);
    },
  });

  const logout = async () => {
    const { data } = await axiosAuth.post("/auth/logout/");
    return data;
  };

  return { mutate, error, isLoading };
};

export default useLogout;
