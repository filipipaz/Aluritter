import { App } from "../layouts/App";

import { useState } from "react";

export const Home = () => {
  const [message, setMessage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("PUBLICANDO UM NOVO TWEET");
  };

  const onSubmit = ({ textarea }) => {
    console.log("aluritando", textarea);
    setAlurites((prevAlurites) => [
      ...prevAlurites,
      { textarea, id: prevAlurites.length + 1 },
    ]);
  };

  const handleLogout = () => {
    console.log("Saindo");
  };

  return (
    <App>
      <header className="py-2.5 px-5 flex justify-between items-center">
        <span className="text-lg font-sans text-sky-500">aluritter</span>
        <div className="flex gap-2.5 items-center">
          <span className="text-slate-500 text-sm">email@example.com</span>
          <button
            className="bg-red-500 text-white rounded py-1 px-2 text-center text-sm"
            onClick={handleLogout}
            type="button"
          >
            sair
          </button>
        </div>
      </header>
      <section className="container mx-auto p-10">
        <form onSubmit={handleFormSubmit} className="w-full ">
          <textarea
            className="border rounded w-full resize-none text-gray-500 p-5 my-2"
            placeholder="Alurite agora mesmo..."
            maxLength={255}
            onChange={(event) => setMessage(event.target.value)}
            rows={3}
            value={message}
          />
          <div className="flex justify-between">
            {message.length < 255 ? (
              <p className="text-sm text-green-600">
                Você ainda pode digitar {255 - message.length} caracteres
              </p>
            ) : (
              <p className="text-sm text-red-600">
                Você esgotou a quantidade de caracteres
              </p>
            )}
            <button
              className="bg-sky-500 text-white rounded p-2 hover:bg-sky-600"
              type="submit"
            >
              aluritar
            </button>
          </div>
        </form>
        <div className="border px-4 py-2 bg-white rounded mt-5 first:mt-0">
          <p className="text-gray-500 py-2 mb-5">
            Pagina principal com estrutura e estilos
          </p>
          <div className="flex justify-between">
            <span className="text-sm text-sky-500">email@exemplo.com.br</span>
            <time className="text-xs text-gray-500">01/01/2023 5:00:00 PM</time>
          </div>
        </div>  
      </section>
    </App>
  );
};
