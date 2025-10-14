import { Course } from '@/types/course'
import Link from 'next/link'
import React from 'react'

interface CoursesProps {
  courses: Course[]
}

export default function Courses({ courses }: CoursesProps) {
  return (
    <div className="grid-1">
      {courses.map((course: Course) => (
        <div key={course.id} className="bg-blue-200 p-4 m-4 rounded-lg">
          <h2 className="text-lg">{course.title}</h2>
          <small>Level: {course.level}</small>
          <p className="mb-4">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg mb-4"
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  )
}
