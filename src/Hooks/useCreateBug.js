import { useMutation } from "react-query";
import { axiosAuth } from "Utils/axios";

const useCreateBug = (onSuccess) => {
  const crateBounty = async ({
    expectedResult,
    id,
    reproduceSteps,
    uploadedFile,
  }) => {
    const form = new FormData();
    form.append("related_bounty", id);
    form.append("attachment", uploadedFile);
    form.append("guide", reproduceSteps);
    form.append("expected_result", expectedResult);

    const { data } = await axiosAuth.post("/bugs/", form, {
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

export default useCreateBug;
