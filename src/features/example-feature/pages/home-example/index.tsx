import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Button,
  Input,
  Label,
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
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerAction,
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
} from "@/components/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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

  const drawerPositions: ["right", "left", "top", "bottom"] = [
    "right",
    "left",
    "top",
    "bottom",
  ];

  const [menuBtnSelection, setMenuBtnSelection] = useState("Bottom");

  return (
    <div className="min-h-screen bg-primary-foreground p-2 pb-10 text-primary">
      <div className="max-w-5xl sm:mx-auto">
        <div className="mb-4 space-y-3 border p-2">
          <div>Example home page - Redux Toolkit demo</div>
          <div>{value}</div>
          <div className="flex gap-2">
            <Button onClick={() => dispatch(incrementAction())}>
              Increment
            </Button>
            <Button onClick={() => dispatch(decrementAction())}>
              Decrement
            </Button>
            <Button
              variant="outline"
              onClick={() => dispatch(incrementByAmountAction(22))}
            >
              Increment by 22
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline" className="mx-auto max-w-xs sm:mx-0">
                Show modal
              </Button>
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

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="secondary" className="mx-auto  max-w-xs sm:mx-0">
                Open default drawer(right)
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DrawerDescription>
              </DrawerHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-2">
                  <Label htmlFor="name" className="sm:text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="col-span-4 sm:col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-2">
                  <Label htmlFor="username" className="sm:text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    placeholder="@johndoe"
                    className="col-span-4 sm:col-span-3"
                  />
                </div>
              </div>
              <DrawerFooter>
                {/* <DrawerAction>Done?</DrawerAction> */}
                <Button className="mt-2">Save changes</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="mx-auto max-w-xs">Menu Button</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <span>Profile</span>
                  <DropdownMenuShortcut>Comm+P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                  <DropdownMenuShortcut>Comm+B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Settings</span>
                  <DropdownMenuShortcut>Comm+S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Keyboard Shortcuts</span>
                  <DropdownMenuShortcut>Comm+K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <span>Team</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Invite users</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <span>Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Message</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <span>More...</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <span>New Team</span>
                  <DropdownMenuShortcut>Comm+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>GitHub</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Support</span>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <span>API</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Logout</span>
                <DropdownMenuShortcut>Comm+Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <TypographyH1>TypographyH1</TypographyH1>

          <TypographyH2>TypographyH2</TypographyH2>

          <TypographyH3>TypographyH3</TypographyH3>

          <TypographyH4>TypographyH4</TypographyH4>

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

          {drawerPositions.map((position) => (
            <Drawer key={position}>
              <DrawerTrigger asChild>
                <Button variant="outline" className="max-w-xs">
                  Open {position} drawer
                </Button>
              </DrawerTrigger>
              <DrawerContent position={position}>
                <DrawerHeader>
                  <DrawerTitle>Edit profile</DrawerTitle>
                  <DrawerDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-2">
                    <Label htmlFor="name" className="sm:text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="col-span-4 sm:col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-2">
                    <Label htmlFor="username" className="sm:text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      placeholder="@johndoe"
                      className="col-span-4 sm:col-span-3"
                    />
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Save changes</Button>
                  {/* <DrawerAction></DrawerAction> */}
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="mx-auto max-w-xs">
                Menu Button 2
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={menuBtnSelection}
                onValueChange={setMenuBtnSelection}
              >
                <DropdownMenuRadioItem value="Top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Middle">
                  Middle
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Bottom">
                  Bottom
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <TypographyH4 className="border-b text-center text-muted-foreground">
            Accordion
          </TypographyH4>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes, it adheres to the  WAI-ARIA design pattern</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>Yes, matches other components</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>Yes, it is animated by default</AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-6 grid grid-cols-2 gap-3  sm:grid-cols-3">
            <Button> Primary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
            <Button size="sm">Small button</Button>
            <Button size="lg">Large button</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
