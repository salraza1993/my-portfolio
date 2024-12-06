import { myInfo } from '@/app/common/CommonContent';
import Image from 'next/image';
import React from 'react'
import GridColumns from '../GridColumns';

export default function ExtraInfoSection() {
  return (
    <section className='extra-info-section'>
      <div className="wrapper">
        <div className="sub-content-wrapper">
          <div className="sub-content">
            <p>
              In my free time, I enjoy writing about <strong>design & front-end development</strong>, sharing insights on <strong>UI/UX, graphic design, and front-end techniques</strong> to help fellow st and developers improve their skills.
            </p>
            <p>
              I also find joy in exploring <strong>thought-provoking sci-fi movies</strong>, indulging in <strong>great music</strong>, and cherishing <strong>quality moments with my family and friends</strong>.
            </p>
          </div>
          <div className="sub-content__icon">
            <Image src={'/images/clapping-icon.png'} alt={"Clapping Hand"} fill priority />
          </div>
        </div>
      </div>
      <GridColumns />
    </section>
  )
}
