interface AboutSectionProps {
  companyName: string;
}

export default function AboutSection({ companyName }: AboutSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Por que escolher a {companyName}?
            </h2>
            <div className="space-y-4">
              <FeatureItem
                icon="✓"
                title="Procedência Garantida"
                description="Todos os veículos com histórico completo e documentação regularizada."
              />
              <FeatureItem
                icon="✓"
                title="Garantia Estendida"
                description="Proteção adicional para sua tranquilidade e segurança."
              />
              <FeatureItem
                icon="✓"
                title="Financiamento Facilitado"
                description="Condições especiais e taxas competitivas para realizar seu sonho."
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Atendimento Personalizado
            </h3>
            <p className="text-lg mb-8">
              Nossa equipe está pronta para te ajudar a encontrar o veículo
              perfeito para você.
            </p>
            <div className="space-y-4">
              <ContactItem icon="📞" text="(11) 9999-9999" />
              <ContactItem icon="📧" text="contato@motorshow.com.br" />
              <ContactItem icon="📍" text="São Paulo - SP" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function ContactItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <span className="text-lg">{text}</span>
    </div>
  );
}
