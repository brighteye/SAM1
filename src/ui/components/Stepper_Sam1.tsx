"use client";
/*
 * Documentation:
 * Stepper_sam1 — https://app.subframe.com/b7c7e15207a7/library?component=Stepper_sam1_e84a4b3e-be7d-44b2-91ed-f58b407076bf
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "completed" | "active";
  firstStep?: boolean;
  lastStep?: boolean;
  stepNumber?: React.ReactNode;
  label?: React.ReactNode;
  className?: string;
}

const Step = React.forwardRef<HTMLElement, StepProps>(function Step(
  {
    variant = "default",
    firstStep = false,
    lastStep = false,
    stepNumber,
    label,
    className,
    ...otherProps
  }: StepProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/0f695e29 flex w-full cursor-pointer flex-col items-center justify-center gap-1 px-2 py-2",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div
        className={SubframeCore.twClassNames(
          "flex w-full items-center justify-center gap-2",
          {
            "flex-row flex-nowrap gap-2": firstStep,
            "bg-brand-400": variant === "completed",
          }
        )}
      >
        <div
          className={SubframeCore.twClassNames(
            "flex h-1 grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-300",
            {
              "bg-brand-300": firstStep,
              "bg-brand-600": variant === "active",
              "bg-brand-400": variant === "completed",
            }
          )}
        />
      </div>
      {label ? (
        <span
          className={SubframeCore.twClassNames(
            "text-body font-body text-subtext-color group-hover/0f695e29:text-default-font",
            {
              "text-body-bold font-body-bold text-default-font":
                variant === "active",
              "text-subtext-color": variant === "completed",
            }
          )}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
});

interface Stepper_Sam1RootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const Stepper_Sam1Root = React.forwardRef<HTMLElement, Stepper_Sam1RootProps>(
  function Stepper_Sam1Root(
    { children, className, ...otherProps }: Stepper_Sam1RootProps,
    ref
  ) {
    return children ? (
      <div
        className={SubframeCore.twClassNames(
          "flex w-full items-start justify-center",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {children}
      </div>
    ) : null;
  }
);

export const Stepper_Sam1 = Object.assign(Stepper_Sam1Root, {
  Step,
});
