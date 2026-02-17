export async function loginHandling(username: string, password: string) {
  const formData = new URLSearchParams()
  formData.append("username", username)
  formData.append("password", password)

  try {
    const res = await fetch(`http://localhost:8000/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    })

    const data = await res.json()

    if (!res.ok) {
      return { success: false, message: data.detail || "Login failed" }
    }

    return { success: true, data }
  } 
  catch (err) {
    return { success: false, message: "Network error" }
  }
}
