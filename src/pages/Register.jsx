import { Checkbox } from "@mui/material";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Register = () => {
  const navigate = useNavigate();
  const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  return (
    <div className="max-w-[700px] m-auto">
      <div className="py-[10px] flex w-full text-center">
        <ArrowBackIcon
          className="justify-start !text-[30px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h1 className="m-auto text-[#4a4a4a] text-[22px] font-bold">
          Đăng ký Techstore Member
        </h1>
      </div>
      <div>
        <div className="mt-5 text-center">
          <img
            src="https://account.cellphones.com.vn/_nuxt/img/Shipper_CPS3.0251fdd.png"
            alt=""
            className="w-[80px] h-[80px] m-auto"
          />
        </div>
        <div>
          <form
            action="
            "
          >
            <div className="mt-5 mb-3">
              <input
                type="
                    "
                placeholder="Nhập họ và tên"
                className="text-base text-[#222] w-full !border-b !border-[#e8e8e8] h-[40px] px-[15px] outline-none rounded"
              />
            </div>
            <div className="mt-5 mb-3">
              <input
                type="
                    "
                placeholder="Nhập email"
                className="text-base text-[#222] w-full !border-b !border-[#e8e8e8] h-[40px] px-[15px] outline-none rounded"
              />
              <p className="text-[#afafaf] text-[13px] italic pl-[15px]">
                (*) Hóa đơn VAT khi mua hàng sẽ được gửi qua email này
              </p>
            </div>
            <div className="mt-5 mb-3">
              <input
                type="
                    "
                placeholder="Nhập mật khẩu"
                className="text-base text-[#222] w-full !border-b !border-[#e8e8e8] h-[40px] px-[15px] outline-none rounded"
              />
              <p className="text-[#afafaf] text-[13px] italic pl-[15px]">
                (*) Mật khẩu phải nhiều hơn 8 ký tự, ít nhất 1 chữ thường 1 chữ
                in hoa, 1 chữ số, 1 ký tự đặc biệt
              </p>
            </div>
            <div className="mt-5 mb-3">
              <input
                type="
                    "
                placeholder="Nhập lại mật khẩu"
                className="text-base text-[#222] w-full !border-b !border-[#e8e8e8] h-[40px] px-[15px] outline-none rounded"
              />
            </div>
            <div className="mt-5 mb-3">
              <input
                type="
                    "
                placeholder="Nhập mã giới thiệu (nếu có)"
                className="text-base text-[#222] w-full !border-b !border-[#e8e8e8] h-[40px] px-[15px] outline-none rounded"
              />
            </div>
            <div>
              <Checkbox id="1" />
              <label htmlFor="1" className="text-[#777] text-[13px]">
                Tôi đồng ý với các điều khoản bảo mật cá nhân
              </label>
            </div>
            <div>
              <Checkbox id="2" />
              <label htmlFor="2" className="text-[#777] text-[13px]">
                Đăng ký nhận bản tin khuyến mãi qua email
              </label>
            </div>
            <div className="flex justify-center py-5">
              <ReCAPTCHA sitekey={TEST_SITE_KEY} />
            </div>

            <button className="outline-none bg-[#e0052b] text-white text-center text-sm py-[10px] w-full rounded-md font-semibold">
              Đăng ký
            </button>

            <div className="flex items-center w-full mt-5 h-[49px]">
              <hr className="h-[1px] w-full" />
              <p className="mx-2 whitespace-nowrap text-[#4a4a4a] text-base">
                hoặc đăng ký bằng
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
              <p className="text-[#777]">Bạn đã có tài khoản?</p>
              <Link to="/login" className="text-[#d70018] font-semibold">
                Đăng nhập ngay
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
