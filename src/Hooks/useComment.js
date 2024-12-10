import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useComment = (id) => {
  const login = async (text) => {
    const { data } = await axiosAuth.post(`/bugs/${id}/comments`, {
      text,
    });
    return data;
  };

  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (values) => {
      return login(values);
    },
  });

  return { mutate, data, error, isLoading };
};

export default useComment;
