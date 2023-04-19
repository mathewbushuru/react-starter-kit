import * as React from "react";
import * as DrawerPrimitive from "@radix-ui/react-alert-dialog";
import { VariantProps, cva } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Drawer = DrawerPrimitive.Root;
const DrawerTrigger = DrawerPrimitive.Trigger;

const portalVariants = cva("fixed inset-0 z-50 flex", {
  variants: {
    position: {
      top: "items-start",
      bottom: "items-end",
      left: "justify-start",
      right: "justify-end",
    },
  },
  defaultVariants: { position: "right" },
});

interface DrawerPortalProps
  extends DrawerPrimitive.DialogPortalProps,
    VariantProps<typeof portalVariants> {}

const DrawerPortal = ({
  position,
  className,
  children,
  ...props
}: DrawerPortalProps) => {
  return (
    <DrawerPrimitive.Portal className={cn(className)} {...props}>
      <div className={portalVariants({ position })}>{children}</div>
    </DrawerPrimitive.Portal>
  );
};

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, children, ...props }, ref) => {
  return (
    <DrawerPrimitive.Overlay
      className={cn(
        "fixed inset-0 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
        className
      )}
      {...props}
      ref={ref}
    />
  );
});

const DrawerVariants = cva(
  "fixed z-50 scale-100 gap-4 bg-background p-6 opacity-100 shadow-lg ",
  {
    variants: {
      position: {
        top: "animate-in slide-in-from-top w-full duration-300 border",
        bottom: "animate-in slide-in-from-bottom w-full duration-300 border",
        left: "animate-in slide-in-from-left h-full duration-300",
        right: "animate-in slide-in-from-right h-full duration-300",
      },
      size: {
        content: "",
        default: "",
        sm: "",
        lg: "",
        xl: "",
        full: "",
      },
    },
    compoundVariants: [
      {
        position: ["top", "bottom"],
        size: "content",
        class: "max-h-screen",
      },
      {
        position: ["top", "bottom"],
        size: "default",
        class: "h-1/3",
      },
      {
        position: ["top", "bottom"],
        size: "sm",
        class: "h-1/4",
      },
      {
        position: ["top", "bottom"],
        size: "lg",
        class: "h-1/2",
      },
      {
        position: ["top", "bottom"],
        size: "xl",
        class: "h-5/6",
      },
      {
        position: ["top", "bottom"],
        size: "full",
        class: "h-screen",
      },
      {
        position: ["right", "left"],
        size: "content",
        class: "max-w-screen",
      },
      {
        position: ["right", "left"],
        size: "default",
        class: "w-5/6 sm:w-1/3",
      },
      {
        position: ["right", "left"],
        size: "sm",
        class: "w-5/6 sm:w-1/4",
      },
      {
        position: ["right", "left"],
        size: "lg",
        class: "w-5/6 sm:w-1/2",
      },
      {
        position: ["right", "left"],
        size: "xl",
        class: "w-5/6",
      },
      {
        position: ["right", "left"],
        size: "full",
        class: "w-screen",
      },
    ],
    defaultVariants: {
      position: "right",
      size: "default",
    },
  }
);

export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof DrawerVariants> {}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ position, size, className, children, ...props }, ref) => {
  return (
    <DrawerPortal position={position}>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(DrawerVariants({ position, size }), className)}
        {...props}
      >
        {children}
        <DrawerPrimitive.Cancel className="f absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DrawerPrimitive.Cancel>
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className
      )}
      {...props}
    />
  );
};

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  );
};

export const DrawerAction = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Action>
>(({ className, ...props }, ref) => {
  return (
    <DrawerPrimitive.Action
      ref={ref}
      className={cn(
        "flex flex-col-reverse items-stretch sm:flex-row sm:items-center sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  );
});

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => {
  return (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  );
});

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => {
  return (
    <DrawerPrimitive.Description
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});

export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
