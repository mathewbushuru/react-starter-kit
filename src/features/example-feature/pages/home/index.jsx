import { useSelector, useDispatch } from "react-redux";

import { PrimaryButton } from "components/UI";

import {
  incrementAction,
  decrementAction,
  incrementByAmountAction,
} from "features/example-feature/stores/counterSlice";

import styles from "./Home.module.css";

export const HomePage = () => {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.counter.value);

  return (
    <div className={styles.homePage}>
      index
      <div>{value}</div>
      <PrimaryButton onClick={() => dispatch(incrementAction())}>
        Increment
      </PrimaryButton>
      <PrimaryButton onClick={() => dispatch(decrementAction())}>
        Decrement
      </PrimaryButton>
      <PrimaryButton onClick={() => dispatch(incrementByAmountAction(22))}>
        Increment by 22
      </PrimaryButton>
    </div>
  );
};
