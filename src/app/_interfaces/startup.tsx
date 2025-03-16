"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { sourceCode } from "../layout";
import { UtilityButton } from "@/components/ui/utility-button";
import { ChevronRight } from "lucide-react";
import { Employee } from "@/lib/interfaces";
import { Homeworlds, Specialty } from "@/lib/definitions";
import { customAlphabet } from "nanoid";
import { on } from "events";

interface StartupProps {
    open: boolean;
    onClose?: () => void;
}

export const Startup = (props: StartupProps) => {
    const { open, onClose } = props;
    const [isOpen, setIsOpen] = useState(open);
    const [activeStep, setActiveStep] = useState(1)
    const [returningUser, setReturningUser] = useState<boolean>()
    const [error, setError] = useState<string>();
    const [formData, setFormData] = useState<Employee>({
        name: "",
        race: "",
        age: 0,
        specialty: "",
        pin: "",
        employee_id: "",
        banned: false,
    });

    const nextStep = () => {
        setActiveStep(activeStep + 1)
    }

    const endstartup = () => {
        onClose?.();
    };

    const generateId = () => {
        const nanoid = customAlphabet('1234567890abcdef', 10);
        const number = nanoid(10);
        console.log(number);
        setFormData((prev) => ({ ...prev, employee_id: number }));
        console.log(formData);
    };

    return (
        <div className="flex w-full h-full justify-center items-center">
            {isOpen && <div>
                {(activeStep <= 2) && <TypeAnimation
                    omitDeletionAnimation={true}
                    sequence={[
                        'Welcome to the Citadel Ministry of Employment & Labor\'s \nCareer Advancement Program',
                        800,
                        'Welcome to the Citadel Ministry of Employment & Labor\'s \nCareer Advancement Program\n\nPlease Wait...',
                        5000,
                        'Are you a returning user?',
                        () => nextStep()
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={0}
                    className={`${sourceCode.variable}`}
                    style={{ whiteSpace: 'pre-line', display: 'block', textAlign: "center" }}
                />}
                {(activeStep === 3 || activeStep === 4) &&
                    <TypeAnimation
                        omitDeletionAnimation={true}
                        sequence={[
                            'Please wait...',
                            5000,
                            'Welcome!\n We are excited you decided to enroll!',
                            2000,
                            'Welcome!\n We are excited you decided to enroll! \n\n We will need to ask you a few questions before finding the career that \nbest fits for you.',
                            2000,
                            'Welcome!\n We are excited you decided to enroll! \n\n We will need to ask you a few questions before finding the career that \nbest fits for you.\n\n Please wait...',
                            5000,
                            'What is your first and last name?',
                            800,
                            () => nextStep()
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={0}
                        className={`${sourceCode.variable}`}
                        style={{ whiteSpace: 'pre-line', display: 'block', textAlign: "center" }}
                    />}
                {(activeStep === 5 || activeStep === 6) &&
                    <TypeAnimation
                        omitDeletionAnimation={true}
                        sequence={[
                            'Please wait...',
                            5000,
                            `Welcome ${formData.name}!`,
                            2000,
                            `Welcome ${formData.name}! \n\n Please select your home world.`,
                            () => nextStep()
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={0}
                        className={`${sourceCode.variable}`}
                        style={{ whiteSpace: 'pre-line', display: 'block', textAlign: "center" }}
                    />}
                {(activeStep === 7 || activeStep === 8) &&
                    <TypeAnimation
                        omitDeletionAnimation={true}
                        sequence={[
                            'Please wait...',
                            5000,
                            `What is your age?`,
                            () => nextStep()
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={0}
                        className={`${sourceCode.variable}`}
                        style={{ whiteSpace: 'pre-line', display: 'block', textAlign: "center" }}
                    />}
                {(activeStep === 9 || activeStep === 10) &&
                    <TypeAnimation
                        omitDeletionAnimation={true}
                        sequence={[
                            'Please wait...',
                            5000,
                            'Thank you for your information. \n\n We will now begin the process of finding you a career.',
                            2000,
                            'Thank you for your information. \n\n We will now begin the process of finding you a career. \n\n Please wait...',
                            5000,
                            'Please select a specialty that best fits \n your skill, competencies, and interests. \n\n If you do not see a specialty that fits, select "Other".',
                            () => nextStep()
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={0}
                        className={`${sourceCode.variable}`}
                        style={{ whiteSpace: 'pre-line', display: 'block', textAlign: "center" }}
                    />}
                {(activeStep === 11 || activeStep === 12) &&
                    <TypeAnimation
                        omitDeletionAnimation={true}
                        sequence={[
                            'Please wait...',
                            5000,
                            'Thank you for your information.',
                            2000,
                            'Thank you for your information. \n\n We want to get to know you a little better.',
                            2000,
                            'Thank you for your information. \n\n We want to get to know you a little better.\n Please answer as honestly as possible.',
                            2000,
                            'Thank you for your information. \n\n We want to get to know you a little better.\n Please answer as honestly as possible. \n\n Please wait...',
                            5000,
                            'Do you work well with others?',
                            () => nextStep()
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={0}
                        className={`${sourceCode.variable}`}
                        style={{ whiteSpace: 'pre-line', display: 'block', textAlign: "center" }}
                    />}
                {(activeStep === 13 || activeStep === 14) &&
                    <TypeAnimation
                        omitDeletionAnimation={true}
                        sequence={[
                            'Please wait...',
                            5000,
                            'Would you say you are a happy person?',
                            () => nextStep()
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={0}
                        className={`${sourceCode.variable}`}
                        style={{ whiteSpace: 'pre-line', display: 'block', textAlign: "center" }}
                    />}
                {(activeStep === 15 || activeStep === 16) &&
                    <TypeAnimation
                        omitDeletionAnimation={true}
                        sequence={[
                            'Please wait...',
                            5000,
                            'Are you prone to profound thoughts?',
                            5000,
                            () => nextStep()
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={0}
                        className={`${sourceCode.variable}`}
                        style={{ whiteSpace: 'pre-line', display: 'block', textAlign: "center" }}
                    />}
                {(activeStep === 17 || activeStep === 18) &&
                    <TypeAnimation
                        omitDeletionAnimation={true}
                        sequence={[
                            'Please wait...',
                            5000,
                            'Thank you.',
                            5000,
                            'We have found a career for you!',
                            2000,
                            'We have found a career for you! \n\n Please wait while we generate your employee ID.',
                            2000,
                            'We have found a career for you! \n\n Please wait while we generate your employee ID. Please wait...',
                            () => generateId(),
                            5000,
                            `Your employee ID is ${formData.employee_id}. \n\n You will need this to log in to access your C-MELCAP account. \n Please keep it safe.`,
                            2000,
                            `Your employee ID is ${formData.employee_id}. \n\n You will need this to log in to access your C-MELCAP account. \n Please keep it safe. \n\n Please select a 6-digit pin for your account.`,
                            () => nextStep()
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={0}
                        className={`${sourceCode.variable}`}
                        style={{ whiteSpace: 'pre-line', display: 'block', textAlign: "center" }}
                    />}
                {(activeStep === 19 || activeStep === 20) &&
                    <TypeAnimation
                        omitDeletionAnimation={true}
                        sequence={[
                            'Please wait...',
                            5000,
                            'Thank you.',
                            5000,
                            'You have been successfully enrolled in the \nCitadel Ministry of Employment & Labor\'s \nCareer Advancement Program.',
                            5000,
                            'Remember to always be yourself.',
                            5000,
                            'Redirecting to the terminal...',
                            10000,
                            () => endstartup(),
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={0}
                        className={`${sourceCode.variable}`}
                        style={{ whiteSpace: 'pre-line', display: 'block', textAlign: "center" }}
                    />}
                {activeStep === 2 && (
                    <div className="flex flex-row justify-center items-center gap-4 mt-8">
                        <UtilityButton text="Yes" />
                        <UtilityButton text="No" onClick={() => {
                            setReturningUser(false);
                            nextStep();
                        }} />
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
                                required />
                            <button formAction={(e) => {
                                setFormData((prev) => ({ ...prev, name: e.get("name") as string }));
                                nextStep();
                            }}
                                type="submit"
                                className="button border ml-1 w-4 h-4">
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
                                        setFormData((prev) => ({ ...prev, race: key }))
                                        nextStep();
                                    }}
                                    className="button p-2">
                                    {value}
                                </button>
                                {index < Object.entries(Homeworlds).length - 1 && <span className="text-gray-500">-</span>}
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
                            <button formAction={(e) => {
                                setFormData((prev) => ({ ...prev, age: Number(e.get("age")) }));
                                nextStep();
                            }}
                                type="submit"
                                className="button border ml-1 w-4 h-4">
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
                                        setFormData((prev) => ({ ...prev, specialty: spec }))
                                        nextStep();
                                    }}
                                    className="button p-2">
                                    {spec}
                                </button>
                                {index < Specialty.length - 1 && <span className="text-gray-500">-</span>}
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
                    <div className="flex flex-row justify-center items-center gap-2 mt-8">
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
                            <button formAction={(e) => {
                                setFormData((prev) => ({ ...prev, pin: e.get("pin") as string }));
                                nextStep();
                            }}
                                type="submit"
                                className="button border ml-1 w-4 h-4">
                                <ChevronRight size={14} />
                            </button>
                        </form>
                    </div>
                )}
            </div>
            }
        </div>
    );
};