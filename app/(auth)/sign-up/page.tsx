"use client"
import FooterLink from '@/components/forms/FooterLink'
import InputField from '@/components/forms/InputField'
import SelectField from '@/components/forms/SelectField'
import { Button } from '@/components/ui/button'
import { signUpWithEmail } from '@/lib/actions/auth.actions'
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { CountrySelectField } from "@/components/forms/CountrySelectField";




const SignupPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      country: 'India',
      investmentGoals: 'Growth',
      riskTolerance: 'Medium',
      preferredIndustry: 'Technology'
    },
    mode: 'onBlur'
  })

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const result = await signUpWithEmail(data);
      if (result.success) router.push('/')

    } catch (error) {
      console.log(error)
      toast.error('Sign up failed', {
        description: error instanceof Error ? error.message : 'Failed to create an account'
      });
    }
  }
  return (
    <>
      <h1 className='form-title'>Sign-up & Personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <InputField
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
          register={register}
          error={errors.fullName}
          validation={{ required: true, minLength: 2 }}
        />

        <InputField
          name="email"
          label="Email"
          placeholder="test@gmail.com"
          register={register}
          error={errors.email}
          validation={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address'
            }
          }}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter a password"
          type='password'
          register={register}
          error={errors.password}
          validation={{ required: 'password is required', minLength: 8 }}
        />

        {/*Country*/}
        <CountrySelectField
          name="country"
          label="Country"
          control={control}
          error={errors.country}
          required
        />

        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goals"
          control={control}
          options={INVESTMENT_GOALS}
          error={errors.investmentGoals}
          required
        />

        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk level"
          control={control}
          options={RISK_TOLERANCE_OPTIONS}
          error={errors.riskTolerance}
          required
        />

        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Select your preferred industry"
          control={control}
          options={PREFERRED_INDUSTRIES}
          error={errors.preferredIndustry}
          required
        />


        <Button type="submit" disabled={isSubmitting} className='yellow-btn w-full mt-5'>
          {isSubmitting ? `Creating Account` : `Start your Investing Journey`}
        </Button>

        <FooterLink text="Already have an account" linkText='Sign in' href="/sign-in" />
      </form>
    </>
  )
}

export default SignupPage