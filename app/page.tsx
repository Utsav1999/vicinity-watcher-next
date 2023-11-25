'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="mx-auto bg-gray-300 p-4 text-blue-500/100 text-center main-height">
      <div>
        <h1 className="text-5xl font-extrabold">Welcome To Vicinity Watcher App!</h1>
        <p className="text-2xl pt-12 px-5">
          This application helps you to get latest wather data of your vicinity. Also, you can log incident happened around your vicinity and can ask for service request.
        </p>
        <h2 className="text-3xl font-bold pt-8">Contact Us</h2>
        <div className="grid grid-cols-2 pt-6">
          <div className='col-span-2'>
            Email: support@vicinity-watcher.xyz
          </div>
          <div className='col-span-2'>
            Phone: +91 - 0123456789
          </div>
          <div className="col-span-2">
            <p>Our support executives are available <span className="font-bold">Mon - Fri 10:00 - 18:00 IST</span></p>
          </div>
        </div>
      </div>
      <style jsx>
        {
          `
            .main-height {
              height: 80vh;
            }

          `
        }
      </style>
    </main>
  )
}
