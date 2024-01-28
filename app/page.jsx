import Image from 'next/image'
import TicketCard from './(components)/TicketCard'

export default function Home() {
  return (
    <div className='p-5'>
      <div className='lg:grid grid-cols-2 xl:grid-cols-4'>
    <TicketCard/>
    </div>
    </div>
  )
}