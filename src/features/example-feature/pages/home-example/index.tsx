import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "@/components/UI";

import {
  incrementAction,
  decrementAction,
  incrementByAmountAction,
} from "@/features/example-feature/stores/counter-slice";

interface HomePageProps {}

export const ExampleHomePage: FC<HomePageProps> = ({}) => {
  const dispatch = useDispatch();

  const value = useSelector((state: any) => state.counter.value);

  return (
    <div className="min-h-screen bg-primary-foreground text-primary">
      Example home page
      <div>{value}</div>
      <Button onClick={() => dispatch(incrementAction())}>Increment</Button>
      <Button onClick={() => dispatch(decrementAction())}>Decrement</Button>
      <Button onClick={() => dispatch(incrementByAmountAction(22))}>
        Increment by 22
      </Button>

    </div>
  );
};
