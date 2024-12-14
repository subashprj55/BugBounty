import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useUpdateBug = (bugId, onSuccess) => {
  const updateBounty = async ({
    expectedResult,
    id,
    reproduceSteps,
    uploadedFile,
  }) => {
    const { data } = await axiosAuth.patch(`/bugs/${bugId}/`, {
      related_bounty: id,
      attachment: uploadedFile,
      guide: reproduceSteps,
      expected_result: expectedResult,
    });
    return data;
  };

  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (values) => {
      return updateBounty(values);
    },
    onSuccess: (data) => {
      onSuccess(data);
    },
  });

  return { mutate, data, error, isLoading };
};

export default useUpdateBug;
