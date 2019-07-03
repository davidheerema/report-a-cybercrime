/* eslint-disable react/no-unescaped-entities */
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Container } from './components/container'
import { Steps } from './components/stepper'
import { P } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'
import { MoneyLostForm } from './forms/MoneyLostForm'
import { Layout } from './components/layout'

const topBarContainer = css`
  display: flex;
  width: 90%;
  flex-direction: row;
  margin-bottom: 20px;
`

const submitAndNavigate = (client, data) => {
  client.writeData({ data })
  navigate('/suspectinfoquestion')
}

export const MoneyLostPage = () => (
  <Layout>
    <Container css={topBarContainer}>
      <Steps activeStep={1} />
    </Container>
    <H1>
      <Trans>Specify money lost</Trans>
    </H1>
    <P>
      <Trans>
        We probably won't be able to recover the money, but understanding the
        impact of the scam can help build a case.
      </Trans>
    </P>
    <TrackPageViews />
    <MoneyLostForm onSubmit={submitAndNavigate} />
  </Layout>
)
