"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { providers } from "@/constants/authProviders";
import { Button } from "../ui/button";

type SignInRequest = {
  email: string;
};

function SignInForm({ signUp }: { signUp?: boolean }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const {
    formState: { isValid },
    handleSubmit,
  } = methods;

  const [error, setError] = useState("");
  const clearError = () => {
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  /* Handle submit */
  const onSubmit: SubmitHandler<SignInRequest> = async (payload) => {
    try {
      setLoading(true);

      const result = await signIn("email", {
        redirect: false,
        callbackUrl: "/profile",
        ...payload,
      });

      console.log(result);

      //   if (result?.ok) {
      //     setError("Invalid email or password");
      //     clearError();
      //   } else {
      //     router.push("/verify-email");
      //   }
    } catch (err) {
      setError("Invalid email or password");
      clearError();
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    await signIn(provider, {
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className=" space-y-6  p-5 border shadow  rounded-md">
      <div className="flex gap-4 justify-between w-full">
        {providers.map((provider) => (
          <Button
            key={provider.id}
            disabled={provider.disabled}
            className="btn w-[100px] "
            onClick={() => handleSocialLogin(provider.id)}
          >
            <Image
              src={provider.icon}
              alt={`${provider.id} icon`}
              width={30}
              height={30}
              className={`${
                provider.disabled && "filter grayscale opacity-50"
              }`}
            />
          </Button>
        ))}
      </div>
      <div className="w-full flex justify-center">or</div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full  flex flex-col gap-4"
        >
          <p className="text-error">{error}</p>
          <Input name="email" placeholder="example@example.com" type="email" />

          <div className="pt-1 space-y-5">
            <Button
              type="submit"
              // loading={loading}
              disabled={!isValid || loading}
              className="w-full"
            >
              Continue
            </Button>
          </div>
        </form>
      </FormProvider>

      <div className="flex gap-2 font-bold">
        <p>{signUp ? "Already regitered?" : "No account?"}</p>
        <Link className="text-primary" href={signUp ? "/sign-in" : "/sign-up"}>
          {signUp ? "Sign In" : "Sign Up"}
        </Link>
      </div>
    </div>
  );
}

export default SignInForm;
