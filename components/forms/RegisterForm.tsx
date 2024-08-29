"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SelectItem } from "@/components/ui/select";
import {
  Doctors,
  GenderOptions,
  PatientFormDefaultValues,
} from "@/constants";
import { registerPatient } from "@/lib/actions/patient.actions";
import { PatientFormValidation } from "@/lib/validation";

import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import { FileUploader } from "../FileUploader";
import SubmitButton from "../SubmitButton";

const RegisterForm = ({ user }: { user: User }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof PatientFormValidation>>({
    resolver: zodResolver(PatientFormValidation),
    defaultValues: {
      ...PatientFormDefaultValues,
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  });

  const onSubmit = async (values: any) => {  // Use 'any' type for values
    console.log("onSubmit function called");
    console.log("Form values:", values);

    setIsLoading(true);

    console.log("Form submitted with values:", JSON.stringify(values, null, 2));

    try {
      const patient = {
        userId: user.$id,
        name: values.name,
        email: values.email,
        phone: values.phone,
        birthDate: new Date(values.birthDate),
        gender: values.gender,
        currentGoal: values.currentGoal,
        currentlyStoping: values.currentlyStoping,
        stuckShape: values.stuckShape,
        whyChange: values.whyChange,
        privacyConsent: values.privacyConsent,
      };

      console.log("Registering patient with data:", JSON.stringify(patient, null, 2));

      const newPatient = await registerPatient(patient);

      console.log("Response from registerPatient:", JSON.stringify(newPatient, null, 2));

      if (!newPatient) throw new Error("Failed to create new patient");

      console.log("Patient registration successful, redirecting...");
      router.push(`/patients/${user.$id}/new-appointment`);
    } catch (error) {
      console.error("Registration failed:", error);
      alert(`Registration failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      console.log("Form submission process completed");
      setIsLoading(false);
    }
  };

  return (
      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            console.log("Form submit event triggered");
            try {
              console.log("Before form handleSubmit");
              form.handleSubmit(onSubmit)(e);
              console.log("After form handleSubmit");
            } catch (error) {
              console.error("Error in form submission:", error);
            }
          }}
          className="flex-1 space-y-12"
        >
        <section className="space-y-4">
          <h1 className="header">Welcome 🏋</h1>
          <p className="text-dark-700">Let us know more about yourself.</p>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>
        </section>

          {/* NAME */}
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Full Name"
            placeholder="John Doe"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />

          {/* EMAIL & PHONE */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="email"
              label="Email address"
              placeholder="johndoe@gmail.com"
              iconSrc="/assets/icons/email.svg"
              iconAlt="email"
            />

            <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="phone"
              label="Phone Number"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* BirthDate & Gender */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="birthDate"
              label="Date of birth"
            />

            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="gender"
              label="Gender"
              renderSkeleton={(field) => (
                <FormControl>
                  <RadioGroup
                    className="flex h-11 gap-6 xl:justify-between"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {GenderOptions.map((option, i) => (
                      <div key={option + i} className="radio-group">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>

          {/* Fitness Goals */}
          <section className="space-y-6">
            <div className="mb-9 space-y-1">
              <h2 className="sub-header">Fitness Goals</h2>
            </div>

            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="currentGoal"
              label="What's your current Goal?"
              placeholder="Bulk, cut or get fit"
            />

            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="currentlyStopping"
              label="What's currently stopping you from reaching that goal?"
              placeholder="Diet, work or School"
            />

            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="stuckShape"
              label="How long have you been stuck in this shape?"
            />

            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="whyChange"
              label="Why do you want to make this transformation?"
            />
          </section>

          {/* Consent and Privacy */}
          <section className="space-y-6">
            <div className="mb-9 space-y-1">
              <h2 className="sub-header">Consent and Privacy</h2>
            </div>

            <CustomFormField
              fieldType={FormFieldType.CHECKBOX}
              control={form.control}
              name="privacyConsent"
              label="I consent to receive fitness training from Shayan Akram"
            />
          </section>

          <SubmitButton isLoading={isLoading}>Submit and Continue</SubmitButton>
        </form>
      </Form>
    );
};

export default RegisterForm;
