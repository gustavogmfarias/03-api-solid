import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  //validamos um objeto porque o process.env é no final das contas um objeto com as variáveis que estão em .env
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
  PORT: z.coerce.number().default(3333), //o servidor geralmente decide qual será a porta, então precisamos colcoar, mas caso não seja informado, o padrão será 3333
});

const _env = envSchema.safeParse(process.env); //faz o parse do env com o evnschema e retorna um erro se estiver algum erro.

if (_env.success === false) {
  //caso o safeparse deu erro cai aqui
  console.error("❌ Invalid environment variables", _env.error.format());

  throw new Error("Invalid environment variables.");
}

export const env = _env.data; //se der tudo certo ele exporta o env
