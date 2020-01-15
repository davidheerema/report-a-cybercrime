/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { TextArea } from '../components/text-area'
import { Stack, FormControl, VisuallyHidden } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'

export const InformationForm = ({ onSubmit }) => (
  <Form
    initialValues={{}}
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <Stack as="form" onSubmit={handleSubmit} shouldWrapChildren spacing={6}>
        <Field name="typeOfInfoReq">
          {props => (
            <FormControl>
              <FormLabel htmlFor="typeOfInfoReq">
                <Trans id="informationPage.typeOfInfoReq" />
              </FormLabel>
              <FormHelperText>
                <Trans id="informationPage.typeOfInfoReqExample">
                  <VisuallyHidden as="span" />
                </Trans>
              </FormHelperText>
              <TextInput
                id="typeOfInfoReq"
                name={props.input.name}
                value={props.input.value}
                onChange={props.input.onChange}
              />
            </FormControl>
          )}
        </Field>
        <Field name="typeOfInfoObtained">
          {props => (
            <FormControl>
              <FormLabel htmlFor="typeOfInfoObtained">
                <Trans id="informationPage.typeOfInfoObtained" />
              </FormLabel>
              <FormHelperText>
                <Trans id="informationPage.typeOfInfoObtainedExample">
                  <VisuallyHidden as="span" />
                </Trans>
              </FormHelperText>
              <TextInput
                id="typeOfInfoObtained"
                name={props.input.name}
                value={props.input.value}
                onChange={props.input.onChange}
              />
            </FormControl>
          )}
        </Field>
        <Field name="tellUsMore">
          {props => (
            <FormControl>
              <FormLabel htmlFor="tellUsMore">
                <Trans id="informationPage.tellUsMore" />
              </FormLabel>
              <FormHelperText>
                  <Trans id="informationPage.tellUsMoreExample" />
                </FormHelperText>
              <TextArea
                id="tellUsMore"
                name={props.input.name}
                value={props.input.value}
                onChange={props.input.onChange}
              />
            </FormControl>
          )}
        </Field>
        <NextAndCancelButtons
          next={<Trans id="informationPage.nextStep" />}
          button={<Trans id="informationPage.nextButton" />}
        />
      </Stack>
    )}
  />
)

InformationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
