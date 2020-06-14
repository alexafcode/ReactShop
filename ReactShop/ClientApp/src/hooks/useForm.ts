import React, { useState } from "react";

function useForm<T>(
  initialState: T
): [
  T,
  (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
] {
  const [inputs, setValues] = useState<T>(initialState);

  return [
    inputs,
    function (
      event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
      setValues({
        ...inputs,
        [event.target.id]: event.target.value,
      });
    },
  ];
}

export default useForm;
