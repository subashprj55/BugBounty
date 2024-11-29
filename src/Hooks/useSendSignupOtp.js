import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useSendSignupOpt = (onSuccess) => {
  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (values) => {
      return signUpOtp(values);
    },
    onSuccess: (data) => {
      onSuccess(data);
    },
  });

  const signUpOtp = async ({ email, otp }) => {
    const { data } = await axiosAuth.post("/auth/verify-otp/", {
      email,
      otp,
    });

    return data;
  };

  return { mutate, data, error, isLoading };
};

export default useSendSignupOpt;
