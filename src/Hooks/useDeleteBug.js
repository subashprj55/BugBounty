import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useDeleteBug = (id, onSuccess) => {
  const { mutate, error, isLoading } = useMutation({
    mutationFn: () => {
      return deleteBug();
    },
    onSuccess: (data) => {
      onSuccess(data);
    },
  });

  const deleteBug = async () => {
    const { data } = await axiosAuth.delete(`/bugs/${id}/`);
    return data;
  };

  return { mutate, error, isLoading };
};

export default useDeleteBug;
