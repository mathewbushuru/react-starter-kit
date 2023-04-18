import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Button,
  TypographyBlockquote,
  TypographyCode,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyLead,
} from "@/components/ui";
import {
  Modal,
  ModalAction,
  ModalCancel,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "@/components/ui";

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
    <div className="min-h-screen bg-primary-foreground p-2 pb-10 text-primary">
      <div className="max-w-5xl sm:mx-auto">
        <div className="mb-4 border p-2">
          Example home page
          <div>{value}</div>
          <Button onClick={() => dispatch(incrementAction())}>Increment</Button>
          <Button onClick={() => dispatch(decrementAction())}>Decrement</Button>
          <Button onClick={() => dispatch(incrementByAmountAction(22))}>
            Increment by 22
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          <TypographyH1>TypographyH1</TypographyH1>

          <TypographyH2>TypographyH2</TypographyH2>

          <TypographyH3>TypographyH3</TypographyH3>

          <TypographyH4>TypographyH4</TypographyH4>

          <TypographyP>
            TypographyP - Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Natus, ut laudantium totam atque voluptas ex velit laboriosam
            dolorum unde impedit libero debitis numquam doloribus laborum.
          </TypographyP>

          <TypographyP>
            TypographyP - Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Natus, ut laudantium totam atque voluptas ex velit laboriosam
            dolorum unde impedit libero debitis numquam doloribus laborum.
          </TypographyP>

          <TypographyBlockquote>
            "TypographyBlockquote - Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores dolorum velit beatae!"
          </TypographyBlockquote>

          <TypographyCode>TypographyCode - TailwindCSS</TypographyCode>

          <TypographyLead>
            TypographyLead - Lorem ipsum dolor sit amet consectetur, adipisicing
            elit.
          </TypographyLead>

          <Modal>
            <ModalTrigger asChild>
              <p>Show modal</p>
            </ModalTrigger>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>Are you sure?</ModalTitle>
                <ModalDescription>
                  This action cannot be undone!
                </ModalDescription>
              </ModalHeader>
              <ModalFooter>
                <ModalCancel>Cancel</ModalCancel>
                <ModalAction>Continue</ModalAction>
              </ModalFooter>
            </ModalContent>
          </Modal>

        </div>
      </div>
    </div>
  );
};
