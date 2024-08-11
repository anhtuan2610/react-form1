import { useForm } from "react-hook-form";

type TFormState = {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  parentFirstName: string;
  parentLastName: string;
  emailAddress: string;
  pinCode: string;
  country: string;
  timeZone: string;
  phoneNumber: string;
};

export default function ValidateForm() {
  const defaultValues = {
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    parentFirstName: "",
    parentLastName: "",
    emailAddress: "",
    pinCode: "",
    country: "",
    timeZone: "",
    phoneNumber: "",
  };

  const Regex = {
    firstName: /^[a-z]{2,}$/,
    lastName: /^[a-z]{2,}$/,
    parentFirstName: /^[a-z]{2,}$/,
    parentLastName: /^[a-z]{2,}$/,
    emailAddress: /^\S+@\S+\.\S+$/,
    pinCode: /^.{6,}$/,
    phoneNumber: /^\d{8,12}$/,
  };

  // sử dụng register cho các field để đăng ký xây nhà (viết vào input)
  // các field được đăng ký thì sẽ có thể sử dụng các hàm có sẵn của register

  // sử dụng watch để xử lý sự kiện onchange

  // sử dụng formState để quản lý form (validate này kia)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<TFormState>({
    defaultValues,
  });

  // console.log({
  //     isDirty: formState.isDirty // trả về 1 boolean , true khi form được thay đổi lần đầu tiên => ứng dụng trong việc disable nut submit
  // });

  const onSubmit = (values: TFormState) => {
    const fields = Object.keys(values) as Array<keyof TFormState>;
    let isSuccess = true;

    fields.forEach((field) => {
      if (!values[field]) {
        setError(field, { message: `${field} can't empty` });
        isSuccess = false;
      }
    });

    fields.forEach((field) => {
      const regex = Regex[field as keyof typeof Regex]; // ép kiểu của field sang kiểu của Regex
      const fieldValue = values[field];

      if (fieldValue && regex && !regex.test(fieldValue)) {
        setError(field, { message: `${field} is not valid` });
        isSuccess = false;
      }
    });
      
    if (isSuccess) {
      alert("Register Success");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff]">
      <div className="max-w-[71vw] min-h-[120vh] mx-auto border border-blue-500">
        <div className="p-[30px] font-sans">
          <div className="flex justify-between items-center">
            <div className="text-[23px] font-bold">Simple Plan</div>
            <div className="flex gap-[5px]">
              Already a member?
              <p className="font-bold text-blue-500">Login</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="py-[45px] flex flex-col items-center gap-[10px]">
              <div className="text-[25px] font-extrabold">
                Let's get you started
              </div>
              <div className="text-[#aa7f7f]">
                Enter the details to get going
              </div>
            </div>
            <div className="flex gap-[15px]">
              <div className="flex items-center gap-[15px]">
                <div className="border-2 border-blueviolet rounded-full w-[25px] h-[25px] flex items-center justify-center font-bold text-blueviolet">
                  1
                </div>
                <div className="font-bold text-blueviolet">General Details</div>
                <div className="w-[90px] h-[2px] bg-[#d1afaf]"></div>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="border-2 border-gray-400 rounded-full w-[25px] h-[25px] flex items-center justify-center font-bold">
                  2
                </div>
                <div className="text-gray-400">Event Details</div>
                <div className="w-[90px] h-[2px] bg-[#d1afaf]"></div>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="border-2 border-gray-400 rounded-full w-[25px] h-[25px] flex items-center justify-center font-bold">
                  3
                </div>
                <div className="text-gray-400">Pricing and Submit</div>
              </div>
            </div>

            {/* ---------------------------------- */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="form"
              className="flex flex-col items-center pt-[45px]"
            >
              <div className="flex flex-wrap justify-center gap-[40px] max-w-[60%]">
                <div className="flex flex-col gap-[5px]">
                  <label>First Name*</label>
                  <input
                    id="firstName"
                    className="w-[330px] h-[40px] border border-gray-300 rounded-[6px] px-[12px] py-[8px] box-border"
                    type="text"
                    placeholder="Enter your First Name"
                    {...register("firstName")}
                  />
                  <span id="firstName-error" className="text-red-500">
                    {errors.firstName?.message || ""}
                  </span>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label>Last Name</label>
                  <input
                    id="lastName"
                    className="w-[330px] h-[40px] border border-gray-300 rounded-[6px] px-[12px] py-[8px] box-border"
                    type="text"
                    placeholder="Enter your Last Name"
                    {...register("lastName")}
                  />
                  <span id="lastName-error" className="text-red-500">
                    {errors.lastName?.message || ""}
                  </span>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label>Gender*</label>
                  <select
                    id="gender"
                    className="w-[330px] h-[40px] border border-gray-300 rounded-[6px] px-[12px] py-[8px] box-border"
                    {...register("gender")}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <span id="gender-error" className="text-red-500">
                    {errors.gender?.message || ""}
                  </span>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label>Date Of Birth*</label>
                  <input
                    id="dob"
                    type="date"
                    className="w-[330px] h-[40px] border border-gray-300 rounded-[6px] px-[12px] py-[8px] box-border"
                    {...register("dob")}
                  />
                  <span id="dob-error" className="text-red-500">
                    {errors.dob?.message || ""}
                  </span>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label>Mother/Father's First Name*</label>
                  <input
                    id="parentFirstName"
                    type="text"
                    placeholder="Enter First Name"
                    className="w-[330px] h-[40px] border border-gray-300 rounded-[6px] px-[12px] py-[8px] box-border"
                    {...register("parentFirstName")}
                  />
                  <span id="parentFirstName-error" className="text-red-500">
                    {errors.parentFirstName?.message || ""}
                  </span>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label>Last Name</label>
                  <input
                    id="parentLastName"
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-[330px] h-[40px] border border-gray-300 rounded-[6px] px-[12px] py-[8px] box-border"
                    {...register("parentLastName")}
                  />
                  <span id="parentLastName-error" className="text-red-500">
                    {errors.parentLastName?.message || ""}
                  </span>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label>Email Address*</label>
                  <input
                    id="emailAddress"
                    type="text"
                    placeholder="Enter your Email Address"
                    className="w-[330px] h-[40px] border border-gray-300 rounded-[6px] px-[12px] py-[8px] box-border"
                    {...register("emailAddress")}
                  />
                  <span id="emailAddress-error" className="text-red-500">
                    {errors.emailAddress?.message || ""}
                  </span>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label>Pin Code*</label>
                  <input
                    id="pinCode"
                    type="text"
                    placeholder="Enter your area's Pin Code"
                    className="w-[330px] h-[40px] border border-gray-300 rounded-[6px] px-[12px] py-[8px] box-border"
                    {...register("pinCode")}
                  />
                  <span id="pinCode-error" className="text-red-500">
                    {errors.pinCode?.message || ""}
                  </span>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label>Country*</label>
                  <select
                    id="country"
                    className="w-[330px] h-[40px] border border-gray-300 rounded-[6px] px-[12px] py-[8px] box-border"
                    {...register("country")}
                  >
                    <option value="">Select country</option>
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                    <option value="VN">VN</option>
                  </select>
                  <span id="country-error" className="text-red-500">
                    {errors.country?.message || ""}
                  </span>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label>Time Zone</label>
                  <input
                    id="timeZone"
                    type="text"
                    placeholder=""
                    className="w-[330px] h-[40px] border border-gray-300 rounded-[6px] px-[12px] py-[8px] box-border"
                    {...register("timeZone")}
                  />
                  <span id="timezone-error" className="text-red-500">
                    {errors.timeZone?.message || ""}
                  </span>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label>Phone Number (include country code)*</label>
                  <input
                    id="phoneNumber"
                    type="text"
                    placeholder=""
                    className="w-[330px] h-[40px] border border-gray-300 rounded-[6px] px-[12px] py-[8px] box-border"
                    {...register("phoneNumber")}
                  />
                  <span id="phoneNumber-error" className="text-red-500">
                    {errors.phoneNumber?.message || ""}
                  </span>
                </div>
              </div>
              <div className="pt-[30px]">
                <button
                  type="submit"
                  className="w-[90px] h-[40px] bg-[#ac25ac] text-white rounded-[8px]"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
