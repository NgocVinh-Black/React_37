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
              <p
                style={{
                  display: "none",
                }}
                className="text-red-500"
              >
                {showError}
              </p>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Thêm sinh viên
              </button>
              <button
                type="button"
                onClick={() => {
                  dispatch(updateSV(values));
                  resetForm();
                }}
                id="btnCapNhap"
                className="bg-green-600 text-white py-2 mt-1 px-4 rounded-md hidden"
              >
                Cập nhập sinh viên
              </button>
            </div>
          </div>
        </form>
        {/* Find */}
        <div className="mt-4">
          <label
            htmlFor="timKiemSV"
            className="mb-2 font-medium text-gray-900 text-xl"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              // name="timKiemSV"
              id="timKiemSV"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Tìm sinh viên"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* Table SV */}
        <TableSV setValues={setValues} />
      </div>
    </div>
  );
};

export default BaiTapFormik;
