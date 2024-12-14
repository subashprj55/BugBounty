import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useDeleteBounty = (id, onSuccess) => {
  const { mutate, error, isLoading } = useMutation({
    mutationFn: () => {
      return deleteBounty();
    },
    onSuccess: (data) => {
      onSuccess(data);
    },
  });

  const deleteBounty = async () => {
    const { data } = await axiosAuth.delete(`/bounties/${id}`);
    return data;
  };

  return { mutate, error, isLoading };
};

export default useDeleteBounty;
