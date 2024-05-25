import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';

const Skills = ({ setIsValid, setFormData, formData }) => {
  const [position, setPosition] = useState('Select Position');
  const [skillsDescription, setSkillsDescription] = useState('');
  const [portfolioLinks, setPortfolioLinks] = useState('');
  const [whyInterested, setWhyInterested] = useState('');
  const [expectations, setExpectations] = useState('');
  const [availability, setAvailability] = useState('');

  useEffect(() => {
    const isValid =
      position &&
      skillsDescription.trim() &&
      portfolioLinks.trim() &&
      whyInterested.trim() &&
      expectations.trim() &&
      availability.trim();
    setIsValid(isValid);
    setFormData((prevData) => ({
      ...prevData,
      position,
      skillsDescription,
      portfolioLinks,
      whyInterested,
      expectations,
      availability,
    }));
  }, [position, skillsDescription, portfolioLinks, whyInterested, expectations, availability, setIsValid, setFormData]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <Card className="w-[650px] bg-[#f5f3ff]">
        <CardHeader>
          <CardTitle className='text-primary'>CodeINBlogs Internship Application ⭐</CardTitle>
          <h1 className='text-primary text-[30px]'>Skills</h1>
        </CardHeader>
        <CardContent>
          <div className='mb-3'>
            <Label>Position Interested In: </Label>
            <DropdownMenu className='ml-3'>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' className='max-w-40'>{position}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem value={position} onClick={() => setPosition('Graphic Designer')}>Graphic Designer</DropdownMenuItem>
                <DropdownMenuItem value={position} onClick={() => setPosition('Web Developer')}>Web Developer</DropdownMenuItem>
                <DropdownMenuItem value={position} onClick={() => setPosition('Content Writer')}>Content Writer</DropdownMenuItem>
                <DropdownMenuItem value={position} onClick={() => setPosition('Event Management Lead')}>Event Management Lead</DropdownMenuItem>
                <DropdownMenuItem value={position} onClick={() => setPosition('Networking Manager')}>Networking Manager</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
            <Label htmlFor="skillsDescription" className='text-primary'>Describe any relevant skills and experience related to the position you are applying for.</Label>
            <Input
              type="text"
              id="skillsDescription"
              placeholder="Skills Description"
              value={skillsDescription}
              onChange={(e) => setSkillsDescription(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
            <Label htmlFor="portfolioLinks" className='text-primary'>If applicable, provide links or details of any portfolios, projects, or work samples.</Label>
            <Input
              type="text"
              id="portfolioLinks"
              placeholder="Portfolio Links"
              value={portfolioLinks}
              onChange={(e) => setPortfolioLinks(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
            <Label htmlFor="whyInterested" className='text-primary'>Why are you interested in the internship position you are applying for?</Label>
            <Input
              type="text"
              id="whyInterested"
              placeholder="Why Interested"
              value={whyInterested}
              onChange={(e) => setWhyInterested(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
            <Label htmlFor="expectations" className='text-primary'>What do you hope to gain from this experience?</Label>
            <Input
              type="text"
              id="expectations"
              placeholder="Expectations"
              value={expectations}
              onChange={(e) => setExpectations(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
            <Label htmlFor="availability" className='text-primary'>Specify the days and hours you are available for the internship.</Label>
            <Input
              type="text"
              id="availability"
              placeholder="Availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;