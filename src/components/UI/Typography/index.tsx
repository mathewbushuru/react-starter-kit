import { FC } from "react";

interface TypographyProps {
  children: React.ReactNode;
}

export const TypographyBlockquote: FC<TypographyProps> = ({ children }) => {
  return (
    <blockquote className="mt-3 border-l-2 pl-6 italic">{children}</blockquote>
  );
};

export const TypographyCode: FC<TypographyProps> = ({ children }) => {
  return (
    <blockquote className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </blockquote>
  );
};

export const TypographyH1: FC<TypographyProps> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};

export const TypographyH2: FC<TypographyProps> = ({ children }) => {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};

export const TypographyH3: FC<TypographyProps> = ({ children }) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};

export const TypographyH4: FC<TypographyProps> = ({ children }) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
};

export const TypographyLead: FC<TypographyProps> = ({ children }) => {
  return (
    <p className=" text-lg font-light sm:font-extralight tracking-wide text-muted-foreground sm:text-2xl">
      {children}
    </p>
  );
};

export const TypographyP: FC<TypographyProps> = ({ children }) => {
  return <p className="mt-2 leading-7">{children}</p>;
};
