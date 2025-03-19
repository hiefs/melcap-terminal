"use client";

import { TypeAnimation } from "react-type-animation";
import { UtilityButton } from "../ui/utility-button";
import { sourceCode } from "@/app/layout";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Loader } from "../ui/loading-dots";
import { useState } from "react";
import { setTaskStep } from "@/lib/features/task-reducer";
import { Diamond, Droplet, Gem, Lamp, Waves } from "lucide-react";

const StageOne = () => {
  // Are you prepared?
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.tasks.taskStep);
  const [showLoader, setShowLoader] = useState(false);

  return (
    <div>
      <TypeAnimation
        omitDeletionAnimation={true}
        sequence={[
          "Welcome",
          2000,
          "Preparing your task...",
          100,
          () => setShowLoader(true),
          5000,
          () => setShowLoader(false),
          "Launching...",
          800,
          "Are you prepared?",
          () => dispatch(setTaskStep(step + 1)),
        ]}
        wrapper="span"
        cursor={true}
        repeat={0}
        className={`${sourceCode.variable}`}
        style={{
          whiteSpace: "pre-line",
          display: "block",
          textAlign: "center",
        }}
      />
      {showLoader && (
        <div className="w-full flex h-full m-auto justify-center items-center mt-5">
          <Loader />
        </div>
      )}
    </div>
  );
};

const StageTwo = () => {
  // How devoted are you?
  const [showTitle, setShowTitle] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.tasks.taskStep);

  return (
    <div>
      {showTitle && (
        <div className="w-full h-full m-auto items-center justify-center flex flex-col gap-5">
          <p>Task 1: Dedication</p>
          <UtilityButton
            text="Begin"
            onClick={() => {
              setShowContent(true);
              setShowTitle(false);
            }}
          />
        </div>
      )}
      {showContent && (
        <div className="w-full h-full flex flex-col gap-5 mb-10">
          <p className="mb-5">
            Dedication is key to becoming a quality addition to the Citadel and
            its Interests.
          </p>
          <p>As a dedicated employee, you might have the following traits:</p>
          <ul>
            <li>- Passion</li>
            <li>- A positive attitude</li>
            <li>- Your undying loyaly and support</li>
            <li>- Punctuality</li>
            <li>- Flexibility</li>
          </ul>
          <p className="mt-4">
            We would like to understand how dedicated you are.
          </p>
          <div className="mt-5 w-full flex justify-center mb-5">
            <UtilityButton
              text="Begin Evaluation"
              onClick={() => {
                dispatch(setTaskStep(step + 1));
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const StageThree = () => {
  const [stageStep, setStageStep] = useState(0);
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.tasks.taskStep);

  const nextStage = () => {
    dispatch(setTaskStep(step + 1));
  };

  const nextStep = (step: number) => {
    setStageStep(step);
  };

  return (
    <>
      {stageStep === 0 && (
        <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
          <div className="flex flex-row gap-5 justify-center items-center">
            <button className="button w-12 h-18 border flex justify-center items-center"><Droplet /></button>
            <button className="button w-12 h-18 border flex justify-center items-center"><Diamond /></button>
            <button className="button w-12 h-18 border flex justify-center items-center"><Gem className="text-red-400" /></button>
            <button className="button w-12 h-18 border flex justify-center items-center"><Lamp /></button>
            <button className="button w-12 h-18 border flex justify-center items-center"><Waves className="text-blue-300" /></button>
          </div>
          <p className="text-center">Please remember these symbols.</p>
          <div className="mt-5 w-full flex justify-center mb-5">
            <UtilityButton
              text="Continue"
              onClick={() => {
                nextStep(1);
              }}
            />
          </div>
        </div>
      )}
      {stageStep === 1 && (
        <div>
          <p className="text-cnter">Is having a job important?</p>
          <div className="mt-5 w-full flex justify-center mb-5 gap-4">
            <UtilityButton text="Yes" onClick={() => nextStep(2)} />
            <UtilityButton text="No" onClick={() => nextStep(2)} />
          </div>
        </div>
      )}
      {stageStep === 2 && (
        <div>
          <p className="text-center">Can labor be meaningful?</p>
          <div className="mt-5 w-full flex justify-center mb-5 gap-4">
            <UtilityButton text="Yes" onClick={() => nextStep(3)} />
            <UtilityButton text="No" onClick={() => nextStep(4)} />
          </div>
        </div>
      )}
      {stageStep === 3 && (
        <div>
          <p className="text-center">Are you likely to remain at a job that is more meaningful if there are less benefits?</p>
          <div className="mt-5 w-full flex justify-center mb-5 gap-4">
            <UtilityButton text="Yes" onClick={() => nextStep(5)} />
            <UtilityButton text="No" onClick={() => nextStep(6)} />
          </div>
        </div>
      )}
      {stageStep === 4 && (
        <div>
          <p className="text-center">Do you believe there should be no labor?</p>
          <div className="mt-5 w-full flex justify-center mb-5 gap-4">
            <UtilityButton text="Yes" onClick={() => nextStep(7)} />
            <UtilityButton text="No" onClick={() => nextStep(8)} />
          </div>
        </div>
      )}

      {stageStep === 5 && (
        <div>
          <p className="text-center">Are you likely to remain at a job that is more meaningful if there are less benefits?</p>
          <div className="mt-5 w-full flex justify-center mb-5 gap-4">
            <UtilityButton text="Yes" onClick={() => nextStep(9)} />
            <UtilityButton text="No" onClick={() => nextStep(10)} />
          </div>
        </div>
      )}

      {stageStep === 6 && (
        <div>
          <p className="text-center">Are you likely to remain at a job that is more meaningful if there are less benefits?</p>
          <div className="mt-5 w-full flex justify-center mb-5 gap-4">
            <UtilityButton text="Yes" onClick={() => nextStep(11)} />
            <UtilityButton text="No" onClick={() => nextStep(12)} />
          </div>
        </div>
      )}
      {stageStep === 7 && (
        <div>
          <p className="text-center">Do you believe there should be no labor?</p>
          <div className="mt-5 w-full flex justify-center mb-5 gap-4">
            <UtilityButton text="Yes" onClick={() => nextStep(13)} />
            <UtilityButton text="No" onClick={() => nextStep(14)} />
          </div>
        </div>
      )}
      {stageStep === 8 && (
        <div>
          <p className="text-center">Do you believe there should be no labor?</p>
          <div className="mt-5 w-full flex justify-center mb-5 gap-4">
            <UtilityButton text="Yes" onClick={() => nextStep(15)} />
            <UtilityButton text="No" onClick={() => nextStep(16)} />
          </div>
        </div>
      )}
    </>

  )
};

export const Start = () => {
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.tasks.taskStep);
  console.log(step);

  return (
    <div className="w-full flex h-full m-auto justify-center relative">
      <div className="mt-5 w-full flex justify-center">
        {step === 0 && (
          <div className="items-center justify-center flex flex-col">
            <UtilityButton
              text="Start"
              onClick={() => dispatch(setTaskStep(step + 1))}
            />
          </div>
        )}
        {step === 1 && (
          <div className="items-center justify-center flex flex-col">
            <StageOne />
          </div>
        )}
        {step === 2 && <StageTwo />}
        {step === 3 && <StageThree />}
      </div>
    </div>
  );
};

// Dedication
// Confidence
// Reliablity
// Teamwork
// Independence
// Leadership
// Communication
// Self-Awareness
// Critical Thinking
// Integrity
