import { isFunction } from "@src/utils/is";
import {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export default function useMergeValue<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
    onChange?: (value: T) => void;
  },
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const { defaultValue, value: propsValue, onChange } = props || {};
  const isFirstRender = useRef(true);
  const [stateValue, setStateValue] = useState<T>(() => {
    if (propsValue !== undefined) {
      return propsValue;
    } else if (defaultValue !== undefined) {
      return defaultValue;
    } else {
      return defaultStateValue;
    }
  });

  useEffect(() => {
    if (propsValue === undefined && !isFirstRender.current) {
      setStateValue(propsValue!);
    }
    isFirstRender.current = false;
  }, [propsValue]);

  const mergedValue = propsValue === undefined ? stateValue : propsValue;

  const setState = useCallback(
    (value: SetStateAction<T>) => {
      const res = isFunction(value) ? value(stateValue) : value;
      if (propsValue === undefined) {
        setStateValue(res as T);
      }
      onChange?.(res as T);
    },
    [stateValue],
  );

  return [mergedValue, setState];
}
