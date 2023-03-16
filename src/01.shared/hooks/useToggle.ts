import { useState } from "react";

export interface UseToggleProps {
  value: boolean,
  toggle: () => void
}

export function useToggle(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);

  function toggleValue() {
    setValue(state => (state = !value));
  }

  return { value, toggle: toggleValue };
}