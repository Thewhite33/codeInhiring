'use client'
import React, {  useState } from 'react'
import Progress from './_components/Progress';
import About from './_pages/About';
import Basic from './_pages/Basic';
import Skills from './_pages/Skills';
import Roles from './_pages/Roles';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { addDoc } from 'firebase/firestore';
import { applyRef } from '@/firebase';

const page = () => {
  const { toast } = useToast()
  const [currentstep,setCurrentstep] = useState(0);
  const [isBasicValid, setIsBasicValid] = useState(false);
  const [isSkillsValid, setIsSkillsValid] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    institution: '',
    degree: '',
    major: '',
    graduationYear: '',
    position: '',
    skillsDescription: '',
    portfolioLinks: '',
    whyInterested: '',
    expectations: '',
    availability: '',
  });
  const handleSubmit = async() => {
    console.log(formData);
    try {
      await addDoc(applyRef,formData)
      toast({
        title:"Application Sent",
        description: "Your application has been recieved",
      })
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your application try again later.",
      })
    }
  }
  const isNextDisabled = () => {
    if (currentstep === 2) return !isBasicValid;
    if (currentstep === 3) return !isSkillsValid;
    return false;
  };
  const steps = [
    <About/>,
    <Roles/>,
    <Basic setIsValid={setIsBasicValid} setFormData={setFormData} formData={formData}/>,
    <Skills setIsValid={setIsSkillsValid} setFormData={setFormData} formData={formData}/>,
  ]
  const handleNext = () => {
    if(currentstep<steps.length-1){
      setCurrentstep(currentstep+1)
    }
  }
  const handlePrev = () => {
    if(currentstep>0){
      setCurrentstep(currentstep-1)
    }
  }
  return (
    <div>
      <div className='mx-[300px] mb-2'>
        <Progress currentStep={currentstep}/>
      </div>
      <div>
        {steps[currentstep]}
      </div>
      <div className='flex justify-end mr-[100px] gap-5'>
        <Button onClick={handlePrev} disabled={currentstep===0} variant='outline'>Prev</Button>
        {currentstep<steps.length-1 ? (
          <Button onClick={handleNext} disabled={isNextDisabled()} className='hover:bg-inherit hover:text-inherit hover:border-inherit'>Next</Button>
        ):(<Button onClick={handleSubmit} disabled={isNextDisabled()} className='hover:bg-inherit hover:text-inherit hover:border-inherit'>Submit</Button>)}
      </div>
    </div>
  )
}

export default page