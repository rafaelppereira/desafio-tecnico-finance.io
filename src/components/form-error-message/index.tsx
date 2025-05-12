import { useFormContext } from 'react-hook-form'
import { FormErrorMessageContainer } from './styles'

interface FormErrorMessageProps {
  name: string
}

export function FormErrorMessage({ name }: FormErrorMessageProps) {
  const {
    formState: { errors },
  } = useFormContext()

  const error = errors[name]

  if (!error || typeof error !== 'object' || !('message' in error)) return null

  return (
    <FormErrorMessageContainer>
      {error.message as string}
    </FormErrorMessageContainer>
  )
}
