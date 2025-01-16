import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useResetPassword = (onSuccess) => {
  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (values) => {
      return sendToken(values);
    },
    onSuccess: (data) => {
      onSuccess(data);
    },
  });

  const sendToken = async ({ email }) => {
    // replay with find email api
    // const { data } = await axiosAuth.post("/auth/sendToken", {
    //   email,
    // });

    // return data;
    return;
  };

  return { mutate, data, error, isLoading };
};

export default useResetPassword;
