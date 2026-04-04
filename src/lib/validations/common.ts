import { z } from "zod"

// ─── 기본 필드 스키마 ─────────────────────────────────────────────────────────

export const emailSchema = z
  .string()
  .min(1, "이메일을 입력해 주세요")
  .email("올바른 이메일 형식이 아닙니다")

export const passwordSchema = z
  .string()
  .min(8, "비밀번호는 8자 이상이어야 합니다")
  .max(100, "비밀번호는 100자 이하여야 합니다")

export const strongPasswordSchema = passwordSchema
  .regex(/[A-Z]/, "대문자를 하나 이상 포함해야 합니다")
  .regex(/[a-z]/, "소문자를 하나 이상 포함해야 합니다")
  .regex(/[0-9]/, "숫자를 하나 이상 포함해야 합니다")
  .regex(/[^A-Za-z0-9]/, "특수문자를 하나 이상 포함해야 합니다")

export const phoneSchema = z
  .string()
  .regex(/^01[0-9]-?\d{3,4}-?\d{4}$/, "올바른 휴대폰 번호 형식이 아닙니다")

export const urlSchema = z
  .string()
  .url("올바른 URL 형식이 아닙니다")

export const nameSchema = z
  .string()
  .min(2, "이름은 2자 이상이어야 합니다")
  .max(50, "이름은 50자 이하여야 합니다")

// ─── 조합 스키마 ──────────────────────────────────────────────────────────────

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export const signupSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: strongPasswordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["confirmPassword"],
  })

// ─── 타입 추출 ────────────────────────────────────────────────────────────────

export type LoginFormValues = z.infer<typeof loginSchema>
export type SignupFormValues = z.infer<typeof signupSchema>
