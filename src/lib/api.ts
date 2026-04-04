// ─── API 에러 클래스 ──────────────────────────────────────────────────────────

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
    public readonly data?: unknown
  ) {
    super(message)
    this.name = "ApiError"
  }
}

// ─── 타입 정의 ────────────────────────────────────────────────────────────────

type RequestOptions = Omit<RequestInit, "body" | "method"> & {
  /** Next.js 캐시 설정 (서버 컴포넌트에서 유용) */
  next?: NextFetchRequestConfig
}

// ─── 내부 헬퍼 ───────────────────────────────────────────────────────────────

async function request<T>(
  url: string,
  options: RequestInit & { next?: NextFetchRequestConfig } = {}
): Promise<T> {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  })

  if (!res.ok) {
    let errorData: unknown
    try {
      errorData = await res.json()
    } catch {
      errorData = null
    }
    throw new ApiError(
      res.status,
      (errorData as { message?: string })?.message ?? res.statusText,
      errorData
    )
  }

  // 204 No Content 등 응답 본문이 없는 경우
  const contentType = res.headers.get("content-type")
  if (!contentType?.includes("application/json")) {
    return null as T
  }

  return res.json() as Promise<T>
}

// ─── API 유틸리티 ─────────────────────────────────────────────────────────────

export const api = {
  get<T>(url: string, options?: RequestOptions): Promise<T> {
    return request<T>(url, { ...options, method: "GET" })
  },

  post<T>(url: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return request<T>(url, {
      ...options,
      method: "POST",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    })
  },

  put<T>(url: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return request<T>(url, {
      ...options,
      method: "PUT",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    })
  },

  patch<T>(url: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return request<T>(url, {
      ...options,
      method: "PATCH",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    })
  },

  delete<T>(url: string, options?: RequestOptions): Promise<T> {
    return request<T>(url, { ...options, method: "DELETE" })
  },
}
