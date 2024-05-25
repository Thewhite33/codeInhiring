import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Card className="w-[650px] bg-[#f5f3ff]">
        <CardHeader>
          <CardTitle className='text-primary'>CodeINBlogs Internship Application ⭐</CardTitle>
          <h1 className='text-primary text-[30px]'>About Us</h1>
        </CardHeader>
        <CardContent>
          <h1 className='text-primary'><span className='text-[#3730a3] text-[20px]'>CodeINBlogs</span> is the fastest-growing community for developers to interact, learn, and grow together. We organize hackathons, events, and live sessions, so people can connect and share ideas. It's all about helping each other out and getting better at what we do.</h1>
          <h1 className='text-primary font-medium mt-10'>For Queries and Doubts, contact us at:</h1>
          <h1 className='text-blue-500 underline'>anshul@codeinblogs.co</h1>
          or
          <h1 className='text-blue-500 underline'>anshulsoni2022@gmail.com</h1>
          or
          <h1 className='text-blue-500 underline'>codeinblogs@gmail.com</h1>
          <h1 className='mt-3 italic'>Kindly contact us through any one  above mentioned mail id. </h1>
          <h1 className='mt-5'>Ready to be part of a movement that nurtures student potential? Apply now and become a catalyst for empowering students across the nation! ✨</h1>
        </CardContent>
      </Card>
    </div>
  )
}

export default About