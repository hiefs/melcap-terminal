"use client";

import { Window } from "@/components/standard-window";
import { Loader } from "@/components/ui/loading-dots";
import { Employee } from "@/lib/interfaces";
import { createEmployee } from "@/utils/employee";
import { useState } from "react";

export const WelcomeWindow = () => {
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (formData: FormData) => {
    setLoading(true);
    setSubmit(true);
    const employee: Employee = {
      name: formData.get("name") as string,
      race: formData.get("race") as string,
      age: Number(formData.get("age")),
      specialty: formData.get("specialty") as string,
      pin: formData.get("pin") as string,
      banned: false,
    };
    createEmployee(employee).then((res) => {
      setLoading(false);
    });
  };

  return (
    <Window width={400} height={400} title="Welcome" start={{ x: 300, y: 200 }}>
      {loading ? (
        <div className="flex flex-col justify-center items-center h-full mt-14">
          <Loader />
        </div>
      ) : (
        <div>
          {!submit ? (
            <form>
              <div className="mb-4">
                <label className="mr-2" htmlFor="name">
                  Name:
                </label>
                <input
                  className="input border"
                  id="name"
                  name="name"
                  type="text"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="mr-2" htmlFor="race">
                  Race:
                </label>
                <input
                  className="input border"
                  id="race"
                  name="race"
                  type="text"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="mr-2" htmlFor="age">
                  Age
                </label>
                <input
                  className="input border"
                  id="age"
                  name="age"
                  type="number"
                  max={2000}
                  maxLength={4}
                  minLength={2}
                  min={18}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="mr-2" htmlFor="specialty">
                  Specialty
                </label>
                <input
                  className="input border"
                  id="specialty"
                  name="specialty"
                  type="text"
                  required
                />
              </div>
              <div>
                <label className="mr-2" htmlFor="pin">
                  Pin:
                </label>
                <input
                  className="input border"
                  id="pin"
                  name="pin"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  required
                  maxLength={6}
                  minLength={6}
                />
              </div>
              <div className="flex justify-center mt-14 gap-6">
                <button
                  className="button border pl-4 pr-4"
                  formAction={(f) => handleSubmit(f)}
                  disabled={submit}
                >
                  Log in
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col justify-center items-center h-full w-full mt-14">
              <p>Application Submitted.</p>
              <p className="mt-8">Welcome to the </p>
              <p>Citadel Employment System</p>
            </div>
          )}
        </div>
      )}
    </Window>
  );
};
