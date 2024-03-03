import { AxiosRequestConfig } from "axios";

// Responsável por configurar as requisições HTTP para não precisar configurar a cada requisição

export const api: string = "https://localhost:7237/api/habit/";
export const uploads: string = "http://localhost:5000/uploads";

// Configurando a requisição // Método // Dados // Token do usuário // Imagens enviadas também serão configuradas por aqui
export const requestConfig = (
  method: string,
  data: any,
  token: string | null = null,
  image: any = null
): AxiosRequestConfig<any> => {
  let config: AxiosRequestConfig<any> = {
    method,
    headers: {}, // Inicializa headers como um objeto vazio
  };

  if (image) {
    // Se vier imagem // Form data
    config.data = data; // Usar 'data' em vez de 'body' para envio de imagem
  } else if (method !== "DELETE" && data !== null) {
    // Último caso, quando vem dados
    config.data = JSON.stringify(data); // Utiliza JSON
    config.headers = { "Content-Type": "application/json" }; // Define o cabeçalho 'Content-Type' apenas se houver dados
  }

  // Verificando se veio o token e coloca no headers
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`, // Adiciona o token ao cabeçalho
    };
  }

  return config;
};
