import { HomeInitialValues } from "@/types/homeInitialValues";

export const useHomeInitialValues = (data?: HomeInitialValues) => {
  const homeInitialValues: HomeInitialValues = {
    name: data?.name || "",
    lastName: data?.lastName || "",
    address: data?.address || "",
    city: data?.city || "",
    age: data?.age || 0,
  };
  return { homeInitialValues };
};
