import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { validateUser } from "../util/validation ";
import TableSV from "./TableSV";
import { useDispatch, useSelector } from "react-redux";
import { getValueSV, updateSV } from "../redux/slice/sinhVienSlice";

const BaiTapFormik = () => {
  const { showError } = useSelector((state) => state.sinhVienSlice);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      maSV: "",
      hoTenSV: "",
      soDienThoaiSV: "",
      emailSV: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(getValueSV(values));
      resetForm();
    },
    validationSchema: validateUser,
  });
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setValues,
    resetForm,
  } = formik;
  return (
    <div>
      <h2 className="bg-gray-700 text-white px-3 py-3 text-2xl font-bold">
        Thông tin sinh viên
      </h2>
      <div>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            {/* Mã SV */}
            <div>
              <label
                htmlFor="maSV"
                className="block mb-2 text-gray-900 mt-1 text-xl font-medium"
              >
                Mã SV
              </label>
              <input
                type="text"
                name="maSV"
                id="maSV"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Vui lòng nhập mã sinh viên"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.maSV}
              />
              {errors.maSV && touched.maSV ? (
                <p className="text-red-500">{errors.maSV}</p>
              ) : null}
            </div>
            {/* Họ tên */}
            <div>
              <label
                htmlFor="hoTenSV"
                className="block mb-2 text-gray-900 mt-1 text-xl font-medium"
              >
                Họ Tên
              </label>
              <input
                type="text"
                name="hoTenSV"
                id="hoTenSV"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Vui lòng nhập họ tên sinh viên"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hoTenSV}
              />
              {errors.hoTenSV && touched.hoTenSV ? (
                <p className="text-red-500">{errors.hoTenSV}</p>
              ) : null}
            </div>
            {/* Số điện thoại */}
            <div>
              <label
                htmlFor="soDienThoaiSV"
                className="block mb-2 text-gray-900 mt-1 text-xl font-medium"
              >
                Số điện thoại
              </label>
              <input
                type="text"
                name="soDienThoaiSV"
                id="soDienThoaiSV"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Vui lòng nhập số điện thoại"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.soDienThoaiSV}
              />
              {errors.soDienThoaiSV && touched.soDienThoaiSV ? (
                <p className="text-red-500">{errors.soDienThoaiSV}</p>
              ) : null}
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="emailSV"
                className="block mb-2 text-gray-900 mt-1 text-xl font-medium"
              >
                Email
              </label>
              <input
                type="text"
                name="emailSV"
                id="emailSV"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Vui lòng nhập email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.emailSV}
              />
              {errors.emailSV && touched.emailSV ? (
                <p className="text-red-500">{errors.emailSV}</p>
              ) : null}
            </div>
            {/* Button */}
            <div>
              {/* Trùng mã SV */}
              <div
                id="daCoSV"
                style={{
                  display: "none",
                }}
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                role="alert"
              >
                <strong className="font-bold">{showError}!</strong>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    onClick={() => {
                      document.getElementById("daCoSV").style.display = "none";
                    }}
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
              {/* Thêm sinh viên */}
              <button
                id="btnThem"
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Thêm sinh viên
              </button>
              {/* Cập nhập sinh viên */}
              <button
                style={{
                  display: "none",
                }}
                type="button"
                onClick={() => {
                  dispatch(updateSV(values));
                  resetForm();
                  document.getElementById("btnCapNhap").style.display = "none";
                  document.getElementById("btnThem").style.display =
                    "inline-block";
                  document.getElementById("maSV").disabled = false;
                }}
                id="btnCapNhap"
                className="bg-green-600 text-white py-2 mt-1 px-4 rounded-md"
              >
                Cập nhập sinh viên
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {/* Table SV */}
        <TableSV setValues={setValues} />
      </div>
    </div>
  );
};

export default BaiTapFormik;
