import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import {
  AlertCircle,
  BellRingIcon,
  Calendar as CalendarIcon,
  CheckIcon,
  PlusIcon,
  Settings2Icon,
} from "lucide-react";

import {
  Button,
  Calendar,
  Input,
  Label,
  Separator,
  Switch,
  ToastAction,
  TypographyBlockquote,
  TypographyCode,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyLead,
  CardTitle,
} from "@/components/ui";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { useToast } from "@/hooks/ui-hooks";

import {
  incrementAction,
  decrementAction,
  incrementByAmountAction,
} from "@/features/example-feature/stores/counter-slice";
import { cn } from "@/lib/utils";

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

  const [date, setDate] = useState<Date>();

  const { toast } = useToast();

  const cardNotifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "Your have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ];

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

          <SectionHeader>Accordion</SectionHeader>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes, it adheres to the WAI-ARIA design pattern
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>Yes, matches other components</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes, it is animated by default
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <SectionHeader>Alert</SectionHeader>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired.Please log in again
            </AlertDescription>
          </Alert>

          <SectionHeader>Avatar</SectionHeader>
          <Avatar>
            <AvatarImage
              src="https://github.com/mathewbushuru.png"
              alt="@mathewbushuru"
            />
            <AvatarFallback>MB</AvatarFallback>
          </Avatar>

          <SectionHeader>Button</SectionHeader>
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

          <SectionHeader>Calendar</SectionHeader>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "mx-auto w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <SectionHeader>Card</SectionHeader>
          <Card className="mx-auto w-[380px]">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>You have 3 unread messages</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <BellRingIcon />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Push Notifications
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Send notifications to device
                  </p>
                </div>
                <Switch />
              </div>
              <div>
                {cardNotifications.map((notification, index) => {
                  return (
                    <div
                      key={index}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <span className="h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {notification.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {notification.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="">
                <CheckIcon className="" /> Mark all as read
              </Button>
            </CardFooter>
          </Card>

          <SectionHeader>Drawer</SectionHeader>
          {drawerPositions.map((position) => (
            <Drawer key={position}>
              <DrawerTrigger asChild>
                <Button variant="outline" className="mx-auto max-w-xs">
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

          <SectionHeader>Dropdown Menu</SectionHeader>
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

          <SectionHeader>Input / Label</SectionHeader>
          <div className="mx-4 grid grid-cols-4 items-center gap-2">
            <Label htmlFor="name" className="sm:text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              className="col-span-4 sm:col-span-3"
            />
          </div>

          <SectionHeader>Modal</SectionHeader>
          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline" className="mx-auto max-w-xs ">
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

          <SectionHeader>Popover</SectionHeader>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="mx-auto w-10 rounded-full p-0"
              >
                <Settings2Icon className="h-4 w-4" />
                <span className="sr-only">Open popover</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set dimensions for the layer
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Width</Label>
                    <Input
                      id="width"
                      defaultValue="100%"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Max. Height</Label>
                    <Input
                      id="height"
                      defaultValue="none"
                      className="col-span-2 h-8"
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <SectionHeader>Separator</SectionHeader>
          <div className="mx-auto">
            <div className="space-y-1 ">
              <h4 className="text-sm font-medium leading-none">
                Radix Primitives
              </h4>
              <p className="text-sm text-muted-foreground">
                An open-source UI component library
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Source</div>
            </div>
          </div>

          <SectionHeader>Switch</SectionHeader>
          <div className="mx-auto flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode" className="cursor-pointer">
              Airplane Mode
            </Label>
          </div>

          <SectionHeader>Toast</SectionHeader>
          <Button
            variant="outline"
            className="mx-auto"
            onClick={() =>
              toast({
                title: "Scheduled:Catch up",
                description: "Monday, May 1, 2023 at 3:23 AM",
                action: (
                  <ToastAction altText="Go to schedule to undo">
                    Undo
                  </ToastAction>
                ),
              })
            }
          >
            Add to calendar
          </Button>
          <Button
            onClick={() => {
              toast({ description: "Your message has been sent." });
            }}
            className="mx-auto"
          >
            Send message
          </Button>
          <Button
            variant="secondary"
            className="mx-auto"
            onClick={() => {
              toast({
                variant: "destructive",
                title: "Something went wrong.",
                description: "There was something wrong with your request.",
                action: (
                  <ToastAction altText="Try again">Try again</ToastAction>
                ),
              });
            }}
          >
            Fail
          </Button>

          <SectionHeader>Tooltip</SectionHeader>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="mx-auto w-10 rounded-full p-0"
                >
                  <PlusIcon className="h-4 w-4" />
                  <span className="sr-only">Add</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <TypographyH4 className="border-b text-center text-muted-foreground">
      {children}
    </TypographyH4>
  );
}
