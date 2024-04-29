import Menu from "@/components/Menu";
import Contact from "@/components/contact";

export default function Works() {
  return (
    <>
      <div className="w-full flex items-center justify-center text-zinc-300 h-auto bg-black">
        <div className=" w-5/6 py-20">
          <h2 className="md:text-5xl text-2xl">Para Empresas</h2>
          <h2>
            <b>
              {"("}Contratações{")"}
            </b>
            <br />
            <br />
          </h2>

          <h2>
            <b>Natureza do Serviço:</b>
          </h2>
          <p>
            A Plataforma oferece serviços de consultoria de desenvolvimento web
            remoto, especializado em JavaScript e frameworks associados, bem
            como TypeScript. Todos os serviços são prestados de forma remota.
          </p>
          <br />

          <h2>
            <b>Agendamento de Reuniões:</b>
          </h2>
          <p>
            Reuniões para discussões, apresentações de projetos, resolução de
            problemas ou qualquer outra finalidade serão agendadas com
            antecedência. O agendamento será realizado de maneira mutuamente
            conveniente para ambas as partes, garantindo a eficácia das
            interações.
          </p>
          <br />

          <h2>
            <b>Confidencialidade:</b>
          </h2>
          <p>
            Todas as informações compartilhadas entre a CONTRATADA e o
            CONTRATANTE têm caráter estritamente confidencial. Isso inclui, mas
            não se limita a, detalhes de projetos, propostas, ideias, planos de
            negócio e qualquer outra informação sensível ou proprietária.
          </p>
          <br />

          <h2>
            <b>Responsabilidade e Garantias:</b>
          </h2>
          <p>
            A CONTRATADA se compromete a exercer suas habilidades e
            conhecimentos da melhor forma possível para atender às necessidades
            e expectativas do CONTRATANTE. No entanto, não é possível garantir
            resultados específicos, uma vez que o sucesso de um projeto pode
            depender de diversos fatores além do controle direto da CONTRATADA.
          </p>
          <br />

          <h2>
            <b>Propriedade Intelectual:</b>
          </h2>
          <p>
            Qualquer trabalho, código, artefatos ou produtos resultantes da
            colaboração entre a CONTRATADA e o CONTRATANTE permanecerão de
            propriedade exclusiva do CONTRATANTE, a menos que expressamente
            acordado de outra forma por ambas as partes.
          </p>
          <br />

          <h2>
            <b>Alterações nos Termos de Uso:</b>
          </h2>
          <p>
            Estes termos de uso estão sujeitos a alterações sem aviso prévio.
            Quaisquer modificações serão comunicadas ao CONTRATANTE antes de
            entrar em vigor.
          </p>
        </div>
      </div>
      <Contact />
      <Menu />
    </>
  );
}
