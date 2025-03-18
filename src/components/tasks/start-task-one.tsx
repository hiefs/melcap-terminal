"use client";

import { TypeAnimation } from "react-type-animation";
import { UtilityButton } from "../ui/utility-button";
import { sourceCode } from "@/app/layout";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Loader } from "../ui/loading-dots";
import { useState } from "react";
import { setTaskStep } from "@/lib/features/task-reducer";

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
          "Preparing to launch...",
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

const StageTwo: React.FC = () => {
  // Is anyone ready?
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
              text="I am dedicated"
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
