import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useLogin = (onSuccess) => {
  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (values) => {
      return login(values);
    },
    onSuccess: (data) => {
      onSuccess(data);
    },
  });

  const login = async ({ email, password }) => {
    const { data } = await axiosAuth.post("/auth/login/", {
      email,
      password,
    });
    return data;
  };

  return { mutate, data, error, isLoading };
};

export default useLogin;
