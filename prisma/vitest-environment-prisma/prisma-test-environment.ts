import { Environment } from "vitest";

export default <Environment>{
  name: "prisma", //é o nome dele, não importa muito
  async setup() {
    //essa é a unica função que o environment precisa ter, que é qual função eu quero executar antes dos meus testes.
    //Ou seja, ele vai executar antes de qualquer arquivo de teste
    console.log("Setup");

    return {
      async teardown() {
        //tem que retornar esse método, ele eu quero executar após os testes
        console.log("Teardown");
      },
    };
  },
};
