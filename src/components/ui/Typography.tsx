import { FC } from "react";
import { ClassValue } from "clsx";

import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: ClassValue;
}

export const TypographyBlockquote: FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <blockquote className={cn("mt-3 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
};

export const TypographyCode: FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <blockquote
      className={cn(
        "rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </blockquote>
  );
};

export const TypographyH1: FC<TypographyProps> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const TypographyH2: FC<TypographyProps> = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const TypographyH3: FC<TypographyProps> = ({ children, className }) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const TypographyH4: FC<TypographyProps> = ({ children, className }) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const TypographyLead: FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={cn(
        " text-lg font-light tracking-wide text-muted-foreground sm:text-2xl sm:font-extralight",
        className
      )}
    >
      {children}
    </p>
  );
};

export const TypographyP: FC<TypographyProps> = ({ children, className }) => {
  return (
    <p
      className={cn(
        " text-lg font-light tracking-wide text-muted-foreground sm:text-2xl sm:font-extralight",
        className
      )}
    >
      {children}
    </p>
  );
};
