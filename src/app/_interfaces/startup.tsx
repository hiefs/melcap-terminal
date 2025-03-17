"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { sourceCode } from "../layout";
import { UtilityButton } from "@/components/ui/utility-button";
import { ChevronRight } from "lucide-react";
import { Employee, EmployeeLogin } from "@/lib/interfaces";
import { Homeworlds, Specialty } from "@/lib/definitions";
import { customAlphabet } from "nanoid";
import {
  checkEmployeeId,
  createEmployee,
  loginEmployee,
} from "@/utils/employee";
import { Loader } from "@/components/ui/loading-dots";

interface StartupProps {
  open: boolean;
  onClose?: () => void;
}

export const Startup = (props: StartupProps) => {
  const { open, onClose } = props;
  const [isOpen, setIsOpen] = useState(open);
  const [activeStep, setActiveStep] = useState(1);
  const [error, setError] = useState<boolean>(false);
  const [formData, setFormData] = useState<Employee>({
    name: "",
    race: "",
    age: 0,
    specialty: "",
    position: "",
    pin: "",
    employee_id: "",
    banned: false,
  });

  const [returnUser, setReturnUser] = useState<EmployeeLogin>({
    employee_id: "",
    pin: "",
  });

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const endstartup = (data: Employee) => {
    submitEmployee(data);
    onClose?.();
    setIsOpen(false);
  };

  const login = (data: EmployeeLogin) => {
    loginEmployee(data).then((res) => {
      if (res === null) {
        setError(true);
        setActiveStep(26);
      } else {
        setError(false);
        onClose?.();
        setIsOpen(false);
      }
    });
  };

  const generateId = () => {
    let validId = false;
    let eId = "";

    const generateAndCheckId = () => {
      const nanoid = customAlphabet("1234567890abcdef", 10);
      eId = nanoid(10);
      checkEmployeeId(eId).then((res) => {
        validId = res;
        if (!validId) {
          generateAndCheckId();
        } else {
          setFormData((prev) => ({ ...prev, employee_id: eId }));
        }
      });
    };

    generateAndCheckId();
  };

  const submitEmployee = (data: Employee) => {
    createEmployee(data).then();
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      {isOpen && (
        <div>
          {activeStep <= 2 && (
            <TypeAnimation
              omitDeletionAnimation={true}
              sequence={[
                "Welcome to the Citadel Ministry of Employment & Labor's \nCareer Advancement Program Portal",
                800,
                "Welcome to the Citadel Ministry of Employment & Labor's \nCareer Advancement Program Portal\n\nPlease Wait...",
                5000,
                "Welcome to the Citadel Ministry of Employment & Labor's \nCareer Advancement Program Portal\n\n Are you a returning user?",
                () => nextStep(),
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
          )}
          {(activeStep === 3 || activeStep === 4) && (
            <TypeAnimation
              omitDeletionAnimation={true}
              sequence={[
                "Please wait...",
                5000,
                "Welcome!\n We are excited that you decided to enroll!",
                2000,
                "Welcome!\n We are excited that you decided to enroll! \n\n We will need to ask you a few questions before finding the career that \nbest fits for you.",
                2000,
                "Welcome!\n We are excited that you decided to enroll! \n\n We will need to ask you a few questions before finding the career that \nbest fits for you.\n\n Please wait...",
                5000,
                "What is your first and last name?",
                800,
                () => nextStep(),
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
          )}
          {(activeStep === 5 || activeStep === 6) && (
            <TypeAnimation
              omitDeletionAnimation={true}
              sequence={[
                "Please wait...",
                5000,
                `Hello ${formData.name}!`,
                2000,
                `Hello ${formData.name}! \n\n Please select your home world.`,
                () => nextStep(),
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
          )}
          {(activeStep === 7 || activeStep === 8) && (
            <TypeAnimation
              omitDeletionAnimation={true}
              sequence={[
                "Please wait...",
                5000,
                "What is your age?",
                () => nextStep(),
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
          )}
          {(activeStep === 9 || activeStep === 10) && (
            <TypeAnimation
              omitDeletionAnimation={true}
              sequence={[
                "Please wait...",
                5000,
                "Thank you for the information. \n\n We will now begin the process of finding you a career.",
                2000,
                "Thank you for the information. \n\n We will now begin the process of finding you a career. \n\n Please wait...",
                5000,
                'Please select a specialty that best fits \n your skills, competencies, or interests. \n\n If you do not see a specialty that fits, select "Other".',
                2000,
                () => nextStep(),
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
          )}
          {(activeStep === 11 || activeStep === 12) && (
            <TypeAnimation
              omitDeletionAnimation={true}
              sequence={[
                "Please wait...",
                5000,
                "Thank you.",
                2000,
                "Thank you. \n\n We want to get to know you a little better.",
                2000,
                "Thank you. \n\n We want to get to know you a little better.\n Please answer as honestly as possible.",
                2000,
                "Thank you. \n\n We want to get to know you a little better.\n Please answer as honestly as possible. \n\n Please wait...",
                5000,
                "Do you work well with others?",
                2000,
                () => nextStep(),
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
          )}
          {(activeStep === 13 || activeStep === 14) && (
            <TypeAnimation
              omitDeletionAnimation={true}
              sequence={[
                "Please wait...",
                5000,
                "Does life require a purpose?",
                5000,
                () => nextStep(),
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
          )}
          {(activeStep === 15 || activeStep === 16) && (
            <TypeAnimation
              omitDeletionAnimation={true}
              sequence={[
                "Please wait...",
                5000,
                "Do you fear failure?",
                5000,
                () => nextStep(),
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
          )}
          {(activeStep === 17 || activeStep === 18) && (
            <TypeAnimation
              omitDeletionAnimation={true}
              sequence={[
                "Please wait...",
                5000,
                "Thank you.",
                5000,
                "We have found a career for you!",
                2000,
                "We have found a career for you! \n\n Please wait while we generate your employee ID.",
                2000,
                "We have found a career for you! \n\n Please wait while we generate your employee ID. Please wait...",
                () => generateId(),
                5000,
                `Your employee ID has been generated. \n\n You will need it to log in to access your C-MELCAP account. \n Please keep it safe.`,
                2000,
                `Your employee ID has been generated. \n\n You will need it to log in to access your C-MELCAP account. \n Please keep it safe. \n\n Please select a 6-digit pin for your account.`,
                () => nextStep(),
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
          )}
          {(activeStep === 19 || activeStep === 20) && (
            <TypeAnimation
              omitDeletionAnimation={true}
              sequence={[
                "Please wait...",
                5000,
                "Thank you.",
                5000,
                "Congratulations! You have been successfully enrolled in the \nCitadel Ministry of Employment & Labor's \nCareer Advancement Program.",
                5000,
                "Redirecting to the terminal...",
                10000,
                () => endstartup(formData),
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
          )}
          {(activeStep === 26 || activeStep === 27) && (
            <TypeAnimation
              omitDeletionAnimation={true}
              sequence={[
                "Welcome back! \n Please enter your empyloyee ID and pin.",
                () => nextStep(),
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
          )}
          {activeStep === 28 && (
            <TypeAnimation
              omitDeletionAnimation={true}
              sequence={["Logging in...", 3000, () => login(returnUser)]}
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
          )}
          {activeStep === 2 && (
            <div className="flex flex-row justify-center items-center gap-4 mt-8">
              <UtilityButton
                text="Yes"
                onClick={() => {
                  setActiveStep(26);
                }}
              />
              <UtilityButton
                text="No"
                onClick={() => {
                  nextStep();
                }}
              />
            </div>
          )}
          {activeStep === 4 && (
            <div className="flex flex-row justify-center items-center gap-2 mt-8">
              <form>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input border-b"
                  minLength={3}
                  maxLength={25}
                  required
                />
                <button
                  formAction={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      name: e.get("name") as string,
                    }));
                    nextStep();
                  }}
                  type="submit"
                  className="button border ml-1 w-4 h-4"
                >
                  <ChevronRight size={14} />
                </button>
              </form>
            </div>
          )}
          {activeStep === 6 && (
            <div className="flex flex-row justify-center items-center mt-8 flex-wrap w-2/3 m-auto">
              {Object.entries(Homeworlds).map(([key, value], index) => (
                <div key={index}>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, race: key }));
                      nextStep();
                    }}
                    className="button p-2"
                  >
                    {value}
                  </button>
                  {index < Object.entries(Homeworlds).length - 1 && (
                    <span className="text-gray-500">-</span>
                  )}
                </div>
              ))}
            </div>
          )}
          {activeStep === 8 && (
            <div className="flex flex-row justify-center items-center gap-2 mt-8">
              <form>
                <input
                  id="age"
                  name="age"
                  type="number"
                  className="input border-b"
                  max={1100}
                  maxLength={4}
                  minLength={2}
                  min={18}
                  required
                />
                <button
                  formAction={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      age: Number(e.get("age")),
                    }));
                    nextStep();
                  }}
                  type="submit"
                  className="button border ml-1 w-4 h-4"
                >
                  <ChevronRight size={14} />
                </button>
              </form>
            </div>
          )}
          {activeStep === 10 && (
            <div className="flex flex-row justify-center items-center mt-8 flex-wrap w-2/3 m-auto">
              {Specialty.map((spec, index) => (
                <div key={index}>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        specialty: spec.department,
                        position:
                          spec.positions[
                            Math.floor(Math.random() * spec.positions.length)
                          ],
                      }));
                      nextStep();
                    }}
                    className="button p-2"
                  >
                    {spec.department}
                  </button>
                  {index < Specialty.length - 1 && (
                    <span className="text-gray-500">-</span>
                  )}
                </div>
              ))}
            </div>
          )}
          {activeStep === 12 && (
            <div className="flex flex-row justify-center items-center gap-4 mt-8">
              <UtilityButton text="Yes" onClick={() => nextStep()} />
              <UtilityButton text="No" onClick={() => nextStep()} />
            </div>
          )}
          {activeStep === 14 && (
            <div className="flex flex-row justify-center items-center gap-4 mt-8">
              <UtilityButton text="Yes" onClick={() => nextStep()} />
              <UtilityButton text="No" onClick={() => nextStep()} />
            </div>
          )}
          {activeStep === 16 && (
            <div className="flex flex-row justify-center items-center gap-4 mt-8">
              <UtilityButton text="Yes" onClick={() => nextStep()} />
              <UtilityButton text="No" onClick={() => nextStep()} />
            </div>
          )}
          {activeStep === 18 && (
            <div className="flex flex-col justify-center items-center gap-2 mt-8">
              <p>Your employee ID: {formData.employee_id}</p>
              <form>
                <input
                  id="pin"
                  name="pin"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="input border-b"
                  required
                  maxLength={6}
                  minLength={6}
                />
                <button
                  formAction={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      pin: e.get("pin") as string,
                    }));
                    nextStep();
                  }}
                  type="submit"
                  className="button border ml-1 w-4 h-4"
                >
                  <ChevronRight size={14} />
                </button>
              </form>
            </div>
          )}
          {activeStep === 27 && (
            <div className="flex flex-col justify-center items-center gap-2 mt-8">
              {error && (
                <p className="bg-red-600 pl-2 pr-2">
                  Log in is not valid. Pleasse Try again
                </p>
              )}
              <form className="flex flex-col justify-center items-center gap-2">
                <div>
                  <label className="mr-2" htmlFor="id">
                    Employee ID
                  </label>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    className="input border-b"
                    minLength={3}
                    maxLength={25}
                    required
                  />
                </div>

                <div>
                  <label className="mr-2" htmlFor="pin">
                    Pin
                  </label>
                  <input
                    id="pin"
                    name="pin"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="input border-b"
                    required
                    maxLength={6}
                    minLength={6}
                  />
                </div>

                <button
                  formAction={(e) => {
                    setReturnUser(() => ({
                      employee_id: e.get("id") as string,
                      pin: e.get("pin") as string,
                    }));
                    nextStep();
                  }}
                  type="submit"
                  className="button border w-20 m-4 flex flex-row justify-center items-center"
                >
                  Login <ChevronRight size={14} />
                </button>
                <button
                  onClick={() => {
                    setActiveStep(1);
                    setError(false);
                  }}
                  className="button border w-28 m-4 pl-2 pr-2 flex flex-row justify-center items-center"
                >
                  Go Back
                </button>
              </form>
            </div>
          )}
          {activeStep === 28 && (
            <div className="flex flex-row justify-center items-center gap-4 mt-8">
              <Loader />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
