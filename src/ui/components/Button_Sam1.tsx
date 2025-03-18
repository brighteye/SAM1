"use client";
/*
 * Documentation:
 * Button_sam1 — https://app.subframe.com/b7c7e15207a7/library?component=Button_sam1_e2b39ad9-3870-4d60-856d-e7690ea70dcf
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface Button_Sam1RootProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "brand-primary"
    | "brand-secondary"
    | "brand-tertiary"
    | "neutral-primary"
    | "neutral-secondary"
    | "neutral-tertiary"
    | "destructive-primary"
    | "destructive-secondary"
    | "destructive-tertiary"
    | "inverse";
  size?: "large" | "medium" | "small";
  children?: React.ReactNode;
  icon?: SubframeCore.IconName;
  iconRight?: SubframeCore.IconName;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button_Sam1Root = React.forwardRef<HTMLElement, Button_Sam1RootProps>(
  function Button_Sam1Root(
    {
      variant = "brand-primary",
      size = "medium",
      children,
      icon = null,
      iconRight = null,
      loading = false,
      className,
      type = "button",
      ...otherProps
    }: Button_Sam1RootProps,
    ref
  ) {
    return (
      <button
        className={SubframeCore.twClassNames(
          "group/e2b39ad9 flex cursor-pointer items-center justify-center gap-2 rounded-full border-none bg-brand-600 px-5 py-2 hover:bg-brand-500 active:bg-brand-600 disabled:cursor-default disabled:bg-neutral-200 hover:disabled:cursor-default hover:disabled:bg-neutral-200 active:disabled:cursor-default active:disabled:bg-neutral-200",
          {
            "h-6 w-auto flex-row flex-nowrap gap-1 px-2 py-0": size === "small",
            "h-10 w-auto px-4 py-0": size === "large",
            "bg-transparent hover:bg-[#ffffff29] active:bg-[#ffffff3d]":
              variant === "inverse",
            "bg-transparent hover:bg-error-50 active:bg-error-100":
              variant === "destructive-tertiary",
            "bg-error-50 hover:bg-error-100 active:bg-error-50":
              variant === "destructive-secondary",
            "bg-error-600 hover:bg-error-500 active:bg-error-600":
              variant === "destructive-primary",
            "bg-transparent hover:bg-neutral-100 active:bg-neutral-200":
              variant === "neutral-tertiary",
            "border border-solid border-neutral-border bg-default-background hover:bg-neutral-50 active:bg-default-background":
              variant === "neutral-secondary",
            "bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-100":
              variant === "neutral-primary",
            "bg-transparent hover:bg-brand-50 active:bg-brand-100":
              variant === "brand-tertiary",
            "bg-brand-50 hover:bg-brand-100 active:bg-brand-50":
              variant === "brand-secondary",
          },
          className
        )}
        ref={ref as any}
        type={type}
        {...otherProps}
      >
        <SubframeCore.Icon
          className={SubframeCore.twClassNames(
            "text-body font-body text-white group-disabled/e2b39ad9:text-neutral-400",
            {
              hidden: loading,
              "text-body font-body": size === "small",
              "text-heading-3 font-heading-3": size === "large",
              "text-white": variant === "inverse",
              "text-error-700":
                variant === "destructive-tertiary" ||
                variant === "destructive-secondary",
              "text-neutral-700":
                variant === "neutral-tertiary" ||
                variant === "neutral-secondary" ||
                variant === "neutral-primary",
              "text-brand-700":
                variant === "brand-tertiary" || variant === "brand-secondary",
            }
          )}
          name={icon}
        />
        <div
          className={SubframeCore.twClassNames(
            "hidden h-4 w-4 flex-none items-center justify-center gap-2",
            { flex: loading, "h-3 w-3 flex-none": size === "small" }
          )}
        >
          <SubframeCore.Loader
            className={SubframeCore.twClassNames(
              "text-caption font-caption text-white group-disabled/e2b39ad9:text-neutral-400",
              {
                "inline-block font-['Inter'] text-[12px] font-[400] leading-[20px] tracking-normal":
                  loading,
                "text-caption font-caption": size === "small",
                "text-error-700":
                  variant === "destructive-tertiary" ||
                  variant === "destructive-secondary",
                "text-neutral-700":
                  variant === "neutral-tertiary" ||
                  variant === "neutral-secondary" ||
                  variant === "neutral-primary",
                "text-brand-700":
                  variant === "brand-tertiary" || variant === "brand-secondary",
              }
            )}
          />
        </div>
        {children ? (
          <span
            className={SubframeCore.twClassNames(
              "grow shrink-0 basis-0 whitespace-nowrap text-heading-3 font-heading-3 text-white group-disabled/e2b39ad9:text-neutral-400",
              {
                hidden: loading,
                "text-caption-bold font-caption-bold": size === "small",
                "text-body-bold font-body-bold": size === "large",
                "text-white": variant === "inverse",
                "text-error-700":
                  variant === "destructive-tertiary" ||
                  variant === "destructive-secondary",
                "text-neutral-700":
                  variant === "neutral-tertiary" ||
                  variant === "neutral-secondary" ||
                  variant === "neutral-primary",
                "text-brand-700":
                  variant === "brand-tertiary" || variant === "brand-secondary",
              }
            )}
          >
            {children}
          </span>
        ) : null}
        <SubframeCore.Icon
          className={SubframeCore.twClassNames(
            "text-body font-body text-white group-disabled/e2b39ad9:text-neutral-400",
            {
              "text-body font-body": size === "small",
              "text-heading-3 font-heading-3": size === "large",
              "text-white": variant === "inverse",
              "text-error-700":
                variant === "destructive-tertiary" ||
                variant === "destructive-secondary",
              "text-neutral-700":
                variant === "neutral-tertiary" ||
                variant === "neutral-secondary" ||
                variant === "neutral-primary",
              "text-brand-700":
                variant === "brand-tertiary" || variant === "brand-secondary",
            }
          )}
          name={iconRight}
        />
      </button>
    );
  }
);

export const Button_Sam1 = Button_Sam1Root;
