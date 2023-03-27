import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environmentMatchGlobs: [["src/http/controllers/**", "prisma"]], //o primeiro parâmetro é o caminho do arquivo dos testes que eu criei, e o segundo é o nome do pacote de teste
    //Ou seja, todos os testes que estão em http, eu quero que use o environment prisma.
  },
});
