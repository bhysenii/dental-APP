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
            <div className="mt-10 grid gap-10 grid-cols-4 grid-rows-3">
                <PlanCard
                    color='#78E3FC'
                    name='Anatomic Crown'
                    price='5 '
                    features={['-Design with gingiva for large works must be paid extra.', '-For more please Contact us']}
                    btnText='Contact us' />
                <PlanCard
                    color='#78E3FC'
                    name='Coping'
                    price='5'
                    features={['-Design with gingiva for large works must be paid extra.', '-For more please Contact us']}
                    btnText='Contact us' />
                <PlanCard
                    color='#78E3FC'
                    name='Offset coping'
                    price='3'
                    features={['-Design with gingiva for large works must be paid extra.', '-For more please Contact us']}
                    btnText='Contact us' />

                <PlanCard
                    color='#78E3FC'
                    name='Inlay/Onlay'
                    price='5'
                    description=''
                    features={[]}
                    btnText='Contact us' />
                <PlanCard
                    color='#78E3FC'
                    name='Veneer'
                    price='5'
                    description=''
                    features={[]}
                    btnText='Contact us' />
                <PlanCard
                    color='#78E3FC'
                    name='Partial denture'
                    price='25'
                    description=''
                    features={[]}
                    btnText='Contact us' />

                <PlanCard
                    color='#78E3FC'
                    name='Full denture'
                    price='25'
                    description=''
                    features={[]}
                    btnText='Contact us' />

                <PlanCard
                    color='#78E3FC'
                    name='Bite splint'
                    price='10'
                    description=''
                    features={[]}
                    btnText='Contact us' />

                <PlanCard
                    color='#78E3FC'
                    name='Primary telescopic crown'
                    price='10'
                    description=''
                    features={[]}
                    btnText='Contact us' />

                <PlanCard
                    color='#78E3FC'
                    name='Secondary telescopic crown'
                    price='10'
                    description=''
                    features={[]}
                    btnText='Contact us' />

                <PlanCard
                    color='#78E3FC'
                    name='Attachment'
                    price='10'
                    description=''
                    features={[]}
                    btnText='Contact us' />

                <PlanCard
                    color='#78E3FC'
                    name='Bars'
                    price='20'
                    description=''
                    features={[]}
                    btnText='Contact us' />





            </div>
        </div>
    )
}

export default PricingTeeth