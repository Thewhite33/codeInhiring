import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Basic = ({ setIsValid, setFormData, formData }) => {
  const [fullName, setFullName] = useState(formData.fullName || '');
  const [email, setEmail] = useState(formData.email || '');
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || '');
  const [institution, setInstitution] = useState(formData.institution || '');
  const [degree, setDegree] = useState(formData.degree || '');
  const [major, setMajor] = useState(formData.major || '');
  const [graduationYear, setGraduationYear] = useState(formData.graduationYear || '');

  useEffect(() => {
    const isValid =
      fullName.trim() &&
      email.trim() &&
      phoneNumber.trim() &&
      institution.trim() &&
      degree.trim() &&
      major.trim() &&
      graduationYear.trim();
    setIsValid(isValid);
    setFormData((prevData) => ({
      ...prevData,
      fullName,
      email,
      phoneNumber,
      institution,
      degree,
      major,
      graduationYear,
    }));
  }, [fullName, email, phoneNumber, institution, degree, major, graduationYear, setIsValid, setFormData]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <Card className="w-[650px] bg-[#f5f3ff]">
        <CardHeader>
          <CardTitle className='text-primary'>CodeINBlogs Internship Application ⭐</CardTitle>
          <h1 className='text-primary text-[30px] text-bold'>Personal Details</h1>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
            <Label htmlFor="name" className='text-primary'>Full Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
            <Label htmlFor="email" className='text-primary'>Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
            <Label htmlFor="number" className='text-primary'>Phone Number</Label>
            <Input
              type="number"
              id="number"
              placeholder="Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
            <Label htmlFor="inst" className='text-primary'>Current Education Institution</Label>
            <Input
              type="text"
              id="inst"
              placeholder=""
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
            <Label htmlFor="degree" className='text-primary'>Degree Earned/In Progress</Label>
            <Input
              type="text"
              id="degree"
              placeholder=""
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
            <Label htmlFor="major" className='text-primary'>Major/Field of Study</Label>
            <Input
              type="text"
              id="major"
              placeholder=""
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
            <Label htmlFor="graduationYear" className='text-primary'>Graduation Year</Label>
            <Input
              type="text"
              id="graduationYear"
              placeholder=""
              value={graduationYear}
              onChange={(e) => setGraduationYear(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Basic;
