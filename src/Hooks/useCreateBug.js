import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useCreateBug = (onSuccess) => {
  const crateBounty = async ({
    bugTitle,
    description,
    expectedResult,
    uploadedFile,
    title,
    reproduceSteps,
  }) => {
    const { data } = await axiosAuth.post("/bugs/", {
      title: bugTitle,
      description: description,
      guide: reproduceSteps,
      attachment: uploadedFile,
      related_bounty: title,
    });
    return data;
  };

  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (values) => {
      return crateBounty(values);
    },
    onSuccess: (data) => {
      onSuccess(data);
    },
  });

  return { mutate, data, error, isLoading };
};

export default useCreateBug;
