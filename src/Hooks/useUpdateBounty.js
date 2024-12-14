import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useUpdateBounty = (id, onSuccess) => {
  const updateBounty = async ({
    bugTitle,
    description,
    expectedResult,
    uploadedFile,
    rewarded_amount,
    security,
    selectedDate,
  }) => {
    const date = new Date(selectedDate).toISOString();

    const { data } = await axiosAuth.patch(`/bounties/${id}`, {
      title: bugTitle,
      description,
      acceptance_criteria: expectedResult,
      expiry_date: date,
      attachments: uploadedFile,
      severity: security,
      rewarded_amount,
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

export default useUpdateBounty;
