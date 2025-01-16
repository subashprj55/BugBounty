import BugBox from "Components/BugBox";
import BugSnackbar from "Components/BugSnackbar";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import BugLoader from "Components/BugLoader";
import { useState } from "react";

import {
  StyledBox,
  StyledButtonStack,
  StyledErrorMessage,
  StyledForm,
  StyledInputBox,
  StyledInputField,
  StyledLoginBox,
  StyledLoginButton,
  StyledLoginStack,
  StyledLoginTypography,
  // StyledBoxModel,
  // StyledButton,
  // StyledButtonBox,
  // StyledContactMailIcon,
  // StyledModel,
  // StyledModelBodyBox,
  // StyledModelBox,
  // StyledOTPInput,
  // StyledOTPInputContainer,
  StyledTypography,
  StyledDescriptionBox,
} from "./style";
// import useSendOpt from "Hooks/useSendOtp";
import useSearchEmail from "Hooks/useResetPassword";

const BugForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userEmail, setUserEmail] = useState(null);
  // const [isOpenPopupModule, setIsOpenPopupModule] = useState(false);
  const { mutate, isLoading, error, data } = useSearchEmail(() => {
    // setIsOpenPopupModule(true);
  });

  const onSubmit = (data) => {
    setUserEmail(data.email);
    mutate(data);
  };

  return (
    <>
      {isLoading && <BugLoader />}
      {error && <BugSnackbar status="error" snackbarMessage="Invalid email" />}
      {data && <BugSnackbar snackbarMessage={data?.message} />}
      <StyledLoginStack>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <BugBox>
            <StyledLoginBox>
              <StyledTypography variant="h1" className="center">
                Forgot Password
              </StyledTypography>
              <StyledDescriptionBox>
                <StyledTypography variant="h6" className="center">
                  Remember your password?
                </StyledTypography>
                <Link to="/login">Login here</Link>
              </StyledDescriptionBox>

              <StyledInputBox>
                <StyledBox>
                  <StyledLoginTypography variant="h3" className="space">
                    Email Address
                  </StyledLoginTypography>
                  <StyledInputField
                    id="userEmail"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <StyledErrorMessage>
                      {errors.email.message}
                    </StyledErrorMessage>
                  )}
                </StyledBox>
              </StyledInputBox>

              <StyledButtonStack>
                <StyledLoginButton
                  disabled={isLoading ? true : false}
                  type="submit"
                  variant="contained"
                >
                  Forgot Password
                </StyledLoginButton>
              </StyledButtonStack>
            </StyledLoginBox>
          </BugBox>
        </StyledForm>
      </StyledLoginStack>
      {/* <BugPopupWindow
        popUpModel={isOpenPopupModule}
        setPopUpModel={setIsOpenPopupModule}
        userEmail={userEmail}
      /> */}
    </>
  );
};

export default BugForgotPassword;

// const BugPopupWindow = ({ popUpModel, setPopUpModel, userEmail }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const navigate = useNavigate();

//   const handleChange = (e, index) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value) && value.length <= 1) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       // Automatically focus on the next input field
//       if (value && index < otp.length - 1) {
//         const nextInput = document.getElementById(`otp-${index + 1}`);
//         if (nextInput) nextInput.focus();
//       }
//     }
//   };

//   const {
//     mutate: otpMutation,
//     isLoading,
//     error,
//   } = useSendOpt((data) => {
//     navigate("/");
//   });

//   const handleClose = () => {
//     setOtp(["", "", "", "", "", ""]);
//     setPopUpModel(false);
//   };

//   const handleSubmit = () => {
//     const newOTP = otp.join("");
//     navigate("/newPassword");
//     // otpMutation({ email: userEmail, otp: newOTP });
//   };

//   return (
//     <StyledBoxModel>
//       {isLoading && <BugLoader />}
//       {error && (
//         <BugSnackbar
//           snackbarMessage={"Something went wrong. Please confirm OTP code"}
//           status="error"
//         />
//       )}
//       <StyledModel open={popUpModel}>
//         <StyledModelBox>
//           <StyledButton onClick={handleClose} className="closeButton" />

//           <StyledModelBodyBox>
//             <StyledContactMailIcon />
//             <StyledTypography variant="h1">
//               Please check your email
//             </StyledTypography>
//             <StyledTypography className="color-gray" variant="h6">
//               We've send code to {userEmail}
//             </StyledTypography>

//             <StyledOTPInputContainer>
//               {otp.map((digit, index) => (
//                 <StyledOTPInput
//                   key={index}
//                   id={`otp-${index}`}
//                   value={digit}
//                   onChange={(e) => handleChange(e, index)}
//                   variant="outlined"
//                   inputProps={{
//                     maxLength: 1,
//                   }}
//                 />
//               ))}
//             </StyledOTPInputContainer>
//           </StyledModelBodyBox>

//           <StyledButtonBox>
//             <StyledButton
//               disabled={isLoading ? true : false}
//               variant="outlined"
//               onClick={handleClose}
//             >
//               cancel
//             </StyledButton>
//             <StyledButton
//               disabled={isLoading ? true : false}
//               variant="contained"
//               onClick={handleSubmit}
//             >
//               Confirm OTP
//             </StyledButton>
//           </StyledButtonBox>
//         </StyledModelBox>
//       </StyledModel>
//     </StyledBoxModel>
//   );
// };
