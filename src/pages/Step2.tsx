
"use client";

import React from "react";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { Stepper_Sam1 } from "@/ui/components/Stepper_Sam1";
import { TextArea } from "@/ui/components/TextArea";
import { IconButton_Sam1 } from "@/ui/components/IconButton_Sam1";
import { Button_Sam1 } from "@/ui/components/Button_Sam1";

function Step2() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-center justify-center gap-6 overflow-hidden bg-[#134e4aff] relative mobile:flex-col mobile:flex-nowrap mobile:gap-6">
        <div className="flex items-start overflow-hidden absolute inset-0 mobile:flex-row mobile:flex-nowrap mobile:gap-0">
          <img
            className="grow shrink-0 basis-0 self-stretch object-cover mobile:h-auto mobile:grow mobile:shrink-0 mobile:basis-0 mobile:self-stretch mobile:object-cover"
            src="https://res.cloudinary.com/subframe/image/upload/v1741494835/uploads/6509/bp89lea4jixduyac4emm.png"
          />
        </div>
        <div className="hidden items-start overflow-hidden absolute inset-0 mobile:flex">
          <img
            className="grow shrink-0 basis-0 self-stretch object-cover"
            src="https://res.cloudinary.com/subframe/image/upload/v1741733509/uploads/6509/nbt0rkjldzft6n488dl5.png"
          />
        </div>
        <div className="flex w-full max-w-[768px] grow shrink-0 basis-0 flex-col items-center justify-center gap-2 py-6">
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-12 rounded-[8px] bg-[#ffffffe6] px-12 py-12 shadow-md relative mobile:h-auto mobile:w-full mobile:flex-none mobile:rounded-[8px] mobile:bg-[#ffffffe6] mobile:pl-1 mobile:pr-4 mobile:py-14">
            <Stepper_Sam1>
              <Stepper_Sam1.Step
                variant="completed"
                firstStep={true}
                stepNumber="1"
                label="Challenge"
              />
              <Stepper_Sam1.Step
                variant="active"
                stepNumber="2"
                label="Outcome"
              />
              <Stepper_Sam1.Step
                lastStep={true}
                stepNumber="3"
                label="Message"
              />
            </Stepper_Sam1>
            <div className="flex w-full flex-col items-center gap-2">
              <span className="text-heading-2 font-heading-2 text-default-font text-center">
                What would be your ideal outcome in overcoming this challenge?
              </span>
              <span className="text-heading-3 font-heading-3 text-default-font text-center">
                Describe your dream-come-true scenario.
              </span>
            </div>
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2">
              <TextArea
                className="w-full grow shrink-0 basis-0"
                error={false}
                variant="outline"
                label=""
                helpText=""
              >
                <TextArea.Input
                  className="h-auto min-h-[96px] w-full flex-none"
                  placeholder=""
                  value=""
                  onChange={(
                    event: React.ChangeEvent<HTMLTextAreaElement>
                  ) => {}}
                />
              </TextArea>
            </div>
            <div className="flex w-full items-center justify-between">
              <IconButton_Sam1
                icon="FeatherArrowLeft"
                onClick={() => window.location.href = '/'}
              />
              <Button_Sam1
                disabled={false}
                variant="brand-primary"
                size="medium"
                icon={null}
                iconRight={null}
                loading={false}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Create Message
              </Button_Sam1>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-12 rounded-[8px] bg-[#ffffffe6] px-6 py-9 shadow-md relative mobile:container mobile:max-w-none mobile:h-auto mobile:w-auto mobile:flex-none mobile:rounded-[8px] mobile:bg-[#ffffffe6] mobile:py-6">
            <span className="text-body-bold font-body-bold text-subtext-color mobile:text-body-bold mobile:font-body-bold">
              SCIENCE • ART • MAGIC
            </span>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default Step2;
