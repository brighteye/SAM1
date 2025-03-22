
"use client";

import React from "react";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { Stepper_Sam1 } from "@/ui/components/Stepper_Sam1";
import { TextArea } from "@/ui/components/TextArea";
import { Button_Sam1 } from "@/ui/components/Button_Sam1";

function Step1() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-center justify-center gap-6 overflow-hidden bg-[#134e4aff] relative mobile:flex-col mobile:flex-nowrap mobile:gap-6">
        <div className="flex w-full grow shrink-0 basis-0 items-start overflow-hidden absolute inset-0 mobile:flex-row mobile:flex-nowrap mobile:gap-0">
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
        <div className="flex w-full max-w-[768px] grow shrink-0 basis-0 flex-col items-center gap-2 py-6 mobile:px-0 mobile:py-12">
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-12 rounded-[8px] bg-[#ffffffe6] px-12 py-12 shadow-md relative mobile:w-full mobile:grow mobile:shrink-0 mobile:basis-0 mobile:rounded-[8px] mobile:bg-[#ffffffe6] mobile:px-4 mobile:py-6">
            <Stepper_Sam1>
              <Stepper_Sam1.Step
                variant="active"
                firstStep={true}
                stepNumber="1"
                label="Challenge"
              />
              <Stepper_Sam1.Step stepNumber="2" label="Outcome" />
              <Stepper_Sam1.Step
                lastStep={true}
                stepNumber="3"
                label="Message"
              />
            </Stepper_Sam1>
            <div className="flex w-full flex-col items-center gap-2">
              <span className="text-heading-2 font-heading-2 text-default-font text-center">
                What challenge are you facing?
              </span>
              <span className="text-heading-3 font-heading-3 text-default-font text-center">
                Describe the problem. The more detailed you are, the better your
                results will be.
              </span>
            </div>
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-12">
              <TextArea
                className="w-full grow shrink-0 basis-0 mobile:min-h-[240px] mobile:w-full mobile:grow mobile:shrink-0 mobile:basis-0"
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
            <div className="flex items-center justify-between px-1 py-1">
              <Button_Sam1
                disabled={false}
                variant="brand-primary"
                size="medium"
                icon={null}
                iconRight={null}
                loading={false}
                onClick={() => window.location.href = '/step2'}
              >
                Next
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

export default Step1;
