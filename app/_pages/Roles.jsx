import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Roles = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Card className="w-[650px] bg-[#f5f3ff]">
                <CardHeader>
                    <CardTitle className='text-primary'>CodeINBlogs Internship Application ⭐</CardTitle>
                    <h1 className='text-primary text-[30px]'>Explore our exciting roles:</h1>
                </CardHeader>
                <CardContent>
                    <div>
                        <h1><span className='text-primary font-semibold'>Graphic Designer:</span> Create visually stunning designs that captivate and resonate with our audience.</h1>
                        <h1><span className='text-primary font-semibold'>Web Developer:</span> Innovate and build digital solutions that enhance our online presence and user experience. Developer with using Next.js , Framer Motion and GSAP experience is needed.</h1>
                        <h1><span className='text-primary font-semibold'>Content Writer:</span> Craft compelling narratives that inspire and inform our community through various platforms.</h1>
                        <h1><span className='text-primary font-semibold'>Event Management Lead:</span> Get experience of managing tech events and also improves your communication skills by interacting with our audience.</h1>
                        <h1><span className='text-primary font-semibold'>Networking Manager:</span> Establish connections with speakers and industry professionals to facilitate engaging sessions and events within our community.</h1>
                        <h1><span className='text-primary font-semibold'>Internship Duration:</span> 90 days</h1>
                        <h1><span className='text-primary font-semibold'>Application Deadline:</span> 28th May, 2024</h1>
                        <h1 className='text-primary font-bold mt-2'>Perks of joining us:</h1>
                        <h1>Completion Certificate</h1>
                        <h1>LinkedIn recommendations</h1>
                        <h1>Personalized Letter of Recommendation (LOR)</h1>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Roles