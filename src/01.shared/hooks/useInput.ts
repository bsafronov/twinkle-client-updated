import React, { useState } from "react";

export interface UseInputProps<T = string> {
  value: T;
  onChange: (e: React.ChangeEvent<any>) => void;
}

export function useInput<T = string>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  function onChange(e: React.ChangeEvent<any>) {
    setValue(e.target.value);
  }

  return { value, onChange };
}
