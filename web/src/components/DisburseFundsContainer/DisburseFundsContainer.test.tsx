import { render } from '@redwoodjs/testing/web'

import FundsContainer from './FundsContainer'

describe('DisburseFundsContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FundsContainer />)
    }).not.toThrow()
  })
})
