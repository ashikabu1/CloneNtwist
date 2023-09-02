import React from 'react';
import iStock from '../assets/iStock.jpg'
import web from '../assets/web.jpg'
import oil from '../assets/oil.jpg'
import plant from '../assets/plant.png'

const Card = () => {

  return (
    <div className='card'>

        <div className='card1'>
            <h1 className='h12'>Mine-To-Mill-To-Mine Optimization</h1>

            <p className='para'>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in 
                open pit gold mines by connecting siloed data sources like block models, fleet management systems, 
                stockpile surveys, and plant instruments. This allows your company to better track material flow, and 
                feed properties, identify plan/production discrepancies, and correct resource models and production 
                plans.</p>

                <button className='btn1'>Read More</button>
        </div>

        <div className='card2'>
        <img src={iStock} alt="Logo" />
        </div>

        <div className='card3'>
        <img src={web} alt="Logo" />
        </div>

        <div className='card4'>
            <h1 className='h12'>Sustainability</h1>

            <p className='paraa'>Environmental stewardship is a priority for NTWIST. 
            We help our customers to minimize their sustainability  impact on the planet. 
            Emissions or environmental targets are used alongside productivity targets to 
            define success for our customers.
            </p>

            <p className='paraa'>
            With the increasing relevance of carbon accounting and emissions tracking, 
            NTWIST offers a suite of tools to increase visibility into environmental performance 
            and help processing plants track, manage, optimize, and report key metrics.</p>

                <button className='btn2'>Read More</button>
        </div>

        <div className='card5'>
            <h1 className='h13'>Mineral Processing</h1>

            <p className='para1'>NTWIST offers a number of solutions for mills, 
            concentrators, and leach plants. Our solutions help operations to 
            reduce the effect of feed variability, avoid downtime and increase peak 
            throughput while decreasing energy and reagent consumption.</p>

                <button className='btn3'>Read More</button>
        </div>

        <div className='card6'>
        <img src={oil} alt="Logo" />
        </div>

        <div className='card7'>
        <img src={plant} alt="Logo" />
        </div>

        <div className='card8'>
            <h1 className='h13'>Oil & Gas</h1>

            <p className='para1'>Oil and Gas plants require a high level 
            of control and robustness in their operation due to the high 
            risks to people and environment. </p>

            <p className='paraa'>
            NTWIST helps Oil & Gas customers to analyze historical data, 
            identify opportunities for process control improvements, and 
            reduce variability in any part of the process, thus providing 
            enhanced reliability and safety.</p>

                <button className='btn3'>Read More</button>
        </div>
       


    </div>

    
  )
}

export default Card