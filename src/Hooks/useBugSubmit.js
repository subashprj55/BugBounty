import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useBugSubmit = (id, onSuccess) => {
  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (values) => {
      return bugSubmit(values);
    },
    onSuccess: (data) => {
      onSuccess(data);
    },
  });

  const bugSubmit = async (newData) => {
    const { data } = await axiosAuth.post(`/bugs/${id}/status`, {
      status: newData,
    });
    return data;
  };

  return { mutate, data, error, isLoading };
};

export default useBugSubmit;
