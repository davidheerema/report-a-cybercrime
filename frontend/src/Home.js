import React from 'react'
import { Router } from '@reach/router'
import { Trans } from '@lingui/macro'
import styled from '@emotion/styled'
import { PhaseBanner } from './components/phase-banner'
import { Summary } from './Summary'
import { PageNotFound } from './PageNotFound'
import { Page1 } from './Page1'
import { Page2 } from './Page2'
import { Urgency } from './Urgency'
import { FileUploadPage } from './FileUpload'
import { AmountOfInfoPage } from './amountOfInfoPage'
import { Option3Page } from './Option3Page'
import { HowToTellPolice } from './HowToTellPolice'
import { Option2Page } from './Option2Page'

const Root = styled('div')`
  margin: 20pt;
`

const Screen = styled('div')`
  margin-top: 30pt;
`

export const Home = () => (
  <Root>
    <PhaseBanner phase={<Trans>ALPHA</Trans>} phaseColor="purple">
      <Trans>
        This site will be changing as we test ideas and learn from people like
        you.
      </Trans>
    </PhaseBanner>
    <Screen>
      <Router>
        <PageNotFound default />
        <Page1 path="/" />
        <Page2 path="/flag" />
        <Option3Page path="/option3" />
        <HowToTellPolice path="/howtotell" />
        <Option2Page path="/option2" />
        <Summary path="/summary/:identifier" />
        <FileUploadPage path="/fileuploader" />
        <Urgency path="/urgency" />
        <AmountOfInfoPage path="/amountofinfo" />
      </Router>
    </Screen>
  </Root>
)
