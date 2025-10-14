import React from 'react'
import courseData from '../api/courses/data.json'
import { Course } from '@/types/course'
import Courses from '@/components/Courses'

export default function Coursespage() {
  const courses: Course[] = courseData
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <Courses courses={courses} />
    </div>
  )
}
