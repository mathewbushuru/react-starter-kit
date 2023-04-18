import * as React from "react";
import * as ModalPrimitive from "@radix-ui/react-alert-dialog";

import { buttonVariants } from "./Button";

import { cn } from "@/lib/utils";

export const Modal = ModalPrimitive.Root;

export const ModalTrigger = ModalPrimitive.Trigger;

const ModalPortal = ({
  className,
  children,
  ...props
}: ModalPrimitive.AlertDialogPortalProps) => {
  return (
    <ModalPrimitive.Portal className={cn(className)} {...props}>
      <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
        {children}
      </div>
    </ModalPrimitive.Portal>
  );
};

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof ModalPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Overlay>
>(({ className, children, ...props }, ref) => {
  return (
    <ModalPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in",
        className
      )}
      {...props}
      ref={ref}
    />
  );
});

export const ModalContent = React.forwardRef<
  React.ElementRef<typeof ModalPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Content>
>(({ className, ...props }, ref) => {
  return (
    <ModalPortal>
      <ModalOverlay />
      <ModalPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 grid w-full max-w-lg scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full",
          className
        )}
        {...props}
      />
    </ModalPortal>
  );
});

export const ModalHeader = ({
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

export const ModalFooter = ({
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

export const ModalTitle = React.forwardRef<
  React.ElementRef<typeof ModalPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Title>
>(({ className, ...props }, ref) => {
  return <ModalPrimitive.Title ref={ref} className={cn("text-lg font-semibold",className)} {...props} />;
});

export const ModalDescription = React.forwardRef<
  React.ElementRef<typeof ModalPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Description>
>(({ className, ...props }, ref) => {
  return <ModalPrimitive.Description ref={ref} className={cn("text-sm  text-muted-foreground",className)} {...props} />;
});

export const ModalAction = React.forwardRef<
  React.ElementRef<typeof ModalPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Action>
>(({ className, ...props }, ref) => {
  return <ModalPrimitive.Action ref={ref} className={cn(buttonVariants(),className)} {...props} />;
});

export const ModalCancel = React.forwardRef<
  React.ElementRef<typeof ModalPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Cancel>
>(({ className, ...props }, ref) => {
  return <ModalPrimitive.Cancel ref={ref} className={cn(buttonVariants({variant:"outline"}),"mt-2 sm:mt-0",className)} {...props} />;
});
