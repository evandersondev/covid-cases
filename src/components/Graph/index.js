import React, { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'

import { objectToArray } from '../../utils/objectToArray'

export default ({ cases }) => {
  const informationCases = objectToArray(cases)

  return (
    <div>
      <Chart
        width={'100%'}
        height={'30.0rem'}
        chartType="PieChart"
        loader={<div>Loading...</div>}
        data={[['todayCases', 'soday Deaths'], ...informationCases]}
        options={{
          // legend: 'none',
          pieSliceText: 'label',
          backgroundColor: 'transparent',
          chartArea: { left: 0, top: 0, right: 0, bottom: 0 },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )
}
