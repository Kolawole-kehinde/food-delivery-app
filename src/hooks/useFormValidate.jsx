import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useFormValidate = (initialState = {}, Schema) => {
  return useForm({
    defaultValues: initialState,
    resolver: zodResolver(Schema),
    mode: "onBlur",
  });
};

export default useFormValidate;
