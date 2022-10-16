import React from 'react'
import PlanCard from './PlanCard'


const PricingTeeth = () => {
    return (
        <div className='flex flex-col items-center bg-black p-5'>
            <div className="mb-2 mt-12 text-center">
                <h1 className='mb-4 text-6xl font-black text-white'>Pricing</h1>
                <p className='text-white'>The time we need to design a job, whatever it is , is up to 24 hours.
                    <br />
                    For more please Contact Us</p>
            </div>
            <div className="grid gap-10 grid-cols-4 grid-rows-3">
                <PlanCard
                    color='#78E3FC'
                    name='Basic'
                    price='15'
                    description='-Design with gingiva for large works must be paid extra.'
                    features={['1 user', '2 user', '10gb projects']}
                    btnText='Contact us' />
                <PlanCard
                    color='#78E3FC'
                    name='Basic'
                    description='-Design with gingiva for large works must be paid extra.'
                    features={['1 user', '2 user', '10gb projects']}
                    btnText='Contact us' />
                <PlanCard
                    color='#78E3FC'
                    name='Basic'
                    description='-Design with gingiva for large works must be paid extra.'
                    features={['1 user', '2 user', '10gb projects']}
                    btnText='Contact us' />

                <PlanCard
                    color='#78E3FC'
                    name='Basic'
                    description='-Design with gingiva for large works must be paid extra.'
                    features={['1 user', '2 user', '10gb projects']}
                    btnText='Contact us' />
                <PlanCard
                    color='#78E3FC'
                    name='Basic'
                    description='-Design with gingiva for large works must be paid extra.'
                    features={['1 user', '2 user', '10gb projects']}
                    btnText='Contact us' />
                <PlanCard
                    color='#78E3FC'
                    name='Basic'
                    description='-Design with gingiva for large works must be paid extra.'
                    features={['1 user', '2 user', '10gb projects']}
                    btnText='Contact us' />

                <PlanCard
                    color='#78E3FC'
                    name='Basic'
                    description='-Design with gingiva for large works must be paid extra.'
                    features={['1 user', '2 user', '10gb projects']}
                    btnText='Contact us' />

                <PlanCard
                    color='#78E3FC'
                    name='Basic'
                    description='-Design with gingiva for large works must be paid extra.'
                    features={['1 user', '2 user', '10gb projects']}
                    btnText='Contact us' />

                <PlanCard
                    color='#78E3FC'
                    name='Basic'
                    description='-Design with gingiva for large works must be paid extra.'
                    features={['1 user', '2 user', '10gb projects']}
                    btnText='Contact us' />

                <PlanCard
                    color='#78E3FC'
                    name='Basic'
                    description='-Design with gingiva for large works must be paid extra.'
                    features={['1 user', '2 user', '10gb projects']}
                    btnText='Contact us' />

                <PlanCard
                    color='#78E3FC'
                    name='Basic'
                    description='-Design with gingiva for large works must be paid extra.'
                    features={['1 user', '2 user', '10gb projects']}
                    btnText='Contact us' />

                <PlanCard
                    color='#78E3FC'
                    name='Basic'
                    description='-Design with gingiva for large works must be paid extra.'
                    features={['1 user', '2 user', '10gb projects']}
                    btnText='Contact us' />





            </div>
        </div>
    )
}

export default PricingTeeth