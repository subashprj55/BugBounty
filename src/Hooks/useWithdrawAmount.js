import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useWithdrawAmount = (onSuccess) => {
  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (values) => {
      return withdrawAmount(values);
    },
    onSuccess: (data) => {
      onSuccess(data);
    },
  });

  const withdrawAmount = async (amount) => {
    const { data } = await axiosAuth.post(`withdraw/`, {
      amount,
    });
    return data;
  };

  return { mutate, data, error, isLoading };
};

export default useWithdrawAmount;
