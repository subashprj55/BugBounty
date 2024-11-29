import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useSignup = (onSuccess) => {
  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (values) => {
      return signUp(values);
    },
    onSuccess: (data) => {
      onSuccess(data);
    },
  });

  const signUp = async ({ email, password, name, role, industry, skills }) => {
    const { data } = await axiosAuth.post("/auth/register/", {
      email,
      password,
      name,
      role,
      industry,
      skills: [1],
    });
    return data;
  };

  return { mutate, data, error, isLoading };
};

export default useSignup;
