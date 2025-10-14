import { HomeInitialValues } from "@/app/types/forms/homeInitialValues";
import { useFormikContext } from "formik";

export const HomeForm = () => {
  const { values, setFieldValue } = useFormikContext<HomeInitialValues>();
  return (
    <>
      <input
        value={values.name}
        name="name"
        onChange={(e) => setFieldValue("name", e.target.value)}
        className="border-solid border-black border-1 p-4"
        type="text"
        placeholder="Enter your name"
      />
      <input
        value={values.lastName}
        name="lastName"
        onChange={(e) => setFieldValue("lastName", e.target.value)}
        className="border-solid border-black border-1 p-4"
        type="text"
        placeholder="Enter your last name"
      />
      <input
        value={values.address}
        name="address"
        onChange={(e) => setFieldValue("address", e.target.value)}
        className="border-solid border-black border-1 p-4"
        type="text"
        placeholder="Enter your address"
      />
      <input
        value={values.city}
        name="city"
        onChange={(e) => setFieldValue("city", e.target.value)}
        className="border-solid border-black border-1 p-4"
        type="text"
        placeholder="Enter your city"
      />
      <input
        value={values.city}
        name="city"
        onChange={(e) => setFieldValue("city", e.target.value)}
        className="border-solid border-black border-1 p-4"
        type="text"
        placeholder="Enter your city"
      />
      <input
        value={values.name}
        name="name"
        onChange={(e) => setFieldValue("name", e.target.value)}
        className="border-solid border-black border-1 p-4"
        type="text"
        placeholder="Enter your name"
      />
      <div className="flex gap-2  items-center">
        <button
          className="  p-2 border-black border-solid border-1"
          onClick={() => setFieldValue("age", values.age + 1)}
        >
          Increment
        </button>
        <p>Age: {values.age}</p>
        <button
          className="  p-2 border-black border-solid  border-1"
          onClick={() => setFieldValue("age", values.age - 1)}
        >
          Decrement
        </button>
      </div>
    </>
  );
};
