import React from 'react' 
import Link from 'next/link' 
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator } from '@/components/ui/breadcrumb'


type Props = {}

const page = (props: Props) => {
  return (
    //Breacdcrumb
    <div>
        <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/">Choose your fighter</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/components">Jayden Smith</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Stories</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
        {/* profile */}
    <div>
        <div>
            <h1>Jayden Smith</h1>
            <p>Story</p>
        </div>
    </div>


    </div>
  )
}
export default page
///latest
