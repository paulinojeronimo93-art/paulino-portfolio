import Header from "@/components/layout/Header";

const services = [
  {
    number: "01",
    title: "Websites profissionais",
    description:
      "Websites modernos e responsivos para apresentar empresas, produtos e serviços e gerar oportunidades comerciais.",
  },
  {
    number: "02",
    title: "Aplicações web e sistemas",
    description:
      "Desenvolvimento de plataformas e aplicações adaptadas às necessidades e operações de cada negócio.",
  },
  {
    number: "03",
    title: "Automação de processos",
    description:
      "Soluções para reduzir tarefas manuais, organizar operações e melhorar a eficiência dos processos empresariais.",
  },
  {
    number: "04",
    title: "Soluções com inteligência artificial",
    description:
      "Integração de recursos de IA para melhorar o atendimento, apoiar tarefas e criar experiências digitais mais inteligentes.",
  },
];

const process = [
  {
    number: "01",
    title: "Entendimento",
    description:
      "Conhecer o negócio, identificar necessidades e compreender o problema a resolver.",
  },
  {
    number: "02",
    title: "Planeamento",
    description:
      "Definir a solução, estruturar funcionalidades e estabelecer prioridades.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Construir a solução com atenção à experiência, funcionalidade e qualidade técnica.",
  },
  {
    number: "04",
    title: "Entrega e evolução",
    description:
      "Testar, entregar e apoiar a melhoria contínua da solução.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section
          id="inicio"
          className="relative flex min-h-[calc(100vh-76px)] items-center overflow-hidden"
        >
          <div className="mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="max-w-4xl">
              <p className="animate-fade-in text-xs font-semibold tracking-[3px] text-[#142B49] sm:text-sm">
                PORTFÓLIO PROFISSIONAL
              </p>

              <h1 className="animate-fade-up animation-delay-150 mt-6 max-w-4xl text-4xl font-semibold leading-[1.15] tracking-[-1.8px] text-[#111111] sm:text-5xl lg:text-[68px] lg:leading-[1.12]">
                Transformo ideias e necessidades empresariais em{" "}
                <span className="text-[#142B49]">
                  soluções digitais.
                </span>
              </h1>

              <p className="animate-fade-up animation-delay-300 mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                Desenvolvimento de websites, aplicações e soluções
                tecnológicas que ajudam empresas a melhorar a sua
                presença digital e optimizar processos.
              </p>

              <div className="animate-fade-up animation-delay-450 mt-10 flex flex-wrap gap-4">
                <a
                  href="#projectos"
                  className="interactive-button inline-flex items-center bg-[#142B49] px-7 py-4 text-sm font-medium text-white hover:bg-[#0D1E33]"
                >
                  Explorar projectos <span className="ml-3">↗</span>
                </a>

                <a
                  href="#contacto"
                  className="interactive-button inline-flex items-center border border-gray-300 px-7 py-4 text-sm font-medium text-[#111111] hover:border-[#142B49] hover:text-[#142B49]"
                >
                  Falar comigo
                </a>
              </div>

              <div className="animate-fade-in animation-delay-450 mt-20 flex items-center gap-4">
                <div className="h-px w-12 bg-[#142B49]" />
                <span className="text-[10px] font-medium tracking-[2px] text-gray-500">
                  TECNOLOGIA · ESTRATÉGIA · DESENVOLVIMENTO
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="scroll-mt-24 border-t border-gray-100 bg-[#F7F8FA]">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10 lg:py-32">
            <div>
              <p className="text-xs font-semibold tracking-[3px] text-[#142B49]">
                SOBRE MIM
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#111111] sm:text-4xl">
                Tecnologia com propósito. Soluções com utilidade.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-gray-700">
                Sou Paulino Jerónimo, desenvolvedor e empreendedor
                interessado na criação de produtos digitais e soluções
                tecnológicas para empresas.
              </p>

              <p className="mt-6 text-base leading-8 text-gray-600">
                O meu trabalho combina desenvolvimento web, pensamento
                estratégico e compreensão das necessidades dos negócios.
                Procuro transformar problemas reais em soluções digitais
                funcionais, acessíveis e bem estruturadas.
              </p>

              <p className="mt-6 text-base leading-8 text-gray-600">
                Acredito que a tecnologia deve servir um propósito:
                simplificar processos, melhorar experiências e criar
                novas oportunidades.
              </p>

              <div className="mt-10 border-l-2 border-[#142B49] pl-5">
                <p className="text-sm font-medium text-[#142B49]">
                  A minha abordagem
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Compreender primeiro. Desenvolver com intenção.
                  Entregar soluções que façam sentido.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTOS */}
        <section id="projectos" className="scroll-mt-24">
          <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold tracking-[3px] text-[#142B49]">
                  PROJECTOS SELECCIONADOS
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
                  Trabalho que demonstra capacidade.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-gray-600">
                Produtos e experiências digitais desenvolvidos para
                explorar problemas, funcionalidades e soluções concretas.
              </p>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-2">
              {/* MAZA */}
<article className="group overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
  <div className="flex min-h-[250px] flex-col justify-between bg-[#2447B2] p-8 text-white sm:p-10">
    <div className="flex items-center justify-between">
      <span className="text-xs font-semibold tracking-[2px] text-white/75">
        01 / PRODUTO DIGITAL
      </span>
      <span className="border border-white/30 px-3 py-1 text-[10px] font-medium">
        ANGOLA
      </span>
    </div>

    <div>
      <p className="text-5xl font-bold tracking-[-3px] sm:text-6xl">
        MAZA<span className="text-blue-200">.</span>
      </p>
      <p className="mt-2 text-sm font-medium tracking-wide text-white/80">
        MARKETPLACE FEITO PARA ANGOLA
      </p>
    </div>
  </div>

  <div className="p-8 sm:p-10">
    <div className="flex flex-wrap gap-2">
      {["Next.js", "TypeScript", "Tailwind CSS", "Supabase"].map(
        (tech) => (
          <span
            key={tech}
            className="border border-gray-200 px-3 py-1.5 text-[11px] text-gray-600"
          >
            {tech}
          </span>
        )
      )}
    </div>

    <h3 className="mt-7 text-2xl font-semibold text-[#111111]">
      MAZA.COM
    </h3>

    <p className="mt-4 text-sm leading-7 text-gray-600">
      Marketplace desenvolvido para aproximar compradores
      e vendedores em Angola, com uma experiência de
      compra e venda mais estruturada e orientada para a confiança.
    </p>

    <a
      href="https://maza.company"
      target="_blank"
      rel="noopener noreferrer"
      className="interactive-button mt-8 flex w-full items-center justify-center gap-3 bg-[#2447B2] px-6 py-4 text-sm font-semibold text-white hover:bg-[#19388F]"
    >
      Visitar MAZA.COM <span className="text-lg">↗</span>
    </a>
  </div>
</article>

          {/* NEXUS FITNESS */}
<article className="group overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
  <div className="flex min-h-[250px] flex-col justify-between bg-[#080B08] p-8 text-white sm:p-10">
    <div className="flex items-center justify-between">
      <span className="text-xs font-semibold tracking-[2px] text-white/60">
        02 / PROJECTO DEMONSTRATIVO
      </span>
      <span className="border border-[#B7FF00]/50 px-3 py-1 text-[10px] font-semibold text-[#B7FF00]">
        FITNESS
      </span>
    </div>

    <div>
      <p className="text-5xl font-extrabold tracking-[-3px] sm:text-6xl">
        NEXUS<span className="text-[#B7FF00]">.</span>
      </p>
      <p className="mt-2 text-sm font-semibold tracking-[3px] text-[#B7FF00]">
        FITNESS CLUB
      </p>
    </div>
  </div>

  <div className="p-8 sm:p-10">
    <span className="inline-block border border-[#B7FF00] bg-[#B7FF00]/10 px-3 py-1.5 text-[11px] font-semibold text-[#273500]">
      Projecto demonstrativo
    </span>

    <h3 className="mt-7 text-2xl font-semibold text-[#111111]">
      NEXUS FITNESS CLUB
    </h3>

    <p className="mt-4 text-sm leading-7 text-gray-600">
      Website demonstrativo para um ginásio, com apresentação
      de modalidades, treinadores, planos de adesão e canais
      de contacto. Desenvolvido com foco na experiência do
      utilizador e na apresentação comercial dos serviços.
    </p>

    <a
      href="https://nexus-fitness-bay.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="interactive-button mt-8 flex w-full items-center justify-center gap-3 bg-[#B7FF00] px-6 py-4 text-sm font-bold text-[#080B08] hover:bg-[#A2E600]"
    >
      Visitar NEXUS FITNESS <span className="text-lg">↗</span>
    </a>
  </div>
</article>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="scroll-mt-24 bg-[#F7F8FA]">
          <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <p className="text-xs font-semibold tracking-[3px] text-[#142B49]">
              O QUE POSSO DESENVOLVER
            </p>

            <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
                Soluções digitais para necessidades reais.
              </h2>

              <p className="max-w-md text-sm leading-7 text-gray-600">
                Cada projecto começa com um problema a resolver e uma
                solução pensada de acordo com o contexto do negócio.
              </p>
            </div>

            <div className="mt-14 grid gap-x-12 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="border-t border-gray-300 py-9"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span className="text-xs font-medium tracking-[2px] text-[#142B49]">
                        {service.number}
                      </span>

                      <h3 className="mt-4 text-xl font-semibold text-[#111111]">
                        {service.title}
                      </h3>

                      <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600">
                        {service.description}
                      </p>
                    </div>

                    <span className="text-xl text-[#142B49]">↗</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="scroll-mt-24">
          <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <p className="text-xs font-semibold tracking-[3px] text-[#142B49]">
              COMO TRABALHO
            </p>

            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              Um processo claro, do primeiro contacto à entrega.
            </h2>

            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <article key={step.number} className="border-t border-gray-300 pt-6">
                  <span className="text-sm font-semibold text-[#142B49]">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-[#111111]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="scroll-mt-24 bg-[#142B49] text-white">
          <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <p className="text-xs font-semibold tracking-[3px] text-blue-200">
              VAMOS CONVERSAR
            </p>

            <div className="mt-6 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Tem um projecto em mente? Vamos dar o próximo passo.
                </h2>

                <p className="mt-7 max-w-xl text-base leading-8 text-white/70">
                  Partilhe a sua ideia, necessidade ou desafio.
                  Estou disponível para conversar sobre como uma solução
                  digital pode ajudar o seu negócio.
                </p>

                <a
                  href="https://wa.me/244931832460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-button mt-9 inline-flex items-center bg-white px-7 py-4 text-sm font-semibold text-[#142B49] hover:bg-gray-100"
                >
                  Contactar pelo WhatsApp <span className="ml-3">↗</span>
                </a>
              </div>

              <div className="border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="text-xs font-semibold tracking-[2px] text-white/50">
                  CONTACTO DIRECTO
                </p>

                <a
                  href="mailto:paulinojeronimo93@gmail.com"
                  className="mt-5 block break-all text-base text-white transition-colors hover:text-blue-200"
                >
                  paulinojeronimo93@gmail.com
                </a>

                <a
                  href="https://wa.me/244931832460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-base text-white transition-colors hover:text-blue-200"
                >
                  +244 931 832 460
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0D1E33] text-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <a href="#inicio" className="text-sm font-semibold tracking-tight">
            Paulino Jerónimo<span className="text-blue-300">.</span>
          </a>

          <p className="text-xs text-white/50">
            Soluções digitais · Desenvolvimento tecnológico
          </p>

          <p className="text-xs text-white/50">
            © 2026 Paulino Jerónimo. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}