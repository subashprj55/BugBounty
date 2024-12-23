import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useCreateBounty = (onSuccess) => {
  const crateBounty = async ({
    bugTitle,
    description,
    expectedResult,
    uploadedFile,
    rewarded_amount,
    security,
    selectedDate,
  }) => {
    const date = new Date(selectedDate).toISOString();

    const form = new FormData();
    form.append("attachments", uploadedFile);
    form.append("title", bugTitle);
    form.append("description", description);
    form.append("acceptance_criteria", expectedResult);
    form.append("expiry_date", date);
    form.append("severity", security);
    form.append("rewarded_amount", rewarded_amount);

    const { data } = await axiosAuth.post("/bounties/", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
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
