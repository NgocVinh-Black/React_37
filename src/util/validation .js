import * as Yup from "yup";
export const validateUser = Yup.object({
  maSV: Yup.string().required("Vui lòng không bỏ trống"),
  hoTenSV: Yup.string().required("Vui lòng không bỏ trống"),
  soDienThoaiSV: Yup.string()
    .matches(
      /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
      "Vui lòng nhập đúng định dạng số điện thoại"
    )
    .required("Vui lòng không bỏ trống"),
  emailSV: Yup.string()
    .email("Vui lòng nhập đúng định dạng email")
    .required("Vui lòng không bỏ trống"),
});
