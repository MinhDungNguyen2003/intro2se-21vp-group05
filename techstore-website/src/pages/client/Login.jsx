import { Checkbox } from "@mui/material";
import React, { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authSlice";
import * as Yup from "yup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const initialValues = {
  email: "",
  password: "",
};

const loginValidation = Yup.object({
  email: Yup.string()
    .required("Email address is required.")
    .email("Please enter a valid email address."),
  password: Yup.string().required("Please enter a password"),
});

const Login = () => {
  const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: loginValidation,
    onSubmit: (values) => {
      values = { ...values, role: "user" };
      dispatch(login(values));
      // navigate(from, { replace: true });
    },
  });

  const authState = useSelector((state) => state.auth);
  const { user, isError, isSuccess, isLoading, message } = authState;
  useEffect(() => {
    if (isSuccess && user?.role === "user") {
      navigate("/");
    } else if (user?.role === undefined) {
      navigate("/login");
    } else if (isSuccess && user?.role !== "user") {
      navigate(-1);
    } else {
      navigate("/login");
    }
  }, [user, isError, isSuccess, isLoading]);

  const handleForgotPasswordClick = () => {
    navigate("/RestorePassword");
  };
  return (
    <div className="max-w-[700px] m-auto">
      <div className="py-[10px] flex w-full text-center">
        {/* <ArrowBackIcon
          className="justify-start !text-[30px] cursor-pointer"
          onClick={() => navigate("/")}
        /> */}
        <h1 className="m-auto text-[#4a4a4a] text-[22px] font-bold">
          Đăng nhập Techstore Member
        </h1>
      </div>
      <div>
        <div className="mt-5 text-center">
          <img
            src="/logo/small.png"
            alt=""
            className="w-[80px] h-[80px] m-auto rounded-xl"
          />
        </div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-5 mb-3">
              <input
                type="text"
                name="email"
                placeholder="Nhập số điện thoại/email"
                className="text-base text-[#222] w-full !border-b !border-[#e8e8e8] h-[40px] px-[15px] outline-none rounded"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mt-5 mb-3">
              <input
                type="password"
                name="password"
                placeholder="Nhập mật khẩu"
                className="text-base text-[#222] w-full !border-b !border-[#e8e8e8] h-[40px] px-[15px] outline-none rounded"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
              <div className="flex justify-end w-full mt-[15px]">
                <p
                  className="text-[#afafaf] text-[13px] cursor-pointer"
                  onClick={handleForgotPasswordClick}
                >
                  Quên mật khẩu?
                </p>
              </div>
            </div>

            <div className="flex justify-center py-5">
              <ReCAPTCHA sitekey={TEST_SITE_KEY} />
            </div>

            <button
              type="submit"
              className="outline-none bg-slate-500 text-white text-center text-sm py-[10px] w-full rounded-md font-semibold"
            >
              Đăng nhập
            </button>

            <div className="flex items-center w-full mt-5 h-[49px]">
              <hr className="h-[1px] w-full" />
              <p className="mx-2 whitespace-nowrap text-[#4a4a4a] text-base">
                hoặc đăng nhập bằng
              </p>
              <hr className="h-[1px] w-full" />
            </div>

            <div className="flex items-center justify-center gap-[30px] h-[55px]">
              <div className="flex items-center gap-[10px]">
                <img
                  src="https://account.cellphones.com.vn/_nuxt/img/image45.93ceca6.png"
                  alt=""
                  className="w-6 h-6"
                />
                <p>Google</p>
              </div>
              <div className="flex items-center gap-[10px]">
                <img
                  src="https://account.cellphones.com.vn/_nuxt/img/Logo-Zalo-Arc.a36365b.png"
                  alt=""
                  className="w-6 h-6"
                />
                <p>Zalo</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-[5px] my-5 text-sm">
              <p className="text-[#777]">Bạn chưa có tài khoản?</p>
              <Link to={"/register"} className="text-gray-600 font-semibold">
                Đăng ký ngay
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;