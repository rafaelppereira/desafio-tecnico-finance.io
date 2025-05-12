import { z } from 'zod'

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Por favor preencha esse campo' })
    .email({ message: 'Por favor digite um e-mail válido' }),
  password: z.string().min(1, { message: 'Por favor preencha esse campo' }),
})

export type SignInSchemaProps = z.infer<typeof signInSchema>

export const signUpSchema = z.object({
  name: z.string().min(1, { message: 'Por favor preencha esse campo' }),
  email: z
    .string()
    .min(1, { message: 'Por favor preencha esse campo' })
    .email({ message: 'Por favor digite um e-mail válido' }),
  phone: z
    .string({ required_error: 'Por favor preencha esse campo' })
    .min(1, { message: 'Por favor preencha esse campo' })
    .regex(/^\(?\d{2}\)?[\s.-]?\d{4,5}[\s.-]?\d{4}$/, {
      message: 'Por favor digite um telefone válido',
    }),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    .regex(/[a-z]/, {
      message: 'A senha deve conter pelo menos uma letra minúscula',
    })
    .regex(/[A-Z]/, {
      message: 'A senha deve conter pelo menos uma letra maiúscula',
    })
    .regex(/[0-9]/, {
      message: 'A senha deve conter pelo menos um número',
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'A senha deve conter pelo menos um símbolo',
    }),
})

export type SignUpSchemaProps = z.infer<typeof signUpSchema>

export const forgetPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Por favor preencha esse campo' })
    .email({ message: 'Por favor digite um e-mail válido' }),
})

export type ForgetPasswordProps = z.infer<typeof forgetPasswordSchema>

export const updatePasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
      .regex(/[a-z]/, {
        message: 'A senha deve conter pelo menos uma letra minúscula',
      })
      .regex(/[A-Z]/, {
        message: 'A senha deve conter pelo menos uma letra maiúscula',
      })
      .regex(/[0-9]/, {
        message: 'A senha deve conter pelo menos um número',
      })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'A senha deve conter pelo menos um símbolo',
      }),
    confirmPassword: z
      .string()
      .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
      .regex(/[a-z]/, {
        message: 'A senha deve conter pelo menos uma letra minúscula',
      })
      .regex(/[A-Z]/, {
        message: 'A senha deve conter pelo menos uma letra maiúscula',
      })
      .regex(/[0-9]/, {
        message: 'A senha deve conter pelo menos um número',
      })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'A senha deve conter pelo menos um símbolo',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas precisam ser iguais',
    path: ['confirmPassword'],
  })

export type UpdatePasswordSchemaProps = z.infer<typeof updatePasswordSchema>
