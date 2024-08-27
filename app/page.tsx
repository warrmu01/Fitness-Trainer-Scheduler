import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="relative flex h-screen max-h-screen overflow-hidden">
      {isAdmin && <PasskeyModal />}

      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/assets/images/onboarding-img.jpg"
          layout="fill"
          objectFit="cover"
          alt="patient"
          className="filter blur-[8px] brightness-50"
        />
      </div>

      {/* Form Container with Gray Background */}
      <section className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="remove-scrollbar container my-auto p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg">
          <div className="sub-container max-w-[496px]">

            <PatientForm />

            <div className="text-14-regular mt-20 flex justify-between">
              <p className="justify-items-end text-dark-600 xl:text-left">
                © 2024 Shayan Akram
              </p>
              <Link href="/?admin=true" className="text-green-500">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
