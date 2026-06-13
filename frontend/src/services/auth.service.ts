import api from "@/lib/axios";

export const login = async (correo: string, password: string) => {
  const response = await api.post("/auth/login", {
    correo,
    password,
  });

  return response.data;
};
