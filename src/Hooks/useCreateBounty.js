import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useCreateBounty = (onSuccess) => {
  const crateBounty = async ({
    bugTitle,
    description,
    expectedResult,
    fileUpload,
    reproduceSteps,
    rewarded_amount,
    security,
    selectedDate,
  }) => {
    const date = new Date(selectedDate).toISOString();

    const { data } = await axiosAuth.post("/bounties/", {
      title: bugTitle,
      description,
      step_to_reproduce: reproduceSteps,
      acceptance_criteria: expectedResult,
      expiry_date: date,
      attachments: fileUpload[0],
      severity: security,
      rewarded_amount,
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

export default useCreateBounty;
