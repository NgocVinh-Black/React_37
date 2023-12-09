import React from "react";
import { useSelector } from "react-redux";

const TableSV = () => {
  const { arrSinhVien } = useSelector((state) => {
    return state.sinhVienSlice;
  });
  return (
    <div className="mt-5">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs uppercase bg-gray-700 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Mã sinh viên
              </th>
              <th scope="col" className="px-6 py-3">
                Tên sinh viên
              </th>
              <th scope="col" className="px-6 py-3">
                Số điện thoại
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {arrSinhVien.map((item, index) => {
              return (
                <tr key={index} className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.maSV}
                  </th>
                  <td className="px-6 py-4">{item.hoTenSV}</td>
                  <td className="px-6 py-4">{item.soDienThoaiSV}</td>
                  <td className="px-6 py-4">{item.emailSV}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSV;
