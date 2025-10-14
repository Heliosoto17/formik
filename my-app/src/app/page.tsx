"use client";
import { Formik } from "formik";
import { HomeForm } from "./components/forms/homeForm";
import { useHomeInitialValues } from "./hooks/initialValues/useHomeInitialValues";

export default function Home() {
  const { homeInitialValues } = useHomeInitialValues();
  return (
    <Formik
      enableReinitialize
      initialValues={homeInitialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <div className="font-sans flex flex-col  min-h-screen p-8 gap-2  ">
          <h1>Un Ejemplo de FORMIK & YUP</h1>
          <HomeForm />
          <button type="button" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
      )}
    </Formik>
  );
}
