import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useNewPassword = (onSuccess) => {
  const changePassword = async (data) => {
    console.log(data);
    // const { data } = await axiosAuth.post("/auth/changePassword",{
    //   data
    // });
    return;
  };

  const { mutate, isLoading, error } = useMutation({
    mutationFn: (data) => changePassword(data),
    onSuccess: (data) => onSuccess(data),
  });

  return { mutate, isLoading, error };
};

export default useNewPassword;
