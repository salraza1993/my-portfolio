import React from 'react'
import LoaderLogo from './elements/LoaderLogo';
import LoaderCircleGrid from './elements/LoaderCircleGrid';
import LoaderLine_V from './elements/LoaderLine_V';
import LoaderLine_H from './elements/LoaderLine_H';
import LoaderTiltLineRight from './elements/LoaderTiltLineRight';
import LoaderTiltLineLeft from './elements/LoaderTiltLineLeft';

export default function PrimaryLoader() {
  return <section className='primary-loader'>
    <div className="loader-logo-rect">
      <div className="loader-logo-rect__lines">
        <div className="__v-tilt-lines align--left">
          <LoaderTiltLineLeft />
        </div>
        <div className="__v-tilt-lines align--right">
          <LoaderTiltLineRight />
        </div>
        <div className="__v-lines align--left">
          <LoaderLine_V />
          <LoaderLine_V />
        </div>
        <div className="__v-lines align--center">
          <LoaderLine_V />
          <LoaderLine_V />
        </div>
        <div className="__v-lines align--right">
          <LoaderLine_V />
          <LoaderLine_V />
        </div>
        <div className="__h-lines align--top">
          <LoaderLine_H />
          <LoaderLine_H />
        </div>
        <div className="__h-lines align--bottom">
          <LoaderLine_H />
          <LoaderLine_H />
        </div>
      </div>
      <div className="__grid">
        <LoaderCircleGrid />
      </div>
      <div className="__logo">
        <LoaderLogo />
      </div>
    </div>
  </section>
}
