import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useCreateBug = (onSuccess) => {
  const crateBounty = async ({
    expectedResult,
    id,
    reproduceSteps,
    uploadedFile,
  }) => {
    const { data } = await axiosAuth.post("/bugs/", {
      related_bounty: id,
      is_accepted: true,
      attachment: uploadedFile,
      guide: reproduceSteps,
      expected_result: expectedResult,
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
